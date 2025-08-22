import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MBA from "./pages/MBA";
import MCA from "./pages/MCA";
import MCOM from "./pages/MCOM";
import BBA from "./pages/BBA";
import BCA from "./pages/BCA";
import BCOM from "./pages/BCOM";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mba" element={<MBA />} />
          <Route path="/mca" element={<MCA />} />
          <Route path="/mcom" element={<MCOM />} />
          <Route path="/bba" element={<BBA />} />
          <Route path="/bca" element={<BCA />} />
          <Route path="/bcom" element={<BCOM />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
