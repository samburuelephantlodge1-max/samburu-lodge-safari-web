import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Calendar, Clock, MessageCircle, Link, Instagram, Linkedin, Twitter, Facebook, Music } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const TripAdvisorReviewWidget = () => {
  useEffect(() => {
    // Load TripAdvisor script if not already loaded
    const existingScript = document.querySelector('script[src*="jscache.com/wejs"][src*="cdswritereviewlg"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://www.jscache.com/wejs?wtype=cdswritereviewlg&uniq=141&locationId=24053068&lang=en_US&lang=en_US&display_version=2";
      script.setAttribute('data-loadtrk', '');
      script.onload = function() {
        (this as any).loadtrk = true;
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-6">
      <div id="TA_cdswritereviewlg141" className="TA_cdswritereviewlg">
        <ul id="oOvPDe7lKAGQ" className="TA_links F87WSRzC9q">
          <li id="Z4x6ch" className="zhJA3hP8">
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.tripadvisor.com/Hotel_Review-g298254-d24053068-Reviews-Samburu_Elephant_Lodge-Samburu_National_Reserve_Samburu_District_Rift_Valley_Province.html"
            >
              <img 
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
                alt="TripAdvisor"
                className="max-h-8"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappNumber = "+254796099657";
  const whatsappMessage = "Hello! I'm interested in booking a safari at Samburu Elephant Lodge. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xanbylab', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We've received your inquiry and will get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-cream/30 to-brand-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Contact Us
          </h2>
          <p className="text-xl text-brand-brown/80 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to experience the magic of Samburu? Get in touch with us to plan your unforgettable safari adventure
          </p>
        </div>


        {/* WhatsApp Priority Section */}
        <div className="mb-16 text-center">
          <div className="bg-brand-orange text-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-light font-playfair">Quick Response via WhatsApp</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed opacity-90">
              Get instant booking assistance and personalized service. Chat with our team now!
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-brand-orange hover:bg-brand-cream px-8 py-3 rounded-lg font-medium text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <MapPin className="mr-3 text-brand-orange" />
                  Location
                </CardTitle>
              </CardHeader>
               <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-brand-brown font-medium mb-1">Physical Address:</p>
                    <p className="text-brand-brown/80 leading-relaxed">
                      Samburu Elephant Lodge<br />
                      Samburu National Reserve, Samburu
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-brown font-medium mb-1">Postal Address:</p>
                    <p className="text-brand-brown/80 leading-relaxed">
                      677 Samburu Elephant Lodge<br />
                      60300, Isiolo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <Phone className="mr-3 text-brand-orange" />
                  Contact Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-brand-orange/10 p-3 rounded-lg mb-3">
                  <p className="text-brand-brown font-medium">
                    <strong>WhatsApp (Preferred):</strong> 
                    <a href={whatsappUrl} className="text-brand-orange hover:text-brand-orange-dark ml-1">
                      +254 796 099 657
                    </a>
                  </p>
                </div>
                <p className="text-brand-brown/80">Kenya: +254 110 463 062</p>
                <p className="text-brand-brown/80">UK: +44 7377 308 560</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-brand-cream/50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <Clock className="mr-3 text-brand-orange" />
                  Reception Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-brown/80">7:30 AM - 11:00 PM Daily</p>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-brand-brown/80">
                <strong>Email:</strong> info@samburuelephantlodge.co.ke
              </p>
              <p className="text-brand-brown/80">
                <strong>Reservations:</strong> reservations@samburuelephantlodge.co.ke
              </p>
            </div>

            <Card className="bg-white border-brand-cream/50 shadow-sm mt-6">
              <CardHeader>
                <CardTitle className="flex items-center text-brand-brown font-playfair">
                  <MessageCircle className="mr-3 text-brand-orange" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="https://api.whatsapp.com/send?phone=254796099657" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                  <a 
                    href="https://instagram.com/samburu_elephant_lodge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61575155937407" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                  <a 
                    href="https://tiktok.com/@samburu.elephant.lodge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    TikTok
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/samburu-elephant-lodge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/samburuelephant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-brand-brown/80 hover:text-brand-orange transition-colors"
                  >
                    <Twitter className="w-4 h-4 mr-2" />
                    X (Twitter)
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-brand-cream/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-brand-brown font-playfair">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-brand-brown font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text"
                      id="first-name"
                      name="firstName"
                      placeholder="Your first name" 
                      className="border-brand-cream" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-brand-brown font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text"
                      id="last-name"
                      name="lastName"
                      placeholder="Your last name" 
                      className="border-brand-cream" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-brand-brown font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="your.email@example.com" 
                    className="border-brand-cream" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-brand-brown font-medium mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567" 
                    className="border-brand-cream" 
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkin" className="block text-brand-brown font-medium mb-2">
                      Check-in Date
                    </label>
                    <Input 
                      type="date" 
                      id="checkin"
                      name="checkin"
                      className="border-brand-cream" 
                    />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-brand-brown font-medium mb-2">
                      Check-out Date
                    </label>
                    <Input 
                      type="date" 
                      id="checkout"
                      name="checkout"
                      className="border-brand-cream" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-brand-brown font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your safari dreams..."
                    className="min-h-32 border-brand-cream"
                  />
                </div>

                {/* Spam protection: honeypot field (invisible to users) */}
                <input type="text" name="_gotcha" style={{display: 'none'}} />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white w-full py-3 text-sm uppercase tracking-[0.1em]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Existing Guests Section */}
        <div className="mt-16 mb-16">
          <div className="bg-brand-brown text-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-light font-playfair">Already Booked with Us?</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed opacity-90 text-center">
              Complete your pre-check-in form to ensure a smooth arrival and personalized experience at Samburu Elephant Lodge.
            </p>
            <div className="text-center">
              <a href="/pre-check-in">
                <Button className="bg-brand-orange text-white hover:bg-brand-orange-dark px-8 py-3 rounded-lg font-medium text-lg">
                  <Link className="w-5 h-5 mr-2" />
                  Complete Pre-Check-In Form
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* TripAdvisor Review Widget */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm border border-brand-cream/50">
            <h3 className="text-2xl font-light font-playfair text-brand-brown mb-4">
              Share Your Experience
            </h3>
            <p className="text-brand-brown/80 mb-6 leading-relaxed">
              Had a wonderful stay with us? We'd love to hear about your safari adventure!
            </p>
            <TripAdvisorReviewWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
