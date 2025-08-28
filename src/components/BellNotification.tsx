import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BellNotificationProps {
  onApplyNowClick: () => void;
}

const BellNotification: React.FC<BellNotificationProps> = ({ onApplyNowClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);

  // Check if in cooling period (30 minutes)
  const isInCoolingPeriod = () => {
    const lastAction = localStorage.getItem('bellLastAction');
    if (!lastAction) return false;
    
    const thirtyMinutes = 30 * 60 * 1000;
    return Date.now() - parseInt(lastAction) < thirtyMinutes;
  };

  // Handle scroll detection (30%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);

      if (scrollPercent >= 0.3 && !hasScrolledEnough && !isInCoolingPeriod()) {
        setHasScrolledEnough(true);
        setIsVisible(true);
        setIsMessageOpen(true);
        setCountdown(20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledEnough]);

  // Auto-close message after 20 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMessageOpen && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsMessageOpen(false);
    }
    return () => clearTimeout(timer);
  }, [isMessageOpen, countdown]);

  // Reset on page change
  useEffect(() => {
    const handleBeforeUnload = () => {
      setHasScrolledEnough(false);
      setIsVisible(false);
      setIsMessageOpen(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleBellClick = () => {
    setIsMessageOpen(!isMessageOpen);
    if (!isMessageOpen) {
      setCountdown(20);
    }
  };

  const handleApplyNow = () => {
    localStorage.setItem('bellLastAction', Date.now().toString());
    setIsMessageOpen(false);
    onApplyNowClick();
  };

  const handleCloseMessage = () => {
    setIsMessageOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Message Popup */}
      {isMessageOpen && (
        <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg shadow-lg p-4 w-72 mb-2 animate-in slide-in-from-bottom-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCloseMessage}
            className="absolute top-1 right-1 h-6 w-6 rounded-full hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="h-3 w-3" />
          </Button>
          
          <div className="pr-6">
            <h4 className="font-semibold text-sm text-foreground mb-1">
              ⏰ Admission is Closing Soon For July Batch!
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Avail early bird discount on program fee
            </p>
            
            <div className="flex items-center justify-between">
              <Button
                onClick={handleApplyNow}
                className="bg-gradient-primary hover:opacity-90 transition-smooth text-xs h-7 px-3"
              >
                Apply Now
              </Button>
              <span className="text-xs text-muted-foreground">
                Auto-close in {countdown}s
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Bell Icon */}
      <Button
        onClick={handleBellClick}
        className="w-12 h-12 rounded-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-lg"
        size="icon"
      >
        <Bell className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default BellNotification;
