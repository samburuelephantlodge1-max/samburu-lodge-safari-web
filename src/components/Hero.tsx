
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/lovable-uploads/115029a8-3ee7-40a7-b8e7-969bd2b1bad2.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-4 font-light">
            {t('hero.location')}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 font-playfair leading-tight">
            {t('hero.title')}<br />
            <span className="font-normal">{t('hero.subtitle')}</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/reservation">
            <Button className="bg-brand-orange text-white hover:bg-brand-orange-dark px-8 py-4 text-base font-normal tracking-wide uppercase">
              {t('hero.makeReservation')}
            </Button>
          </Link>
          <Link to="/experiences">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-normal tracking-wide uppercase bg-transparent"
            >
              {t('hero.exploreExperiences')}
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-xs uppercase tracking-[0.2em] mb-4 font-light">{t('hero.discover')}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
