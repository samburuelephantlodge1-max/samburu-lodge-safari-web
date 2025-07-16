
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { name: t('navigation.home'), href: '/', isAnchor: false },
    { name: t('navigation.about'), href: '#about', isAnchor: true },
    { name: t('navigation.accommodation'), href: '/accommodation', isAnchor: false },
    { name: t('navigation.experiences'), href: '#experiences', isAnchor: true },
    { name: t('navigation.community'), href: '/community', isAnchor: false },
    { name: t('navigation.blog'), href: '/blog', isAnchor: false },
    { name: t('navigation.contact'), href: '#contact', isAnchor: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/2aa78391-33b8-495a-bc2c-b42bc00b246b.png" 
                alt="Samburu Elephant Lodge" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.1em] text-brand-brown hover:text-brand-orange transition-colors duration-300 font-light"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm uppercase tracking-[0.1em] text-brand-brown hover:text-brand-orange transition-colors duration-300 font-light"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Side - Language Switcher & Reservation Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/reservation">
              <Button 
                variant="outline" 
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-6 py-2 text-xs uppercase tracking-[0.1em] font-light"
              >
                {t('navigation.reserve')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-brand-brown">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-xl font-light font-playfair text-brand-brown">Menu</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-brand-brown"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-8 flex-1">
                  {navItems.map((item) => (
                    item.isAnchor ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-2xl font-light text-brand-brown hover:text-brand-orange transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-2xl font-light text-brand-brown hover:text-brand-orange transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                  <div className="pt-8 space-y-4">
                    <LanguageSwitcher />
                    <Link to="/reservation" onClick={() => setIsOpen(false)}>
                      <Button className="bg-brand-orange text-white hover:bg-brand-orange-dark w-full py-3 text-sm uppercase tracking-[0.1em]">
                        {t('navigation.makeReservation')}
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
