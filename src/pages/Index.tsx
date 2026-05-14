
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageShowcase from "@/components/ImageShowcase";
import About from "@/components/About";
import AccommodationPreview from "@/components/AccommodationPreview";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import Gallery from "@/components/Gallery";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { updatePageMeta } from "@/utils/seo";

const Index = () => {
  useEffect(() => {
    updatePageMeta(
      "Samburu Elephant Lodge — Safari Lodge in Kenya",
      "Authentic safari lodge in Kenya's Samburu National Reserve. Wildlife, culture and eco-friendly stays on the Ewaso Nyiro River.",
      "/"
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImageShowcase />
      <About />
      <AccommodationPreview />
      <ExperiencesPreview />
      <Gallery />
      <BlogPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
