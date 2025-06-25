import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Calendar, Clock, MessageCircle, Link } from 'lucide-react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    message: ''
  });
  const { toast } = useToast();

  const whatsappNumber = "+254796099657";
  const whatsappMessage = "Hello! I'm interested in booking a safari at Samburu Elephant Lodge. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          check_in_date: formData.checkInDate || null,
          check_out_date: formData.checkOutDate || null,
          message: formData.message || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We've received your inquiry and will get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
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

        {/* Existing Guests Section */}
        <div className="mb-16">
          <div className="bg-brand-brown text-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-light font-playfair">Already Booked with Us?</h3>
            </div>
            <p className="text-lg mb-6 leading-relaxed opacity-90 text-center">
              Complete your pre-check-in form to ensure a smooth arrival and personalized experience at Samburu Elephant Lodge.
            </p>
            <div className="text-center">
              <RouterLink to="/pre-check-in">
                <Button className="bg-brand-orange text-white hover:bg-brand-orange-dark px-8 py-3 rounded-lg font-medium text-lg">
                  <Link className="w-5 h-5 mr-2" />
                  Complete Pre-Check-In Form
                </Button>
              </RouterLink>
            </div>
          </div>
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
                <p className="text-brand-brown/80 leading-relaxed">
                  677 Samburu National Reserve<br />
                  Isiolo, 60300<br />
                  Kenya
                </p>
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
                    <label className="block text-brand-brown font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name" 
                      className="border-brand-cream" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name" 
                      className="border-brand-cream" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="border-brand-cream" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Phone
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    className="border-brand-cream" 
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Check-in Date
                    </label>
                    <Input 
                      type="date" 
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="border-brand-cream" 
                    />
                  </div>
                  <div>
                    <label className="block text-brand-brown font-medium mb-2">
                      Check-out Date
                    </label>
                    <Input 
                      type="date" 
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      className="border-brand-cream" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-brand-brown font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your safari dreams..."
                    className="min-h-32 border-brand-cream"
                  />
                </div>
                
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
      </div>
    </section>
  );
};

export default Contact;
