import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounselingFormPopup from "./components/CounselingFormPopup";
import BellNotification from "./components/BellNotification";
import WhatsAppButton from "./components/WhatsAppButton"; // Import the new WhatsAppButton component
import { useCounselingPopup } from "./hooks/useCounselingPopup";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MBA from "./pages/MBA";
import MCA from "./pages/MCA";
import MCOM from "./pages/MCOM";
import BBA from "./pages/BBA";
import BCA from "./pages/BCA";
import BCOM from "./pages/BCOM";
import MUJ from "./pages/MUJ";
import MAHE from "./pages/MAHE";
import SMU from "./pages/SMU";
import AllCourses from './pages/AllCourses';
import MBA_SMU from './pages/MBA_SMU';
import MCA_SMU from './pages/MCA_SMU';
import BA_SMU from './pages/BA_SMU';
import MA_SMU from './pages/MA_SMU';
import BCOM_SMU from './pages/BCOM_SMU';
import MCOM_SMU from './pages/MCOM_SMU';
import ManipalAdvantagePage from './pages/ManipalAdvantagePage'; // Assuming this is already here from previous steps

const queryClient = new QueryClient();

const AppContent = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  const handleBellApplyNow = () => {
    triggerPopup();
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mba" element={<MBA />} />
        <Route path="/mca" element={<MCA />} />
        <Route path="/mcom" element={<MCOM />} />
        <Route path="/bba" element={<BBA />} />
        <Route path="/bca" element={<BCA />} />
        <Route path="/bcom" element={<BCOM />} />
        <Route path="/muj" element={<MUJ />} />
        <Route path="/mahe" element={<MAHE />} />
        <Route path="/smu" element={<SMU />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/mba-smu" element={<MBA_SMU />} />
        <Route path="/mca-smu" element={<MCA_SMU />} />
        <Route path="/ba-smu" element={<BA_SMU />} />
        <Route path="/ma-smu" element={<MA_SMU />} />
        <Route path="/bcom-smu" element={<BCOM_SMU />} />
        <Route path="/mcom-smu" element={<MCOM_SMU />} />
        <Route path="/advantage" element={<ManipalAdvantagePage />} /> {/* Assuming this route is already present */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Global Popup and Bell Notification */}
      <CounselingFormPopup 
        isOpen={showPopup} 
        onClose={hidePopup} 
        trigger="auto" 
      />
      <BellNotification onApplyNowClick={handleBellApplyNow} />
      <WhatsAppButton /> {/* Render the WhatsAppButton component here */}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
