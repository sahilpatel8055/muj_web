import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Configuration - Your WhatsApp number and message
  const phoneNumber = "7795133908"; 
  const message = "Hello, I would like to know more about the courses.";
  const encodedMessage = encodeURIComponent(message);
  
  // WhatsApp URL logic - Use different format for better compatibility
  const whatsappUrl = `https://api.whatsapp.com/send?phone=91${phoneNumber}&text=${encodedMessage}`;

  // Use a timer to show the pop-up message after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show popup if user hasn't scrolled yet
      if (!hasScrolled) { 
        setShowPopup(true);
      }
    }, 10000); // Show popup after 5 seconds

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
    <div className="fixed right-0 z-[90] flex items-end flex-col space-y-2" style={{ top: 'calc(30% - 20px)' }}>
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-primary text-primary-foreground p-3 md:p-3 p-2 rounded-lg shadow-xl max-w-xs md:max-w-xs max-w-[200px] text-sm md:text-sm text-xs flex items-start gap-2"
          >
            <p className="flex-1">
              Want to know more? We are here to help!
            </p>
            <button 
                onClick={() => setShowPopup(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors p-1 rounded-full"
            >
                <X className="w-4 h-4 md:w-4 md:h-4 w-3 h-3" />
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
        {/* Desktop/Laptop/Tablet View - Horizontal smaller design */}
        <div 
          className="hidden md:flex bg-[#25D366] text-white rounded-tl-2xl rounded-bl-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex-row items-center py-3 px-3 gap-2"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span className="font-medium text-sm whitespace-nowrap">Chat</span>
          <span className="absolute -top-1 -left-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366]/80 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00E676]"></span>
          </span>
        </div>
        
        {/* Mobile View - Smaller and higher positioned */}
        <div 
          className="md:hidden bg-[#25D366] text-white rounded-tl-2xl rounded-bl-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center py-2 px-2"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span className="absolute -top-1 -left-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366]/80 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
