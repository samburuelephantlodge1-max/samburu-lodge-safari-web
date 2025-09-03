import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { updatePageMeta } from "@/utils/seo";
import { ChevronDown, Calendar, Star, Gift } from "lucide-react";

const HolidayOffers = () => {
  useEffect(() => {
    updatePageMeta(
      "Exclusive Samburu Holiday Offers - Luxury Safari Deals",
      "Celebrate October holidays, Black Friday, and festive season with exclusive safari offers at Samburu Elephant Lodge. Book your luxury safari experience today.",
      "/holiday-offers"
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/826cc20c-e4e4-49b3-99ed-9a39530f28de.png')"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-light mb-6 animate-fade-in">
            Your Samburu Safari, <br />
            <span className="text-safari-300">Now More Affordable</span>
          </h1>
          <p className="text-xl md:text-2xl font-inter font-light mb-12 max-w-3xl mx-auto animate-fade-in">
            Celebrate October holidays, Black Friday, and the Festive season with exclusive offers
          </p>
          <Button 
            size="lg" 
            className="bg-safari-500 hover:bg-safari-600 text-white px-12 py-4 text-lg font-inter tracking-wide animate-fade-in"
          >
            Book Your Stay Now
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* October Holiday Specials */}
      <section className="py-24 bg-gradient-to-b from-background to-earth-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-safari-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-playfair text-foreground">
                Mashujaa Day & Diwali Escapes
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Celebrate Kenya's Mashujaa Day (20th October) and Diwali (29th October) with discounted packages.
            </p>
          </div>
          
          <Card className="mb-12 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-playfair text-safari-700">October Holiday Special Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-earth-50 rounded-lg">
                  <h4 className="text-lg font-playfair text-earth-800 mb-3">Resident Rate</h4>
                  <p className="text-3xl font-inter font-light text-safari-600 mb-2">Kes 9,500</p>
                  <p className="text-sm text-earth-600">per person sharing per night (FB)</p>
                </div>
                <div className="text-center p-6 bg-safari-50 rounded-lg">
                  <h4 className="text-lg font-playfair text-safari-800 mb-3">Non-Resident Rate</h4>
                  <p className="text-3xl font-inter font-light text-safari-600 mb-2">USD 160</p>
                  <p className="text-sm text-safari-600">per person sharing per night (FB)</p>
                </div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground font-inter">Children below 12 years pay 50% of the adult rate</p>
              </div>
              
              {/* Poster Upload Area */}
              <div className="mt-8 p-8 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
                <Gift className="w-12 h-12 text-safari-400 mx-auto mb-4" />
                <p className="text-safari-600 font-inter">October Holiday Offer Poster</p>
                <p className="text-sm text-safari-400 mt-2">Space reserved for promotional material</p>
              </div>
              
              <div className="text-center pt-6">
                <Button className="bg-earth-600 hover:bg-earth-700 text-white px-8 py-3">
                  Book October Special
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Black Friday Deals */}
      <section className="py-24 bg-gradient-to-b from-earth-50 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-safari-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-playfair text-foreground">
                Unmissable Black Friday Savings
              </h2>
            </div>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              For one weekend only, enjoy massive discounts on luxury Samburu escapes.
            </p>
          </div>
          
          <Card className="mb-12 shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-playfair text-safari-700">Black Friday Special Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-earth-50 rounded-lg">
                  <h4 className="text-lg font-playfair text-earth-800 mb-3">Resident Rate</h4>
                  <p className="text-3xl font-inter font-light text-safari-600 mb-2">Kes 8,000</p>
                  <p className="text-sm text-earth-600">per person sharing per night (FB)</p>
                </div>
                <div className="text-center p-6 bg-safari-50 rounded-lg">
                  <h4 className="text-lg font-playfair text-safari-800 mb-3">Non-Resident Rate</h4>
                  <p className="text-3xl font-inter font-light text-safari-600 mb-2">USD 130</p>
                  <p className="text-sm text-safari-600">per person sharing per night (FB)</p>
                </div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground font-inter">Children below 12 years pay 50% of the adult rate</p>
              </div>
              
              {/* Poster Upload Area */}
              <div className="mt-8 p-8 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
                <Gift className="w-12 h-12 text-safari-400 mx-auto mb-4" />
                <p className="text-safari-600 font-inter">Black Friday Deal Poster</p>
                <p className="text-sm text-safari-400 mt-2">Space reserved for promotional material</p>
              </div>
              
              <div className="text-center pt-6">
                <Button className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3">
                  Unlock Black Friday Offer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Festive Season Packages */}
      <section className="py-24 bg-gradient-to-b from-background to-earth-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair text-foreground mb-4">
              Festive in Samburu
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Celebrate the holidays in style with a package that fits your festive mood.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Private Cottages */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-safari-700">Private Cottages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-earth-50 rounded-lg">
                  <p className="text-lg font-inter text-earth-800 mb-1">Kes 10,500</p>
                  <p className="text-sm text-earth-600">Resident (per person sharing/night FB)</p>
                </div>
                <div className="text-center p-4 bg-safari-50 rounded-lg">
                  <p className="text-lg font-inter text-safari-800 mb-1">USD 180</p>
                  <p className="text-sm text-safari-600">Non-Resident (per person sharing/night FB)</p>
                </div>
                
                {/* Poster Area */}
                <div className="p-6 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
                  <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-8 h-8 text-safari-500" />
                  </div>
                  <p className="text-safari-600 text-sm">Cottage Poster</p>
                </div>
                
                <Button className="w-full bg-safari-500 hover:bg-safari-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Camping Under the Stars */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-safari-700">Camping Under the Stars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-earth-50 rounded-lg">
                  <p className="text-lg font-inter text-earth-800 mb-1">Kes 7,500</p>
                  <p className="text-sm text-earth-600">Resident (per person sharing/night FB)</p>
                </div>
                <div className="text-center p-4 bg-safari-50 rounded-lg">
                  <p className="text-lg font-inter text-safari-800 mb-1">USD 120</p>
                  <p className="text-sm text-safari-600">Non-Resident (per person sharing/night FB)</p>
                </div>
                
                {/* Poster Area */}
                <div className="p-6 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
                  <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-8 h-8 text-safari-500" />
                  </div>
                  <p className="text-safari-600 text-sm">Camping Poster</p>
                </div>
                
                <Button className="w-full bg-safari-500 hover:bg-safari-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            {/* Lodge Stays */}
            <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-playfair text-safari-700">Lodge Stays</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-earth-50 rounded-lg">
                  <p className="text-lg font-inter text-earth-800 mb-1">Kes 9,800</p>
                  <p className="text-sm text-earth-600">Resident (per person sharing/night FB)</p>
                </div>
                <div className="text-center p-4 bg-safari-50 rounded-lg">
                  <p className="text-lg font-inter text-safari-800 mb-1">USD 160</p>
                  <p className="text-sm text-safari-600">Non-Resident (per person sharing/night FB)</p>
                </div>
                
                {/* Poster Area */}
                <div className="p-6 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
                  <div className="w-16 h-16 bg-safari-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Gift className="w-8 h-8 text-safari-500" />
                  </div>
                  <p className="text-safari-600 text-sm">Lodge Poster</p>
                </div>
                
                <Button className="w-full bg-safari-500 hover:bg-safari-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center p-6 bg-muted rounded-lg">
            <p className="text-muted-foreground font-inter">Children below 12 years pay 50% of the adult rate</p>
          </div>

          {/* Main Festive Poster Area */}
          <div className="mt-12 p-12 border-2 border-dashed border-safari-200 rounded-lg text-center bg-safari-50/30">
            <Gift className="w-16 h-16 text-safari-400 mx-auto mb-4" />
            <p className="text-safari-600 font-inter text-lg">Festive Season Campaign Poster</p>
            <p className="text-sm text-safari-400 mt-2">Main promotional space for festive packages</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section 
        className="py-32 relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/lovable-uploads/7ca574ad-4fab-422e-b0e8-19d05f205a0f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-playfair font-light mb-8 animate-fade-in">
            Book Early, Save More
          </h2>
          <p className="text-xl md:text-2xl font-inter font-light mb-12 animate-fade-in">
            Offers valid for a limited time only. Reserve your spot now.
          </p>
          <Button 
            size="lg" 
            className="bg-safari-500 hover:bg-safari-600 text-white px-16 py-4 text-lg font-inter tracking-wide animate-fade-in"
          >
            Book Your Stay Today
          </Button>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <section className="py-16 bg-earth-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-playfair mb-6">Contact Reservations</h3>
            <div className="space-y-3 font-inter text-earth-200">
              <p className="text-lg">
                <span className="text-white font-medium">WhatsApp (Preferred):</span><br />
                +254 796 099 657
              </p>
              <p className="text-lg">
                <span className="text-white font-medium">Kenya:</span><br />
                +254 110 463 062
              </p>
              <p className="text-lg">
                <span className="text-white font-medium">Email:</span><br />
                reservations@samburuelephantlodge.co.ke
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HolidayOffers;