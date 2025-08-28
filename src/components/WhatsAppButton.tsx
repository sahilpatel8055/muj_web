import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Configuration - Your WhatsApp number and message
  const phoneNumber = "917795133908"; 
  const message = "Hello, I would like to know more about the courses.";
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp URL logic
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Use a timer to show the pop-up message after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show popup if user hasn't scrolled yet
      if (!hasScrolled) { 
        setShowPopup(true);
      }
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, [hasScrolled]); // Re-run if scroll state changes

  // Use a scroll listener to dismiss the popup if the user starts scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Set hasScrolled to true only once
      if (!hasScrolled) {
        setHasScrolled(true);
        setShowPopup(false); // Hide the popup once the user scrolls
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]); // Re-run if hasScrolled state changes

  return (
    <div className="fixed bottom-4 left-4 z-[90] flex items-end flex-col space-y-2">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-primary text-primary-foreground p-3 rounded-lg shadow-xl max-w-xs text-sm flex items-start gap-2" // Added flex items-start gap-2
          >
            <p className="flex-1"> {/* Added flex-1 */}
              Want to know more? We are here to help!
            </p>
            <button 
                onClick={() => setShowPopup(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-1 rounded-full"
            >
                <X className="w-4 h-4" /> {/* Lucide X icon for dismiss */}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block"
      >
        <div 
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366]/80 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
