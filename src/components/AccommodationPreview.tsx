
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Coffee, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccommodationPreview = () => {
  const featuredCottages = [
    {
      title: "Tembo",
      subtitle: "Family Cottage",
      count: "6 Guests",
      description: "Three interconnected bedrooms perfect for larger families seeking luxury",
      image: "/lovable-uploads/ee4b0d52-e85a-4e07-b337-360f2f487f28.png"
    },
    {
      title: "Beisa Oryx Cottage",
      subtitle: "Single Cottage",
      count: "2 Guests",
      description: "Intimate cottage perfect for couples with luxurious amenities",
      image: "/lovable-uploads/0fba290e-2f90-4159-8fa9-a1ee42ce6006.png"
    }
  ];

  const conferenceRoom = {
    title: "Conference & Meeting Facilities",
    description: "Professional meeting space strategically located in the coolest areas of the lodge for optimal comfort during events and corporate retreats",
    image: "/lovable-uploads/919f4db2-b83d-4c5d-984c-46f41e52f10c.png"
  };

  return (
    <section id="accommodation" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Accommodation</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-playfair">
            Luxury Tented Cottages<br />& Conference Facilities
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Experience comfort in the wild with our thoughtfully designed cottages and 
            professional meeting facilities for every type of traveler.
          </p>
        </div>

        {/* Featured Cottages */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredCottages.map((cottage, index) => (
            <Card key={index} className="bg-white border-0 shadow-none overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={cottage.image}
                  alt={cottage.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1">
                  <span className="text-xs uppercase tracking-[0.1em] text-gray-700">
                    {cottage.count}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {cottage.subtitle}
                  </p>
                  <h3 className="text-xl font-light text-gray-900 mb-3 font-playfair">
                    {cottage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {cottage.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conference Room */}
        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-lg overflow-hidden mb-16">
          <div className="lg:flex">
            <div className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden">
              <img 
                src={conferenceRoom.image}
                alt={conferenceRoom.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 p-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4 font-playfair">
                {conferenceRoom.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                {conferenceRoom.description}
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-center">
                  <Coffee className="w-5 h-5 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Catering available</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Dining Preview */}
        <div className="bg-white p-12 max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <Utensils className="w-8 h-8 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-light text-gray-900 mb-4 font-playfair">
              Dining Experience
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              Savor exceptional cuisine crafted from locally sourced ingredients, 
              served in our elegant dining areas or under the African stars.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/accommodation">
            <Button 
              variant="outline" 
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-sm uppercase tracking-[0.1em] font-light"
            >
              View All Accommodation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccommodationPreview;
