
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
      "Samburu Elephant Lodge - Authentic Safari Experience in Kenya",
      "Experience luxury and wildlife at Samburu Elephant Lodge in Kenya's Samburu National Reserve. Authentic safari adventures, cultural encounters, and eco-friendly accommodations.",
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
