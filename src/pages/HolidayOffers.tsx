 import { useEffect } from "react";
 import { Badge } from "@/components/ui/badge";
 import { Card, CardContent } from "@/components/ui/card";
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { updatePageMeta } from "@/utils/seo";
 import { CheckCircle, Heart, Tent, Sun } from "lucide-react";
 
 // Import images
 import elephantSunsetImage from "@/assets/elephant-sunset.jpg";
 import breakfastImage from "@/assets/breakfast-dining.jpg";
 import riversideImage from "@/assets/riverside-dining.jpg";
 
 const HolidayOffers = () => {
   useEffect(() => {
     updatePageMeta(
       "Samburu Elephant Lodge Holiday Offers - Easter, Valentine's & Camping",
       "Discover exclusive holiday offers at Samburu Elephant Lodge. Easter Safari Escape, Valentine's romantic getaway, and camping experiences in Samburu National Reserve.",
       "/holiday-offers"
     );
 
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
           "name": "Easter Safari Escape",
           "price": "15000",
           "priceCurrency": "KES",
           "availability": "https://schema.org/InStock",
           "validThrough": "2026-04-30"
         },
         {
           "@type": "Offer",
           "name": "Valentine's Safari Escape",
           "price": "12000",
           "priceCurrency": "KES",
           "availability": "https://schema.org/InStock",
           "validThrough": "2026-02-28"
         },
         {
           "@type": "Offer",
           "name": "Camping Experience",
           "price": "2000",
           "priceCurrency": "KES",
           "availability": "https://schema.org/InStock"
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
           <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
             Samburu is looking magical right now – crystal clear skies, golden sunsets, elephants strolling around, 
             and the kind of calm that just makes you smile.
           </p>
         </div>
       </section>
 
       {/* Main Content */}
       <section className="py-16 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
 
           {/* Easter Safari Escape */}
           <div className="mb-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                 Easter Safari Escape
               </h2>
               <p className="text-xl text-earth-600 max-w-3xl mx-auto mb-2">
                 3 Nights / 4 Days
               </p>
               <p className="text-lg text-brand-orange">
                 Perfect for families, couples, and anyone craving a wild getaway
               </p>
             </div>
 
             <Card className="overflow-hidden">
               <div className="relative h-72 md:h-96">
                 <img 
                   src={breakfastImage} 
                   alt="Easter bush breakfast setup at Samburu Elephant Lodge"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <Badge className="absolute top-6 left-6 bg-safari-500 hover:bg-safari-600 text-lg px-4 py-2">
                   <Sun className="w-5 h-5 mr-2" />
                   Easter Special
                 </Badge>
               </div>
               <div className="p-8">
                 <div className="text-center bg-safari-50 rounded-xl p-6 mb-8">
                   <div className="text-4xl font-bold text-safari-800 mb-2">KSh 15,000</div>
                   <div className="text-safari-600">per person per night</div>
                   <div className="mt-4 inline-block bg-brand-orange text-white px-4 py-2 rounded-full font-semibold">
                     Stay 3 nights, Pay 2.5
                   </div>
                 </div>
 
                 <div className="bg-gradient-to-r from-brand-cream to-white rounded-xl p-6 border border-brand-orange-light">
                   <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">What's Included</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-safari-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Easter welcome drink to kick things off</span>
                     </div>
                     <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-safari-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">One guided sundowner experience per stay</span>
                     </div>
                     <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-safari-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Easter Sunday bush breakfast and festive lunch</span>
                     </div>
                     <div className="flex items-center">
                       <CheckCircle className="w-5 h-5 text-safari-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Kids Easter egg hunt & cultural fun</span>
                     </div>
                     <div className="flex items-center md:col-span-2 justify-center">
                       <CheckCircle className="w-5 h-5 text-safari-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Late checkout to linger a little longer</span>
                     </div>
                   </div>
                 </div>
 
                 <p className="text-center text-earth-600 italic mt-6 text-lg">
                   Celebrate Easter surrounded by elephants, culture, and untamed beauty.
                 </p>
               </div>
             </Card>
           </div>
 
           {/* Valentine's Safari Escape */}
           <div className="mb-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                 Valentine's Safari Escape
               </h2>
               <p className="text-lg text-brand-orange">
                 For couples seeking romance in the wild
               </p>
             </div>
 
             <Card className="overflow-hidden">
               <div className="relative h-72 md:h-96">
                 <img 
                   src={riversideImage} 
                   alt="Romantic riverside dinner setup for Valentine's"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <Badge className="absolute top-6 left-6 bg-rose-500 hover:bg-rose-600 text-lg px-4 py-2">
                   <Heart className="w-5 h-5 mr-2" />
                   Valentine's Special
                 </Badge>
               </div>
               <div className="p-8">
                 <div className="text-center bg-rose-50 rounded-xl p-6 mb-8">
                   <div className="text-4xl font-bold text-rose-700 mb-2">KSh 12,000</div>
                   <div className="text-rose-600">per person per night</div>
                 </div>
 
                 <div className="bg-gradient-to-r from-rose-50 to-white rounded-xl p-6 border border-rose-200">
                   <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">Included</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div className="flex items-center">
                       <Heart className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Romantic bush dinner setup</span>
                     </div>
                     <div className="flex items-center">
                       <Heart className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Complimentary welcome drink</span>
                     </div>
                     <div className="flex items-center">
                       <Heart className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">One guided sundowner experience</span>
                     </div>
                     <div className="flex items-center">
                       <Heart className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Candlelit dinner under the stars</span>
                     </div>
                     <div className="flex items-center md:col-span-2 justify-center">
                       <Heart className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Late checkout (because love deserves extra time)</span>
                     </div>
                   </div>
                 </div>
 
                 <p className="text-center text-earth-600 italic mt-6 text-lg">
                   A Valentine's escape full of sunsets, smiles, and shared moments.
                 </p>
               </div>
             </Card>
           </div>
 
           {/* Camping Experience */}
           <div className="mb-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                 Camping Experience
               </h2>
             </div>
 
             <Card className="overflow-hidden">
               <div className="relative h-72 md:h-96">
                 <img 
                   src={elephantSunsetImage} 
                   alt="Sunset camping experience in Samburu"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <Badge className="absolute top-6 left-6 bg-earth-600 hover:bg-earth-700 text-lg px-4 py-2">
                   <Tent className="w-5 h-5 mr-2" />
                   Camping
                 </Badge>
               </div>
               <div className="p-8">
                 <div className="text-center bg-earth-50 rounded-xl p-6 mb-8">
                   <div className="text-4xl font-bold text-earth-800 mb-2">KSh 2,000</div>
                   <div className="text-earth-600">per person per night</div>
                 </div>
 
                 <div className="bg-gradient-to-r from-earth-50 to-white rounded-xl p-6 border border-earth-200">
                   <h3 className="text-2xl font-bold text-brand-brown mb-6 text-center">Included</h3>
                   <div className="flex flex-col md:flex-row gap-4 justify-center">
                     <div className="flex items-center justify-center">
                       <CheckCircle className="w-5 h-5 text-earth-600 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Access to camping grounds</span>
                     </div>
                     <div className="flex items-center justify-center">
                       <CheckCircle className="w-5 h-5 text-earth-600 mr-3 flex-shrink-0" />
                       <span className="text-brand-brown">Swimming pool access</span>
                     </div>
                   </div>
                 </div>
 
                 <p className="text-center text-earth-600 italic mt-6 text-lg">
                   Sleep under the stars, splash in the pool, and wake up to Samburu magic.
                 </p>
               </div>
             </Card>
           </div>
 
           {/* Offer Summary Table */}
           <div className="mb-16">
             <div className="text-center mb-12">
               <h2 className="text-4xl md:text-5xl font-playfair text-brand-brown mb-4">
                 Offer Summary
               </h2>
             </div>
 
             <Card className="overflow-hidden">
               <div className="overflow-x-auto">
                 <table className="w-full">
                   <thead className="bg-brand-brown text-white">
                     <tr>
                       <th className="px-6 py-4 text-left font-playfair text-lg">Offer</th>
                       <th className="px-6 py-4 text-left font-playfair text-lg">Rate</th>
                       <th className="px-6 py-4 text-left font-playfair text-lg">Validity</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-earth-200">
                     <tr className="bg-safari-50 hover:bg-safari-100 transition-colors">
                       <td className="px-6 py-4 font-semibold text-safari-800">Easter Safari Escape</td>
                       <td className="px-6 py-4 text-safari-700">KSh 15,000 pppn</td>
                       <td className="px-6 py-4 text-safari-600">23rd March – 30th April</td>
                     </tr>
                     <tr className="bg-rose-50 hover:bg-rose-100 transition-colors">
                       <td className="px-6 py-4 font-semibold text-rose-800">Valentine's Safari Escape</td>
                       <td className="px-6 py-4 text-rose-700">KSh 12,000 pppn</td>
                       <td className="px-6 py-4 text-rose-600">Through February</td>
                     </tr>
                     <tr className="bg-earth-50 hover:bg-earth-100 transition-colors">
                       <td className="px-6 py-4 font-semibold text-earth-800">Camping Grounds</td>
                       <td className="px-6 py-4 text-earth-700">KSh 2,000 pppn</td>
                       <td className="px-6 py-4 text-earth-600">Open year-round</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </Card>
 
             <div className="mt-8 text-center">
               <p className="text-earth-600 italic">
                 These offers are available for a limited time and are subject to availability.
               </p>
               <p className="text-brand-brown mt-2 font-medium">
                 Reach out for reservations, group bookings, or any questions.
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