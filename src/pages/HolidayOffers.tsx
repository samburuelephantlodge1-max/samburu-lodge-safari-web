import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updatePageMeta } from "@/utils/seo";
import { CheckCircle, Timer, Phone, MessageCircle, Calendar, Users, MapPin } from "lucide-react";

// Import images
import spaImage from "@/assets/spa-massage.jpg";
import elephantsImage from "@/assets/elephants-wildlife.jpg";
import breakfastImage from "@/assets/breakfast-dining.jpg";
import riversideImage from "@/assets/riverside-dining.jpg";
import luxuryBedroomImage from "@/assets/luxury-bedroom.jpg";
import elephantSunsetImage from "@/assets/elephant-sunset.jpg";

const HolidayOffers = () => {
  useEffect(() => {
    updatePageMeta(
      "Samburu Elephant Lodge Holiday Offers - Special Deals & Packages",
      "Discover exclusive holiday offers at Samburu Elephant Lodge. Special rates for Mashujaa Day, Diwali, Mazingira Day, and festive season escapes in Samburu National Reserve.",
      "/holiday-offers"
    );

    // Add structured data for Google Ads
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Samburu Elephant Lodge",
      "description": "Luxury safari lodge offering exclusive holiday packages",
      "url": "https://samburuelephantlodge.co.ke/holiday-offers",
      "telephone": "+254796099657",
      "email": "reservations@samburuelephantlodge.co.ke",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Samburu National Reserve",
        "addressCountry": "Kenya"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Mashujaa Day Special",
          "price": "20000",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock",
          "validThrough": "2025-10-31"
        },
        {
          "@type": "Offer", 
          "name": "Festive Season Escape",
          "price": "30000",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock",
          "validThrough": "2026-01-05"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-brand-brown via-brand-brown-dark to-earth-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6">
            Samburu Elephant Lodge
            <span className="block text-3xl md:text-4xl mt-2 text-brand-cream">
              Holiday Offers
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Special deals and packages for your perfect safari getaway
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* October Holidays Bundle */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                October Holiday Celebrations
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                Join us for special October celebrations in the heart of Samburu - Mashujaa Day, Mazingira Day, and Diwali
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Mashujaa Day */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={elephantsImage} 
                    alt="Elephants in Samburu for Mashujaa Day celebration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-safari-500 hover:bg-safari-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    October Special
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-playfair text-safari-800">
                    Mashujaa Day Special
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center bg-safari-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-safari-700">KES 20,000</div>
                    <div className="text-sm text-safari-600">per person sharing • 2 nights full board</div>
                  </div>
                  <p className="text-earth-600 text-center italic">
                    Celebrate courage and heritage in true Kenyan style, immersed in Samburu's wild beauty.
                  </p>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>• Full board accommodation</li>
                    <li>• Game drives & wildlife viewing</li>
                    <li>• Riverbank breakfast experience</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Mazingira Day */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={elephantSunsetImage} 
                    alt="Elephant silhouette at sunset for Mazingira Day"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-earth-500 hover:bg-earth-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    Nature Day
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-playfair text-earth-800">
                    Mazingira Day Escape
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center bg-earth-50 rounded-lg p-4">
                    <div className="text-3xl font-bold text-earth-700">KES 20,000</div>
                    <div className="text-sm text-earth-600">per person sharing • 2 nights full board</div>
                  </div>
                  <p className="text-earth-600 text-center italic">
                    Reconnect with nature and honor the beauty of the wild this Mazingira Day.
                  </p>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>• Eco-focused safari experience</li>
                    <li>• Breathtaking landscapes</li>
                    <li>• Magical starlit skies</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Diwali Escape */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={luxuryBedroomImage} 
                    alt="Luxury accommodation for Diwali celebration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-brand-orange hover:bg-brand-orange-dark">
                    <Calendar className="w-4 h-4 mr-1" />
                    Festival
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-playfair text-brand-brown">
                    Diwali Wilderness Retreat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center bg-brand-cream rounded-lg p-4">
                    <div className="text-3xl font-bold text-brand-orange">KES 20,000</div>
                    <div className="text-sm text-brand-orange-dark">per person sharing • 2 nights full board</div>
                  </div>
                  <p className="text-earth-600 text-center italic">
                    Celebrate the festival of lights surrounded by wilderness and tranquility.
                  </p>
                  <ul className="text-sm text-earth-600 space-y-1">
                    <li>• Peaceful luxury accommodation</li>
                    <li>• Traditional safari experiences</li>
                    <li>• Riverbank breakfast</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* October Offers Validity */}
            <div className="bg-gradient-to-r from-brand-orange-light/20 to-brand-cream rounded-xl p-6 border border-brand-orange text-center">
              <div className="flex items-center justify-center mb-2">
                <Timer className="w-5 h-5 text-brand-orange mr-2" />
                <span className="text-brand-orange-dark font-semibold">All October offers valid until 31st October 2025</span>
              </div>
            </div>
          </div>

          {/* Jaza Van Campaign */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair text-earth-800 mb-4">
                Jaza Van Campaign
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                Exclusive group rates for an unforgettable Samburu experience
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={riversideImage} 
                  alt="Riverside dining experience for groups"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge className="absolute top-6 left-6 bg-safari-500 hover:bg-safari-600 text-lg px-4 py-2">
                  <Users className="w-5 h-5 mr-2" />
                  Group Packages
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center bg-safari-50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-safari-700 mb-2">8 Guests</div>
                    <div className="text-4xl font-bold text-safari-800 mb-2">KES 30,000</div>
                    <div className="text-safari-600">per person</div>
                  </div>
                  <div className="text-center bg-safari-50 rounded-xl p-6">
                    <div className="text-2xl font-bold text-safari-700 mb-2">4 Guests</div>
                    <div className="text-4xl font-bold text-safari-800 mb-2">KES 37,000</div>
                    <div className="text-safari-600">per person</div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-safari-200">
                  <h3 className="text-2xl font-bold text-safari-800 mb-4">Package Includes</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-safari-700 space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Two nights full board accommodation</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Park entrance fees</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Transport from Nairobi</li>
                    </ul>
                    <ul className="text-safari-700 space-y-2">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Two game drives</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Riverbank breakfast</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-safari-500 mr-2" /> Swimming facilities</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-brand-orange-light/20 rounded-lg border border-brand-orange">
                    <p className="text-brand-orange-dark font-semibold text-center">Offer valid until 31st October 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Festive Season Escape */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                Festive Season Escape
              </h2>
              <p className="text-xl text-earth-600 max-w-3xl mx-auto">
                Celebrate the holidays in luxury at Samburu Elephant Lodge
              </p>
              <Badge className="mt-4 bg-brand-orange hover:bg-brand-orange-dark text-lg px-4 py-2">
                December 1, 2025 – January 5, 2026
              </Badge>
            </div>

            <Card className="overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={breakfastImage} 
                  alt="Festive dining experience with traditional setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <CardContent className="p-8">
                {/* Accommodation Types */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-brand-cream to-brand-cream-dark rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-brand-brown mb-4">Luxury Cottage</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-lg font-semibold text-brand-orange-dark">Residents</div>
                        <div className="text-3xl font-bold text-brand-orange">KES 30,000</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-brand-orange-dark">Non-residents</div>
                        <div className="text-3xl font-bold text-brand-orange">KES 35,000</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-earth-100 to-earth-200 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-earth-800 mb-4">Budget Rooms</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-lg font-semibold text-earth-600">Residents</div>
                        <div className="text-3xl font-bold text-earth-700">KES 15,000</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-earth-600">Non-residents</div>
                        <div className="text-3xl font-bold text-earth-700">KES 20,000</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-safari-100 to-safari-200 rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-bold text-safari-800 mb-4">Camping Site</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-lg font-semibold text-safari-600">Residents</div>
                        <div className="text-3xl font-bold text-safari-700">KES 4,000</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-safari-600">Non-residents</div>
                        <div className="text-3xl font-bold text-safari-700">KES 6,000</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Festive Inclusions */}
                <div className="bg-gradient-to-r from-brand-cream to-white rounded-xl p-6 border border-brand-orange-light">
                  <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">Festive Experience Includes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Full board meals (except camping)</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Sundowner with snacks</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Riverside breakfast</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Bush dinner experience</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Evening bonfire</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Indoor & outdoor games</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Swimming facilities</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-brand-orange mr-3" />
                        <span className="text-brand-brown">Festive celebrations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Information */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={spaImage} 
                  alt="Relaxing spa and wellness facilities"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl md:text-5xl font-playfair text-white text-center">
                    Ready to Book?
                  </h2>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-safari-600" />
                    </div>
                    <h3 className="text-xl font-bold text-earth-800">Minimum Stay</h3>
                    <p className="text-earth-600">2 nights minimum for all packages</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-brand-orange-light rounded-full flex items-center justify-center mx-auto">
                      <Timer className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-earth-800">Book By</h3>
                    <p className="text-earth-600">31st October 2025 for October offers</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto">
                      <Phone className="w-8 h-8 text-earth-600" />
                    </div>
                    <h3 className="text-xl font-bold text-earth-800">Confirmation</h3>
                    <p className="text-earth-600">Upon deposit payment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HolidayOffers;