
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Car, MapPin, Clock, Info, CheckCircle } from 'lucide-react';
import lodgeSign from '@/assets/lodge-sign.jpg';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('about.conservation'),
      description: t('about.conservationText'),
      image: "/lovable-uploads/0808a2aa-6a3d-4233-b3b1-f0ad915c2478.png"
    },
    {
      title: t('about.community'),
      description: t('about.communityText'),
      image: "/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png"
    },
    {
      title: t('about.authenticity'),
      description: t('about.authenticityText'),
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">{t('about.sectionTitle')}</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 font-playfair whitespace-pre-line">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            {t('about.description')}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                {t('about.philosophy')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                {t('about.philosophyText1')}
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                {t('about.philosophyText2')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={lodgeSign}
              alt="Samburu Elephant Lodge wooden sign"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                {t('about.vision')}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light mb-8">
                {t('about.visionText')}
              </p>
              
              <h3 className="text-2xl font-light text-gray-900 mb-6 font-playfair">
                {t('about.mission')}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {t('about.missionText')}
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/83c625bb-f478-4857-aa19-33737444d4e6.png"
              alt="Our Mission and Vision"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover mb-8"
                loading="lazy"
              />
              <h4 className="text-xl font-light text-gray-900 mb-4 font-playfair uppercase tracking-[0.1em]">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Travel Information Section */}
        <div className="border-t border-gray-200 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light mb-6 font-playfair text-gray-900">
              Travel Information
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Your journey to Samburu Elephant Lodge begins here. Find all the essential information 
              you need for a seamless travel experience.
            </p>
          </div>

          {/* Location */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="w-6 h-6 text-amber-600 mr-3" />
              <h4 className="text-2xl font-light font-playfair text-gray-900">Location</h4>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
              <p className="text-gray-700 font-light leading-relaxed mb-4 text-center">
                <strong>Address:</strong> 677 Samburu National Reserve, Isiolo, 60300, Kenya
              </p>
              <p className="text-gray-700 font-light leading-relaxed text-center">
                Located within the pristine Samburu National Reserve, approximately 325 kilometers 
                north of Nairobi, our lodge offers direct access to some of Kenya's most spectacular 
                wildlife viewing opportunities.
              </p>
            </div>
          </div>

          {/* Transportation Options */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-6xl mx-auto">
            {/* By Air */}
            <div>
              <div className="flex items-center mb-6">
                <Plane className="w-6 h-6 text-amber-600 mr-3" />
                <h4 className="text-2xl font-light font-playfair text-gray-900">By Air</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-amber-600 pl-6">
                  <h5 className="text-lg font-medium text-gray-900 mb-2">Sasaab Airstrip</h5>
                  <p className="text-gray-600 font-light leading-relaxed mb-3">
                    Daily flights from Wilson Airport, Nairobi to Sasaab airstrip.
                  </p>
                  <ul className="space-y-2 text-gray-600 font-light">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      Flight duration: 1 hour 15 minutes
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      35-40 minute drive to lodge (14km)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* By Road */}
            <div>
              <div className="flex items-center mb-6">
                <Car className="w-6 h-6 text-amber-600 mr-3" />
                <h4 className="text-2xl font-light font-playfair text-gray-900">By Road</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-amber-600 pl-6">
                  <h5 className="text-lg font-medium text-gray-900 mb-2">Self Drive</h5>
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
                      GPS coordinates provided upon booking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Best Time to Visit */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-6 h-6 text-amber-600 mr-3" />
              <h4 className="text-2xl font-light font-playfair text-gray-900">Best Time to Visit</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-amber-50 rounded-lg">
                <h5 className="text-lg font-medium text-gray-900 mb-3">Dry Season</h5>
                <p className="text-amber-600 font-medium mb-3">June - October</p>
                <p className="text-gray-600 font-light text-sm">
                  Excellent wildlife viewing as animals gather around water sources.
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <h5 className="text-lg font-medium text-gray-900 mb-3">Short Rains</h5>
                <p className="text-green-600 font-medium mb-3">November - December</p>
                <p className="text-gray-600 font-light text-sm">
                  Landscape becomes lush and green. Great for birdwatching.
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h5 className="text-lg font-medium text-gray-900 mb-3">Long Rains</h5>
                <p className="text-blue-600 font-medium mb-3">March - May</p>
                <p className="text-gray-600 font-light text-sm">
                  Fewer crowds, lower rates. Wildlife is still abundant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
