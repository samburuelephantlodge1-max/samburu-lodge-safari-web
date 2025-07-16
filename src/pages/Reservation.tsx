import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Reservation = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          title: "Reservation Request Sent!",
          description: "We'll get back to you within 24 hours to confirm your booking.",
        });
        form.reset();
        setCheckIn(undefined);
        setCheckOut(undefined);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reservation request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/7bf2e565-a82b-4a3a-b39e-09a644ad96b9.png')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-6 font-playfair">
            Make Your Reservation
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90">
            Experience the magic of Samburu National Reserve
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 font-playfair text-brand-brown">
              Book Your Safari Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours to confirm your reservation and discuss your personalized safari experience.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-brand-brown font-medium">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-brand-brown font-medium">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-brand-brown font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-brand-brown font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
              </div>

              {/* Stay Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-brand-brown font-medium">Check-in Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-gray-300",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Select check-in date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <input
                    type="hidden"
                    name="checkInDate"
                    value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-brand-brown font-medium">Check-out Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-gray-300",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Select check-out date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <input
                    type="hidden"
                    name="checkOutDate"
                    value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""}
                  />
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="adults" className="text-brand-brown font-medium">Number of Adults *</Label>
                  <Input
                    id="adults"
                    name="adults"
                    type="number"
                    min="1"
                    required
                    defaultValue="2"
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children" className="text-brand-brown font-medium">Number of Children</Label>
                  <Input
                    id="children"
                    name="children"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
              </div>

              {/* Room Preference */}
              <div className="space-y-2">
                <Label htmlFor="roomType" className="text-brand-brown font-medium">Accommodation Preference</Label>
                <select
                  id="roomType"
                  name="roomType"
                  className="w-full p-3 border border-gray-300 rounded-md focus:border-brand-orange focus:ring-brand-orange"
                >
                  <option value="">Select accommodation type</option>
                  <option value="single-cottage">Single Cottages</option>
                  <option value="family-cottage">Family Cottages</option>
                  <option value="budget-rooms">Budget Rooms (ideal for large groups such as school trips)</option>
                </select>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-brand-brown font-medium">Special Requests or Dietary Requirements</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please let us know about any special requests, dietary requirements, celebrations, or accessibility needs..."
                  rows={4}
                  className="border-gray-300 focus:border-brand-orange focus:ring-brand-orange"
                />
              </div>

              {/* Hidden fields for form identification */}
              <input type="hidden" name="_subject" value="New Reservation Request - Samburu Elephant Lodge" />
              <input type="hidden" name="_next" value="thank-you" />

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white px-12 py-4 text-lg font-medium tracking-wide uppercase disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Reservation Request"}
                </Button>
                <p className="text-sm text-gray-600 mt-4">
                  We'll contact you within 24 hours to confirm availability and finalize your booking.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;