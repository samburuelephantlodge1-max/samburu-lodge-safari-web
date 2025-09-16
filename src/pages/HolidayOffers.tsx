import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updatePageMeta } from "@/utils/seo";
import { CheckCircle, Timer, Phone, MessageCircle } from "lucide-react";

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
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-light mb-6">
            Samburu Elephant Lodge
            <span className="block text-3xl md:text-4xl mt-2 text-primary-foreground/90">
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
          
          {/* Mashujaa Day Offer */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-orange-800 mb-4">
                Mashujaa Day in the Spirit of Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-700 mb-2">KES 20,000</div>
                <div className="text-lg text-orange-600">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-orange-700 text-center italic mb-4">
                Celebrate courage, freedom, and heritage in true Kenyan style, immersed in the wild beauty of Samburu.
              </p>
            </div>
          </div>

          {/* Jaza Van Campaign Special Rates */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-blue-800 mb-6">
                Jaza Van Campaign Special Rates
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-white/70 rounded-xl p-6 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700 mb-2">8 pax</div>
                  <div className="text-3xl font-bold text-blue-800">KES 30,000</div>
                  <div className="text-blue-600">per person</div>
                </div>
                <div className="text-center bg-white/70 rounded-xl p-6 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700 mb-2">4 pax</div>
                  <div className="text-3xl font-bold text-blue-800">KES 37,000</div>
                  <div className="text-blue-600">per person</div>
                </div>
              </div>
              <div className="bg-white/50 rounded-xl p-6 border border-blue-200">
                <p className="text-blue-700 mb-3">
                  <strong>Both packages include:</strong>
                </p>
                <ul className="text-blue-700 space-y-2">
                  <li>• Two nights' full board accommodation</li>
                  <li>• Park entrance fees</li>
                  <li>• Transport from Nairobi</li>
                  <li>• Two game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Swimming</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                  <p className="text-orange-700 font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mazingira Day */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-green-800 mb-4">
                Mazingira Day in Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-700 mb-2">KES 20,000</div>
                <div className="text-lg text-green-600">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-green-700 text-center italic mb-6">
                Reconnect with nature and honor the beauty of the wild this Mazingira Day at Samburu Elephant Lodge.
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-green-200">
                <p className="text-green-700 mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-green-700 space-y-2">
                  <li>• Full board accommodation</li>
                  <li>• Game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Breathtaking landscapes</li>
                  <li>• Diverse wildlife encounters</li>
                  <li>• Magical starlit skies</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                  <p className="text-orange-700 font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diwali Escape */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-2xl p-8 border border-purple-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-purple-800 mb-4">
                Diwali Escape in Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-700 mb-2">KES 20,000</div>
                <div className="text-lg text-purple-600">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-purple-700 text-center italic mb-6">
                Celebrate Diwali surrounded by the wilderness and tranquility of Samburu.
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-purple-200">
                <p className="text-purple-700 mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-purple-700 space-y-2">
                  <li>• Full board accommodation</li>
                  <li>• Game drives</li>
                  <li>• Riverbank breakfast</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                  <p className="text-orange-700 font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jaza Van Campaign (Full Details) */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl p-8 border border-teal-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-teal-800 mb-4">
                Jaza Van Campaign
              </h2>
              <p className="text-xl text-teal-700 text-center mb-6">
                Exclusive group rates at Samburu Elephant Lodge
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-white/70 rounded-xl p-6 border border-teal-200">
                  <div className="text-2xl font-bold text-teal-700 mb-2">8 pax</div>
                  <div className="text-3xl font-bold text-teal-800">KES 30,000</div>
                  <div className="text-teal-600">per person</div>
                </div>
                <div className="text-center bg-white/70 rounded-xl p-6 border border-teal-200">
                  <div className="text-2xl font-bold text-teal-700 mb-2">4 pax</div>
                  <div className="text-3xl font-bold text-teal-800">KES 37,000</div>
                  <div className="text-teal-600">per person</div>
                </div>
              </div>
              <div className="bg-white/50 rounded-xl p-6 border border-teal-200">
                <p className="text-teal-700 mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-teal-700 space-y-2">
                  <li>• Two nights' accommodation on full board</li>
                  <li>• Park entrance fees</li>
                  <li>• Transport from Nairobi</li>
                  <li>• Two game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Swimming</li>
                </ul>
                <p className="text-sm text-teal-600 mt-4 italic">
                  *Excludes other services
                </p>
              </div>
            </div>
          </div>

          {/* Festive Season Escape */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-red-50 to-rose-100 rounded-2xl p-8 border border-red-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-red-800 mb-4">
                Festive Season Escape
              </h2>
              <div className="text-center mb-8">
                <div className="text-xl text-red-700 font-semibold">
                  Travel Period: 1st December 2025 – 5th January 2026
                </div>
              </div>

              {/* Accommodation Types */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Luxury Cottage */}
                <div className="bg-white/70 rounded-xl p-6 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Luxury Cottage</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 30,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Non-residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 35,000</div>
                    </div>
                  </div>
                </div>

                {/* Budget Rooms */}
                <div className="bg-white/70 rounded-xl p-6 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Budget Rooms</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 15,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Non-residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 20,000</div>
                    </div>
                  </div>
                </div>

                {/* Camping Site */}
                <div className="bg-white/70 rounded-xl p-6 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Camping Site</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 4,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-700">Non-residents</div>
                      <div className="text-2xl font-bold text-red-800">KES 6,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-white/50 rounded-xl p-6 border border-red-200">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Inclusions</h3>
                <ul className="text-red-700 space-y-2 grid md:grid-cols-2 gap-2">
                  <li>• Full board meals (except camping unless pre-arranged)</li>
                  <li>• Sundowner with snacks</li>
                  <li>• Riverside breakfast</li>
                  <li>• Bush dinner</li>
                  <li>• Bonfire</li>
                  <li>• Indoor and outdoor games</li>
                  <li>• Swimming</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Notes */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-gray-800 mb-6">
                Booking Notes
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Minimum stay:</strong> 2 nights
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Confirmation:</strong> Upon deposit payment
                  </div>
                </div>
                <div className="flex items-start">
                  <Timer className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Booking deadline:</strong> Book by 31st October 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">
            Ready to Book Your Holiday Escape?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us now to secure your preferred dates and packages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary px-8 py-4 text-lg font-semibold shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +254 796 099 657
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
          
          <p className="text-lg opacity-75">
            📧 Email: reservations@samburuelephantlodge.co.ke
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayOffers;