import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RideFinder from "./pages/RideFinder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<Index />} />
          <Route path="/eco-points" element={<Index />} />
          <Route path="/safety" element={<Index />} />
          <Route path="/live-map" element={<Index />} />
          <Route path="/find-ride" element={<RideFinder />} />
          {/* Legacy routes - keeping them for backward compatibility */}
          <Route path="/ride" element={<Index />} />
          <Route path="/drive" element={<Index />} />
          <Route path="/business" element={<Index />} />
          <Route path="/about" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
