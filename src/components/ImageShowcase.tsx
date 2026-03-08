
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const showcaseImages = [
    {
      src: "/lovable-uploads/c7ba6ea1-4a19-447c-a582-0203f1ab4c5b.png",
      alt: "Luxurious cottage interior with traditional African design",
      title: "Authentic Safari Experience",
      description: "Immerse yourself in luxury while staying connected to nature"
    },
    {
      src: "/lovable-uploads/36ad2e76-dde3-4e9c-a48b-5e294fa36629.png",
      alt: "Elegant cottage interior with canopy bed and seating area",
      title: "Luxury Accommodations",
      description: "Rest in comfort surrounded by nature's beauty"
    },
    {
      src: "/lovable-uploads/c9f32bb7-a3cf-48a2-bc89-213182607fec.png",
      alt: "Spa and wellness outdoor treatment area",
      title: "Wellness & Relaxation",
      description: "Rejuvenate your mind and body in nature's embrace"
    },
    {
      src: "/lovable-uploads/b6585bdf-a90e-4fec-a9b5-b9aa0970b174.png",
      alt: "Spacious cottage with panoramic windows and outdoor terrace",
      title: "Panoramic Views",
      description: "Wake up to breathtaking views of the Samburu landscape"
    }
  ];

  return (
    <section className="py-0 bg-white">
      {/* Hero Images Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
          {showcaseImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden h-80 lg:h-96"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg font-light mb-2 font-playfair">{image.title}</h3>
                  <p className="text-sm font-light opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-b from-white to-brand-cream/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown/60 mb-4">Welcome to</p>
            <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-8 font-playfair">
              Samburu Elephant Lodge
            </h2>
            <p className="text-xl text-brand-brown/80 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
              Where luxury meets wilderness in the heart of Kenya's Samburu National Reserve. 
              Experience authentic African hospitality, exceptional wildlife encounters, and 
              unforgettable moments in nature's most spectacular setting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-light text-brand-orange">10</span>
                </div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2">Luxury Cottages</h3>
                <p className="text-brand-brown/70 font-light text-sm">Thoughtfully designed for comfort</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-light text-brand-orange">24/7</span>
                </div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2">Butler Service</h3>
                <p className="text-brand-brown/70 font-light text-sm">Personalized attention always</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-light text-brand-orange">∞</span>
                </div>
                <h3 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2">Unique Experiences</h3>
                <p className="text-brand-brown/70 font-light text-sm">Curated for lasting memories</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light rounded-xl">
                  Reserve Your Stay <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/accommodation">
                <Button 
                  variant="outline" 
                  className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light rounded-xl"
                >
                  Explore Accommodations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Showcase image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              loading="lazy"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageShowcase;
