import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TripAdvisorWidget from "@/components/TripAdvisorWidget";
import { updatePageMeta } from "@/utils/seo";
import { Calendar, Star, Gift, Timer, Users, MapPin, Phone, MessageCircle, Zap, CheckCircle } from "lucide-react";

const HolidayOffers = () => {
  useEffect(() => {
    updatePageMeta(
      "Exclusive Samburu Holiday Offers - Luxury Safari Deals",
      "Celebrate October holidays, Black Friday, and festive season with exclusive safari offers at Samburu Elephant Lodge. Book your luxury safari experience today.",
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
          "name": "October Holiday Special",
          "price": "9500",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock",
          "validThrough": "2024-10-31"
        },
        {
          "@type": "Offer", 
          "name": "Black Friday Safari Deal",
          "price": "8000",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock",
          "validThrough": "2024-11-30"
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] opacity-50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <Badge className="bg-destructive/90 text-white mb-6 px-6 py-3 text-base font-semibold animate-pulse border-0 shadow-lg">
            <Timer className="w-5 h-5 mr-2" />
            🔥 LIMITED TIME - ENDS DEC 31ST
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-light mb-8 animate-fade-in leading-tight">
            Safari Deals
            <br />
            <span className="bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Up to 30% OFF
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-inter font-light mb-12 max-w-4xl mx-auto opacity-90">
            Experience luxury wildlife adventures at unbeatable prices
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-green-300" />
              <h3 className="font-semibold text-lg mb-2">Instant Booking</h3>
              <p className="text-sm opacity-80">Secure your dates now</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-300" />
              <h3 className="font-semibold text-lg mb-2">Family Friendly</h3>
              <p className="text-sm opacity-80">Kids under 12 pay 50%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-semibold text-lg mb-2">5-Star Rated</h3>
              <p className="text-sm opacity-80">TripAdvisor Excellence</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary px-12 py-6 text-xl font-semibold tracking-wide animate-fade-in shadow-2xl"
            >
              <Zap className="w-6 h-6 mr-3" />
              Book Now & Save Big
            </Button>
            <p className="text-lg opacity-75">👆 Click to see all available dates</p>
          </div>
        </div>
      </section>

      {/* Special Offers Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2 text-sm font-semibold border border-primary/20">
              <Gift className="w-4 h-4 mr-2" />
              EXCLUSIVE HOLIDAY DEALS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-playfair text-foreground mb-6">
              Choose Your Perfect
              <span className="block text-primary">Safari Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
              From luxury lodge stays to adventurous camping, we have the perfect package for every traveler
            </p>
          </div>
          
          {/* Main Offers Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            
            {/* October Holiday Special */}
            <Card className="relative overflow-hidden border-2 border-orange-200 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-500 text-white animate-pulse">
                  20% OFF
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-playfair text-center text-orange-800">
                  October Holiday Special
                </CardTitle>
                <p className="text-center text-orange-600 font-medium">
                  Mashujaa Day & Diwali Escapes
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white/70 rounded-xl border border-orange-200">
                    <p className="text-3xl font-bold text-orange-700 mb-1">KES 9,500</p>
                    <p className="text-sm text-orange-600">Resident rate per person/night</p>
                  </div>
                  <div className="text-center p-4 bg-white/70 rounded-xl border border-orange-200">
                    <p className="text-3xl font-bold text-orange-700 mb-1">USD 160</p>
                    <p className="text-sm text-orange-600">Non-resident rate per person/night</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-orange-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Full Board included
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Game drives included
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Valid until Oct 31st
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                  Book October Deal
                </Button>
              </CardContent>
            </Card>

            {/* Black Friday Mega Deal */}
            <Card className="relative overflow-hidden border-2 border-gray-800 shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 lg:scale-105">
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500 text-white animate-pulse text-sm">
                  BIGGEST SAVINGS
                </Badge>
              </div>
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-red-500 h-1"></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-playfair text-center">
                  Black Friday MEGA Deal
                </CardTitle>
                <p className="text-center text-yellow-300 font-medium">
                  Massive Weekend Savings
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                    <p className="text-3xl font-bold text-yellow-300 mb-1">KES 8,000</p>
                    <p className="text-sm text-gray-300">Resident rate per person/night</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                    <p className="text-3xl font-bold text-yellow-300 mb-1">USD 130</p>
                    <p className="text-sm text-gray-300">Non-resident rate per person/night</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Full Board included
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Premium game drives
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                    Limited time only!
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-500 hover:to-red-600 text-black font-bold text-lg py-3">
                  Grab Black Friday Deal
                </Button>
              </CardContent>
            </Card>

            {/* Festive Season Package */}
            <Card className="relative overflow-hidden border-2 border-green-200 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500 text-white">
                  🎄 FESTIVE
                </Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-playfair text-center text-green-800">
                  Festive Season Magic
                </CardTitle>
                <p className="text-center text-green-600 font-medium">
                  Holiday Celebration Packages
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Lodge Stays</p>
                    <p className="text-lg font-bold text-green-700">KES 9,800 / USD 160</p>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Private Cottages</p>
                    <p className="text-lg font-bold text-green-700">KES 10,500 / USD 180</p>
                  </div>
                  <div className="text-center p-3 bg-white/70 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">Camping Experience</p>
                    <p className="text-lg font-bold text-green-700">KES 7,500 / USD 120</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Multiple accommodation options
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Special festive activities
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3">
                  Book Festive Package
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Children Discount Notice */}
          <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10 max-w-4xl mx-auto">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-lg font-semibold text-primary mb-2">Family-Friendly Pricing</p>
            <p className="text-muted-foreground">Children below 12 years pay only 50% of the adult rate</p>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-2 text-sm font-semibold border border-primary/20">
              <Star className="w-4 h-4 mr-2" />
              TRUSTED BY THOUSANDS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-6">
              Why Guests Choose Us
            </h2>
            <TripAdvisorWidget />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                  "Incredible wildlife encounters and exceptional service. The lodge exceeded all our expectations!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah & John M.</p>
                    <p className="text-sm text-muted-foreground">Family from Nairobi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                  "Perfect location for game drives. Amazing elephant sightings right from our cottage!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Michael K.</p>
                    <p className="text-sm text-muted-foreground">Solo Traveler</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-4 italic leading-relaxed">
                  "Luxury in the wilderness. Professional guides and unforgettable memories!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Honeymooners</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Happy Guests</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5★</div>
              <p className="text-sm text-muted-foreground">TripAdvisor Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] opacity-50"></div>
        
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <Badge className="bg-white/10 text-white mb-6 px-6 py-3 text-base font-semibold border border-white/20">
            <Timer className="w-5 h-5 mr-2" />
            Don't Miss Out - Limited Time Only!
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 leading-tight">
            Book Now & Save Big on Your
            <span className="block text-yellow-200">Dream Safari Experience</span>
          </h2>
          
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Secure your dates today and create memories that will last a lifetime in Kenya's magnificent Samburu National Reserve
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Us Now</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-300" />
                    <span className="font-semibold">WhatsApp: +254 796 099 657</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Kenya: +254 110 463 062</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Reservations</h3>
                <p className="break-all">reservations@samburuelephantlodge.co.ke</p>
                <div className="mt-4 space-y-2 text-sm opacity-90">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span>Quick Response Guaranteed</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                    <span>Detailed Booking Assistance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-primary px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all"
          >
            <Zap className="w-6 h-6 mr-3" />
            Book Your Safari Adventure Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayOffers;