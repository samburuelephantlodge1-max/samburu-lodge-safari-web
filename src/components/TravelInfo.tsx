
import { Plane, Car, MapPin, Clock, Info, CheckCircle } from 'lucide-react';

const TravelInfo = () => {
  return (
    <section id="travel" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 font-playfair text-gray-900">
            Travel Information
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Your journey to Samburu Elephant Lodge begins here. Find all the essential information 
            you need for a seamless travel experience to one of Kenya's most pristine wilderness areas.
          </p>
        </div>

        {/* Location */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-2xl font-light font-playfair text-gray-900">Location</h3>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              <strong>Address:</strong> 677 Samburu National Reserve, Samburu, 60300, Kenya
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Located within the pristine Samburu National Reserve, approximately 325 kilometers 
              north of Nairobi, our lodge offers direct access to some of Kenya's most spectacular 
              wildlife viewing opportunities.
            </p>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* By Air */}
          <div>
            <div className="flex items-center mb-6">
              <Plane className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-2xl font-light font-playfair text-gray-900">By Air</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-600 pl-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Scheduled Flights</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-3">
                  Daily flights available from Wilson Airport, Nairobi to Samburu airstrip.
                </p>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    Flight duration: 1 hour 15 minutes
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    Airport transfers included
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    Airlines: Safarilink, AirKenya
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-amber-600 pl-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Charter Flights</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Private charter flights can be arranged for a more personalized travel experience.
                </p>
              </div>
            </div>
          </div>

          {/* By Road */}
          <div>
            <div className="flex items-center mb-6">
              <Car className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-2xl font-light font-playfair text-gray-900">By Road</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-amber-600 pl-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Self Drive</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-3">
                  Drive via Isiolo town, approximately 5.5 hours from Nairobi.
                </p>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    4WD vehicle recommended
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    Road conditions: Good tarmac to Samburu, then dirt road
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    GPS coordinates provided upon booking
                  </li>
                </ul>
              </div>
              <div className="border-l-2 border-amber-600 pl-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Road Transfer</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  We can arrange comfortable road transfers with our experienced drivers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Info className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-2xl font-light font-playfair text-gray-900">Travel Tips</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-4">What to Pack</h4>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Lightweight, neutral-colored clothing</li>
                <li>• Comfortable walking shoes</li>
                <li>• Sun hat and sunglasses</li>
                <li>• High SPF sunscreen</li>
                <li>• Insect repellent</li>
                <li>• Camera with extra batteries</li>
                <li>• Binoculars for wildlife viewing</li>
                <li>• Light jacket for early mornings</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Cultural Etiquette</h4>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Respect local Samburu customs</li>
                <li>• Ask permission before photographing people</li>
                <li>• Dress modestly when visiting villages</li>
                <li>• Learn basic Samburu greetings</li>
                <li>• Support local artisans respectfully</li>
                <li>• Follow wildlife viewing guidelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <Clock className="w-6 h-6 text-amber-600 mr-3" />
            <h3 className="text-2xl font-light font-playfair text-gray-900">Best Time to Visit</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-amber-50 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Dry Season</h4>
              <p className="text-amber-600 font-medium mb-3">June - October</p>
              <p className="text-gray-600 font-light text-sm">
                Excellent wildlife viewing as animals gather around water sources. 
                Clear skies and minimal rainfall.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Short Rains</h4>
              <p className="text-green-600 font-medium mb-3">November - December</p>
              <p className="text-gray-600 font-light text-sm">
                Landscape becomes lush and green. Great for birdwatching and 
                witnessing newborn animals.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Long Rains</h4>
              <p className="text-blue-600 font-medium mb-3">March - May</p>
              <p className="text-gray-600 font-light text-sm">
                Fewer crowds, lower rates. Some roads may be challenging, 
                but wildlife is still abundant.
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div>
          <h3 className="text-2xl font-light font-playfair text-gray-900 mb-8">Nearby Attractions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Buffalo Springs National Reserve</h4>
              <p className="text-gray-600 font-light text-sm">
                Adjacent reserve offering different landscapes and wildlife viewing opportunities.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Shaba National Reserve</h4>
              <p className="text-gray-600 font-light text-sm">
                Scenic reserve famous for its dramatic landscapes and diverse wildlife.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-3">Samburu Cultural Village</h4>
              <p className="text-gray-600 font-light text-sm">
                Authentic cultural experiences with the local Samburu community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
