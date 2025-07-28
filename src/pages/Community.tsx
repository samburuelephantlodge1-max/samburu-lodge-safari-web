
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from '@/components/ui/card';
import { updatePageMeta } from "@/utils/seo";

const Community = () => {
  useEffect(() => {
    updatePageMeta(
      "Community & Conservation - Samburu Elephant Lodge Impact",
      "Learn about our community initiatives, wildlife conservation efforts, and sustainable tourism practices that protect Samburu's ecosystem and empower local communities.",
      "/community"
    );
  }, []);
  const initiatives = [
    {
      title: "Education Support",
      description: "Building schools and providing educational resources for local children",
      image: "/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png"
    },
    {
      title: "Healthcare Programs",
      description: "Mobile clinics and health awareness programs for remote communities",
      image: "/lovable-uploads/0808a2aa-6a3d-4233-b3b1-f0ad915c2478.png"
    },
    {
      title: "Cultural Preservation",
      description: "Supporting traditional Samburu customs, language, and cultural practices",
      image: "/lovable-uploads/349d6974-edd6-418e-8d19-2ef6ff2075ae.png"
    }
  ];

  const conservationEfforts = [
    {
      title: "Wildlife Protection",
      description: "Anti-poaching initiatives and wildlife monitoring programs"
    },
    {
      title: "Habitat Restoration", 
      description: "Reforestation and ecosystem restoration projects"
    },
    {
      title: "Research & Education",
      description: "Scientific research and conservation education programs"
    },
    {
      title: "Community Rangers",
      description: "Training local community members as wildlife conservationists"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-brand-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-brown mb-4">Community & Conservancy</p>
            <h1 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
              Protecting Wildlife,<br />Empowering Communities
            </h1>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Our commitment extends beyond hospitality to meaningful conservation and 
              community development initiatives that create lasting positive impact 
              in the Samburu region.
            </p>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-brand-brown mb-12 text-center font-playfair">
            Community Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="bg-white border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-light text-brand-brown mb-3 font-playfair">
                    {initiative.title}
                  </h3>
                  <p className="text-brand-brown/80 leading-relaxed font-light">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Efforts */}
      <section className="py-20 bg-brand-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light text-brand-brown mb-8 font-playfair">
              Conservation Efforts
            </h2>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light">
              Working hand-in-hand with local communities and conservation organizations 
              to protect the unique ecosystem of Samburu for future generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {conservationEfforts.map((effort, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-light text-brand-brown mb-3 font-playfair">
                  {effort.title}
                </h4>
                <p className="text-brand-brown/80 leading-relaxed font-light text-sm">
                  {effort.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-brand-brown mb-8 font-playfair">
              Get Involved
            </h2>
            <p className="text-lg text-brand-brown/80 leading-relaxed font-light mb-8">
              Join us in making a difference. Your visit directly contributes to our 
              conservation and community development programs. Together, we can ensure 
              that the magic of Samburu continues for generations to come.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2 font-light">Visit & Support</h4>
                <p className="text-xs text-brand-brown/70 font-light">Every stay contributes to local projects</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2 font-light">Volunteer</h4>
                <p className="text-xs text-brand-brown/70 font-light">Join our conservation activities</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.1em] text-brand-brown mb-2 font-light">Partner</h4>
                <p className="text-xs text-brand-brown/70 font-light">Collaborate on sustainability initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
