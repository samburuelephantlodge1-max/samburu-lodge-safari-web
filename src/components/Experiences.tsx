
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experiences = () => {
  const experiences = [
    {
      title: "Game Drives",
      description: "Explore the vast Samburu National Reserve in our comfortable 4WD vehicles with experienced guides",
      highlights: [
        "Morning and evening drives",
        "Professional safari guides",
        "Wildlife photography opportunities",
        "All-weather vehicles"
      ],
      image: "/lovable-uploads/a52c4714-9af4-4b55-9836-9df1f03846e4.png"
    },
    {
      title: "Sundowners",
      description: "Experience magical African sunsets with drinks and snacks at scenic viewpoints throughout the reserve",
      highlights: [
        "Spectacular sunset views",
        "Premium drinks and canapés",
        "Professional photography assistance",
        "Private or group settings available"
      ],
      image: "/lovable-uploads/b3a34ba0-4a5b-4f09-88c3-b2ec1e220807.png"
    },
    {
      title: "Cultural Encounters",
      description: "Meet the Samburu people and learn about their rich traditions, customs, and way of life",
      highlights: [
        "Village visits with local guides",
        "Traditional dance performances",
        "Handicraft demonstrations",
        "Cultural storytelling sessions"
      ],
      image: "/lovable-uploads/1cda3e5b-d1d8-4f15-b3e3-3e71304c6843.png"
    },
    {
      title: "Guided Nature Walks",
      description: "Discover the smaller wonders of the ecosystem on foot with our knowledgeable naturalists",
      highlights: [
        "Flora and fauna identification",
        "Bird watching opportunities",
        "Tracking and conservation insights",
        "Photography workshops"
      ],
      image: "/lovable-uploads/0f30597b-1899-4e6f-b1e1-faf88403c289.png"
    },
    {
      title: "Birdwatching",
      description: "Spot over 350 bird species in one of Kenya's premier birding destinations",
      highlights: [
        "Expert ornithologist guides",
        "Early morning birding sessions",
        "Specialized equipment provided",
        "Rare species sightings"
      ],
      image: "/lovable-uploads/826cc20c-e4e4-49b3-99ed-9a39530f28de.png"
    },
    {
      title: "Wild Animal Encounters",
      description: "Experience close encounters with Africa's iconic wildlife in their natural habitat",
      highlights: [
        "Elephant family observations",
        "Big cat tracking expeditions",
        "Unique Samburu species viewing",
        "Professional wildlife photography"
      ],
      image: "/lovable-uploads/a52c4714-9af4-4b55-9836-9df1f03846e4.png"
    },
    {
      title: "Outdoor Dining",
      description: "Enjoy memorable meals under the African sky with views of the surrounding wilderness",
      highlights: [
        "Bush breakfast experiences",
        "Sunset dinner settings",
        "Traditional and international cuisine",
        "Private dining arrangements"
      ],
      image: "/lovable-uploads/b3a34ba0-4a5b-4f09-88c3-b2ec1e220807.png"
    },
    {
      title: "Community Partnerships",
      description: "Experience authentic connections with local communities through our partnership initiatives",
      highlights: [
        "Educational program visits",
        "Local artisan workshops",
        "Community development tours",
        "Meaningful cultural exchange"
      ],
      image: "/lovable-uploads/7bf2e565-a82b-4a3a-b39e-09a644ad96b9.png"
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
            Immerse yourself in the wonders of Samburu through carefully curated activities that showcase the region's wildlife, culture, and natural beauty
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
              <CardContent>
                <ul className="space-y-2">
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start text-brand-brown/80 font-light">
                      <span className="text-brand-orange mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-brand-orange text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light mb-4 font-playfair">
              All-Inclusive Experience Packages Available
            </h3>
            <p className="text-lg leading-relaxed font-light">
              Combine multiple activities with our specially designed packages that include accommodation, meals, and guided experiences for the ultimate Samburu adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
