import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { updatePageMeta } from "@/utils/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    updatePageMeta(
      "Page Not Found - Samburu Elephant Lodge",
      "The page you're looking for doesn't exist. Explore our safari experiences, luxury accommodations, and wildlife adventures in Samburu National Reserve, Kenya.",
      location.pathname
    );
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-b from-brand-cream to-white">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-light font-playfair text-brand-brown mb-6">404</h1>
          <h2 className="text-3xl font-light text-brand-brown mb-4">Page Not Found</h2>
          <p className="text-lg text-brand-brown/80 mb-8 leading-relaxed">
            The page you're looking for doesn't exist. Let's get you back to exploring 
            the wonders of Samburu National Reserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/">
              <Button className="bg-brand-orange text-white hover:bg-brand-orange-dark px-8 py-3">
                Return to Home
              </Button>
            </a>
            <a href="/accommodation">
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3">
                View Accommodations
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
