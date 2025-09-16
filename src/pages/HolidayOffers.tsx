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
          
          {/* Mashujaa Day Offer */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-safari-100 to-safari-200 rounded-2xl p-8 border border-safari-300">
              <h2 className="text-3xl md:text-4xl font-playfair text-safari-800 mb-4">
                Mashujaa Day in the Spirit of Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-safari-700 mb-2">KES 20,000</div>
                <div className="text-lg text-safari-600">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-safari-700 text-center italic mb-4">
                Celebrate courage, freedom, and heritage in true Kenyan style, immersed in the wild beauty of Samburu.
              </p>
            </div>
          </div>

          {/* Jaza Van Campaign Special Rates */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-earth-100 to-earth-200 rounded-2xl p-8 border border-earth-300">
              <h2 className="text-3xl md:text-4xl font-playfair text-earth-800 mb-6">
                Jaza Van Campaign Special Rates
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-white/70 rounded-xl p-6 border border-earth-300">
                  <div className="text-2xl font-bold text-earth-700 mb-2">8 pax</div>
                  <div className="text-3xl font-bold text-earth-800">KES 30,000</div>
                  <div className="text-earth-600">per person</div>
                </div>
                <div className="text-center bg-white/70 rounded-xl p-6 border border-earth-300">
                  <div className="text-2xl font-bold text-earth-700 mb-2">4 pax</div>
                  <div className="text-3xl font-bold text-earth-800">KES 37,000</div>
                  <div className="text-earth-600">per person</div>
                </div>
              </div>
              <div className="bg-white/50 rounded-xl p-6 border border-earth-300">
                <p className="text-earth-700 mb-3">
                  <strong>Both packages include:</strong>
                </p>
                <ul className="text-earth-700 space-y-2">
                  <li>• Two nights' full board accommodation</li>
                  <li>• Park entrance fees</li>
                  <li>• Transport from Nairobi</li>
                  <li>• Two game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Swimming</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-orange-light/20 rounded-lg border border-brand-orange">
                  <p className="text-brand-orange-dark font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mazingira Day */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-earth-50 to-safari-100 rounded-2xl p-8 border border-earth-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-earth-800 mb-4">
                Mazingira Day in Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-earth-700 mb-2">KES 20,000</div>
                <div className="text-lg text-earth-600">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-earth-700 text-center italic mb-6">
                Reconnect with nature and honor the beauty of the wild this Mazingira Day at Samburu Elephant Lodge.
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-earth-200">
                <p className="text-earth-700 mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-earth-700 space-y-2">
                  <li>• Full board accommodation</li>
                  <li>• Game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Breathtaking landscapes</li>
                  <li>• Diverse wildlife encounters</li>
                  <li>• Magical starlit skies</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-orange-light/20 rounded-lg border border-brand-orange">
                  <p className="text-brand-orange-dark font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Diwali Escape */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-cream to-brand-cream-dark rounded-2xl p-8 border border-brand-orange-light">
              <h2 className="text-3xl md:text-4xl font-playfair text-brand-brown mb-4">
                Diwali Escape in Samburu
              </h2>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-brand-orange mb-2">KES 20,000</div>
                <div className="text-lg text-brand-orange-dark">per person sharing on full board for two nights</div>
              </div>
              <p className="text-xl text-brand-brown text-center italic mb-6">
                Celebrate Diwali surrounded by the wilderness and tranquility of Samburu.
              </p>
              <div className="bg-white/50 rounded-xl p-6 border border-brand-orange-light">
                <p className="text-brand-brown mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-brand-brown space-y-2">
                  <li>• Full board accommodation</li>
                  <li>• Game drives</li>
                  <li>• Riverbank breakfast</li>
                </ul>
                <div className="mt-4 p-3 bg-brand-orange-light/20 rounded-lg border border-brand-orange">
                  <p className="text-brand-orange-dark font-semibold">Offer valid until 31st October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jaza Van Campaign (Full Details) */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-safari-50 to-safari-100 rounded-2xl p-8 border border-safari-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-safari-800 mb-4">
                Jaza Van Campaign
              </h2>
              <p className="text-xl text-safari-700 text-center mb-6">
                Exclusive group rates at Samburu Elephant Lodge
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center bg-white/70 rounded-xl p-6 border border-safari-200">
                  <div className="text-2xl font-bold text-safari-700 mb-2">8 pax</div>
                  <div className="text-3xl font-bold text-safari-800">KES 30,000</div>
                  <div className="text-safari-600">per person</div>
                </div>
                <div className="text-center bg-white/70 rounded-xl p-6 border border-safari-200">
                  <div className="text-2xl font-bold text-safari-700 mb-2">4 pax</div>
                  <div className="text-3xl font-bold text-safari-800">KES 37,000</div>
                  <div className="text-safari-600">per person</div>
                </div>
              </div>
              <div className="bg-white/50 rounded-xl p-6 border border-safari-200">
                <p className="text-safari-700 mb-3">
                  <strong>Includes:</strong>
                </p>
                <ul className="text-safari-700 space-y-2">
                  <li>• Two nights' accommodation on full board</li>
                  <li>• Park entrance fees</li>
                  <li>• Transport from Nairobi</li>
                  <li>• Two game drives</li>
                  <li>• Riverbank breakfast</li>
                  <li>• Swimming</li>
                </ul>
                <p className="text-sm text-safari-600 mt-4 italic">
                  *Excludes other services
                </p>
              </div>
            </div>
          </div>

          {/* Festive Season Escape */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-orange-light/20 to-brand-cream rounded-2xl p-8 border border-brand-orange">
              <h2 className="text-3xl md:text-4xl font-playfair text-brand-brown mb-4">
                Festive Season Escape
              </h2>
              <div className="text-center mb-8">
                <div className="text-xl text-brand-orange-dark font-semibold">
                  Travel Period: 1st December 2025 – 5th January 2026
                </div>
              </div>

              {/* Accommodation Types */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Luxury Cottage */}
                <div className="bg-white/70 rounded-xl p-6 border border-brand-orange-light">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">Luxury Cottage</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 30,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Non-residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 35,000</div>
                    </div>
                  </div>
                </div>

                {/* Budget Rooms */}
                <div className="bg-white/70 rounded-xl p-6 border border-brand-orange-light">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">Budget Rooms</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 15,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Non-residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 20,000</div>
                    </div>
                  </div>
                </div>

                {/* Camping Site */}
                <div className="bg-white/70 rounded-xl p-6 border border-brand-orange-light">
                  <h3 className="text-2xl font-bold text-brand-brown mb-4 text-center">Camping Site</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 4,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-brand-orange-dark">Non-residents</div>
                      <div className="text-2xl font-bold text-brand-orange">KES 6,000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="bg-white/50 rounded-xl p-6 border border-brand-orange-light">
                <h3 className="text-2xl font-bold text-brand-brown mb-4">Inclusions</h3>
                <ul className="text-brand-brown space-y-2 grid md:grid-cols-2 gap-2">
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
            <div className="bg-gradient-to-r from-earth-50 to-earth-100 rounded-2xl p-8 border border-earth-200">
              <h2 className="text-3xl md:text-4xl font-playfair text-earth-800 mb-6">
                Booking Notes
              </h2>
              <div className="space-y-4 text-earth-700">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-safari-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Minimum stay:</strong> 2 nights
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-safari-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Confirmation:</strong> Upon deposit payment
                  </div>
                </div>
                <div className="flex items-start">
                  <Timer className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Booking deadline:</strong> Book by 31st October 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default HolidayOffers;