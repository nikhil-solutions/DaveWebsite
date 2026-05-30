import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProductsIndex from "./pages/ProductsIndex";
import NotFound from "./pages/NotFound";

import PortalPage from "./pages/PortalPage";
import CompositeMaintenance from "./pages/CompositeMaintenance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<PortalPage />} />
              <Route path="/sealing" element={<HomePage />} />
              <Route path="/composite-maintenance" element={<CompositeMaintenance />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/products" element={<ProductsIndex />} />
              <Route path="/products/:productType" element={<ProductPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
