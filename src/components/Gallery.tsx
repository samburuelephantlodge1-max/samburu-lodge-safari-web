
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/92cfc94f-80f8-41ef-bade-091186ea5ace.png",
      alt: "Cottage interior with natural lighting",
      category: "Accommodation"
    },
    {
      src: "/lovable-uploads/7ca574ad-4fab-422e-b0e8-19d05f205a0f.png",
      alt: "Grevy Zebra cottage exterior",
      category: "Accommodation"
    },
    {
      src: "/lovable-uploads/609a7792-a922-4734-a8df-59852f0ed05e.png",
      alt: "Elegant cottage bedroom",
      category: "Accommodation"
    },
    {
      src: "/lovable-uploads/576d29f0-3a37-4d26-9a8d-569970375393.png",
      alt: "Bush dining experience",
      category: "Dining"
    },
    {
      src: "/lovable-uploads/5e4fb002-415f-4ada-ab4b-df46595fd725.png",
      alt: "Lodge main building",
      category: "Lodge"
    },
    {
      src: "/lovable-uploads/659bf2a0-4859-4a60-bc13-d6d03cb00697.png",
      alt: "Elevated walkway",
      category: "Experience"
    },
    {
      src: "/lovable-uploads/58af4939-26cc-412a-a0fa-59410a57d7b2.png",
      alt: "Spa and wellness area",
      category: "Spa"
    },
    {
      src: "/lovable-uploads/115029a8-3ee7-40a7-b8e7-969bd2b1bad2.png",
      alt: "Sunset over Samburu",
      category: "Landscape"
    },
    {
      src: "/lovable-uploads/def24568-96e2-4763-9a52-6359ff5e44e3.png",
      alt: "Swimming pool area",
      category: "Facilities"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Gallery
          </h2>
          <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto leading-relaxed font-light">
            Explore the beauty of Samburu through our collection of stunning images showcasing wildlife, landscapes, and lodge experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-brand-orange px-2 py-1 rounded text-sm font-medium">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-light text-brand-brown mb-6 font-playfair">
              Guest Testimonials
            </h3>
            <div className="space-y-6">
              <blockquote className="bg-brand-cream/20 p-6 rounded-lg border-l-4 border-brand-orange">
                <p className="text-brand-brown/80 italic leading-relaxed mb-4 font-light">
                  "Staying at Samburu Elephant Lodge was a dream come true! The views of the river, the herds of elephants, and the impeccable service made this trip truly unforgettable."
                </p>
                <cite className="text-brand-orange font-light">— Sarah M, USA</cite>
              </blockquote>
              
              <blockquote className="bg-brand-cream/20 p-6 rounded-lg border-l-4 border-brand-orange">
                <p className="text-brand-brown/80 italic leading-relaxed mb-4 font-light">
                  "The guided visit to a Samburu village was eye-opening. Learning about their traditions while staying in such a stunning location made this trip extraordinary."
                </p>
                <cite className="text-brand-orange font-light">— Liam T, Canada</cite>
              </blockquote>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/def24568-96e2-4763-9a52-6359ff5e44e3.png"
              alt="Pool experience"
              className="rounded-lg shadow-xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
