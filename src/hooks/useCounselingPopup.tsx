import { useState, useEffect } from 'react';

interface CounselingPopupLogic {
  showPopup: boolean;
  hidePopup: () => void;
  triggerPopup: () => void;
}

export const useCounselingPopup = (): CounselingPopupLogic => {
  const [showPopup, setShowPopup] = useState(false);

  // Check if form was submitted in this session
  const isFormSubmitted = () => {
    return sessionStorage.getItem('counselingFormSubmitted') === 'true';
  };

  // Check if in cooling period (5 minutes)
  const isInCoolingPeriod = () => {
    const lastClose = localStorage.getItem('counselingFormLastClose');
    if (!lastClose) return false;
    
    const fiveMinutes = 5 * 60 * 1000;
    return Date.now() - parseInt(lastClose) < fiveMinutes;
  };

  // Auto popup logic
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    let timeDelayTimer: NodeJS.Timeout;
    let hasScrolledEnough = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);

      // 50% scroll trigger
      if (scrollPercent >= 0.5 && !hasScrolledEnough && !isFormSubmitted() && !isInCoolingPeriod()) {
        hasScrolledEnough = true;
        scrollTimer = setTimeout(() => {
          setShowPopup(true);
        }, 0);
      }
    };

    // 25 second delay trigger (or 30 seconds if coming from another page and in cooling)
    const delay = isInCoolingPeriod() ? 30000 : 25000;
    if (!isFormSubmitted()) {
      timeDelayTimer = setTimeout(() => {
        if (!hasScrolledEnough && !isInCoolingPeriod()) {
          setShowPopup(true);
        }
      }, delay);
    }

    // Mouse leave trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isFormSubmitted() && !isInCoolingPeriod()) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(timeDelayTimer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const hidePopup = () => {
    setShowPopup(false);
    localStorage.setItem('counselingFormLastClose', Date.now().toString());
  };

  const triggerPopup = () => {
    setShowPopup(true);
  };

  return {
    showPopup,
    hidePopup,
    triggerPopup
  };
};