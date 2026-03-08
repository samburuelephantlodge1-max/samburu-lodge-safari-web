import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Binoculars, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperiencesPreview = () => {
  const experiences = [
    {
      title: "Game Drives",
      description: "Explore the vast Samburu National Reserve in our comfortable 4WD vehicles with experienced guides",
      icon: Binoculars,
      image: "/lovable-uploads/a52c4714-9af4-4b55-9836-9df1f03846e4.png"
    },
    {
      title: "Sundowners",
      description: "Experience magical African sunsets with drinks and snacks at scenic viewpoints",
      icon: Sun,
      image: "/lovable-uploads/b3a34ba0-4a5b-4f09-88c3-b2ec1e220807.png"
    },
    {
      title: "Cultural Encounters",
      description: "Meet the Samburu people and learn about their rich traditions and way of life",
      icon: Binoculars,
      image: "/lovable-uploads/1fbbafa5-a3d3-4162-b471-49f406e6f193.png"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gradient-to-b from-brand-cream/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Unforgettable Experiences
          </h2>
          <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto leading-relaxed font-light">
            Immerse yourself in the wonders of Samburu through carefully curated activities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white border-brand-cream hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-brand-brown font-playfair font-light">
                  {experience.title}
                </CardTitle>
                <p className="text-brand-brown/80 leading-relaxed font-light">
                  {experience.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/#experiences">
            <Button 
              variant="outline" 
              className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light"
            >
              View All Experiences <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesPreview;
