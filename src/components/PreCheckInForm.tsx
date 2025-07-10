import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Calendar, User, Bed, Utensils, Car, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const PreCheckInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mldnqgda', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Pre-Check-In Completed!",
          description: "Thank you! We've received your information and will prepare for your arrival.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-brand-cream/30 to-brand-cream/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-brand-brown mb-6 font-playfair">
            Guest Pre-Check-In Form
          </h2>
          <p className="text-xl text-brand-brown/80 leading-relaxed font-light">
            Thank you for choosing to stay with us! Please fill out this form to help us prepare for your arrival and make your experience as comfortable and personalized as possible.
          </p>
        </div>

        <Card className="bg-white border-brand-cream/50 shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Basic Information</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="fullName" className="text-brand-brown font-medium">
                      Full Name *
                    </Label>
                    <Input 
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      className="border-brand-cream mt-2"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber" className="text-brand-brown font-medium">
                      Contact Number *
                    </Label>
                    <Input 
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="+1 (555) 123-4567"
                      className="border-brand-cream mt-2"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-brand-brown font-medium">
                      Email Address *
                    </Label>
                    <Input 
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="border-brand-cream mt-2"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="bookingReference" className="text-brand-brown font-medium">
                      Booking Reference (if available)
                    </Label>
                    <Input 
                      type="text"
                      id="bookingReference"
                      name="bookingReference"
                      placeholder="REF123456"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Stay Details */}
              <div>
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Stay Details</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="checkInDate" className="text-brand-brown font-medium">
                      Check-In Date
                    </Label>
                    <Input 
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOutDate" className="text-brand-brown font-medium">
                      Check-Out Date
                    </Label>
                    <Input 
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="adults" className="text-brand-brown font-medium">
                      Number of Guests: Adults
                    </Label>
                    <Input 
                      type="number"
                      id="adults"
                      name="adults"
                      min="1"
                      placeholder="2"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="children" className="text-brand-brown font-medium">
                      Number of Guests: Children
                    </Label>
                    <Input 
                      type="number"
                      id="children"
                      name="children"
                      min="0"
                      placeholder="0"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="childrenAges" className="text-brand-brown font-medium">
                      Children's Ages
                    </Label>
                    <Input 
                      type="text"
                      id="childrenAges"
                      name="childrenAges"
                      placeholder="e.g., 5, 8, 12"
                      className="border-brand-cream mt-2"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Room Preferences */}
              <div>
                <div className="flex items-center mb-6">
                  <Bed className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Room Preferences</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Preferred Bed Type
                    </Label>
                    <RadioGroup name="bedType" className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="king-size" id="king-size" />
                        <Label htmlFor="king-size" className="text-brand-brown cursor-pointer">King-size</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="double" id="double" />
                        <Label htmlFor="double" className="text-brand-brown cursor-pointer">Double</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="twin-beds" id="twin-beds" />
                        <Label htmlFor="twin-beds" className="text-brand-brown cursor-pointer">Twin beds</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no-preference" id="no-preference" />
                        <Label htmlFor="no-preference" className="text-brand-brown cursor-pointer">No preference</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="roomLocation" className="text-brand-brown font-medium">
                      Room Location Preference
                    </Label>
                    <Textarea 
                      id="roomLocation"
                      name="roomLocation"
                      placeholder="e.g., Ground floor, River view, Quiet area"
                      className="min-h-20 border-brand-cream mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Early Check-In?
                    </Label>
                    <RadioGroup name="earlyCheckIn" className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="early-yes" />
                        <Label htmlFor="early-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="early-no" />
                        <Label htmlFor="early-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Late Check-Out?
                    </Label>
                    <RadioGroup name="lateCheckOut" className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="late-yes" />
                        <Label htmlFor="late-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="late-no" />
                        <Label htmlFor="late-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="mt-6">
                  <Label className="text-brand-brown font-medium mb-3 block">
                    Are you celebrating a special occasion?
                  </Label>
                  <RadioGroup name="specialOccasion" className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="occasion-yes" />
                      <Label htmlFor="occasion-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="occasion-no" />
                      <Label htmlFor="occasion-no" className="text-brand-brown cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                  <Input 
                    type="text"
                    name="occasionDetails"
                    placeholder="If yes, please specify (Anniversary, Birthday, Honeymoon, etc.)"
                    className="border-brand-cream"
                  />
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Health & Accessibility */}
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Health & Accessibility</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Any medical conditions or mobility concerns?
                    </Label>
                    <RadioGroup name="medicalConditions" className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="medical-yes" />
                        <Label htmlFor="medical-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="medical-no" />
                        <Label htmlFor="medical-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    <Textarea 
                      name="medicalDetails"
                      placeholder="If yes, please provide details"
                      className="min-h-20 border-brand-cream"
                    />
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Need accessibility features?
                    </Label>
                    <RadioGroup name="accessibilityNeeds" className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="accessibility-yes" />
                        <Label htmlFor="accessibility-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="accessibility-no" />
                        <Label htmlFor="accessibility-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    <Input 
                      type="text"
                      name="accessibilityDetails"
                      placeholder="If yes, please specify"
                      className="border-brand-cream"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Dietary Preferences */}
              <div>
                <div className="flex items-center mb-6">
                  <Utensils className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Dietary Preferences</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Food allergies?
                    </Label>
                    <RadioGroup name="foodAllergies" className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="allergies-yes" />
                        <Label htmlFor="allergies-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="allergies-no" />
                        <Label htmlFor="allergies-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    <Input 
                      type="text"
                      name="allergyDetails"
                      placeholder="If yes, please specify"
                      className="border-brand-cream"
                    />
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Dietary preferences (select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="vegetarian" name="dietaryPreferences" value="Vegetarian" className="rounded border-brand-cream" />
                        <Label htmlFor="vegetarian" className="text-brand-brown cursor-pointer">Vegetarian</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="vegan" name="dietaryPreferences" value="Vegan" className="rounded border-brand-cream" />
                        <Label htmlFor="vegan" className="text-brand-brown cursor-pointer">Vegan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="halal" name="dietaryPreferences" value="Halal" className="rounded border-brand-cream" />
                        <Label htmlFor="halal" className="text-brand-brown cursor-pointer">Halal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="gluten-free" name="dietaryPreferences" value="Gluten-Free" className="rounded border-brand-cream" />
                        <Label htmlFor="gluten-free" className="text-brand-brown cursor-pointer">Gluten-Free</Label>
                      </div>
                    </div>
                    <Input 
                      type="text"
                      name="otherDietary"
                      placeholder="Other dietary preferences"
                      className="border-brand-cream mt-4"
                    />
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Are you traveling with infants/young children?
                    </Label>
                    <RadioGroup name="travelingWithInfants" className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="infants-yes" />
                        <Label htmlFor="infants-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="infants-no" />
                        <Label htmlFor="infants-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    <Input 
                      type="text"
                      name="infantAges"
                      placeholder="If yes, ages"
                      className="border-brand-cream"
                    />
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Do you require any of the following? (select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="baby-cot" name="babyRequirements" value="Baby Cot" className="rounded border-brand-cream" />
                        <Label htmlFor="baby-cot" className="text-brand-brown cursor-pointer">Baby Cot</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="high-chair" name="babyRequirements" value="High Chair" className="rounded border-brand-cream" />
                        <Label htmlFor="high-chair" className="text-brand-brown cursor-pointer">High Chair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="baby-bath" name="babyRequirements" value="Baby Bath" className="rounded border-brand-cream" />
                        <Label htmlFor="baby-bath" className="text-brand-brown cursor-pointer">Baby Bath</Label>
                      </div>
                    </div>
                    <Input 
                      type="text"
                      name="otherBabyRequirements"
                      placeholder="Other requirements"
                      className="border-brand-cream mt-4"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Travel Details */}
              <div>
                <div className="flex items-center mb-6">
                  <Car className="w-6 h-6 text-brand-orange mr-3" />
                  <h3 className="text-2xl font-light text-brand-brown font-playfair">Travel Details</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="arrivalTime" className="text-brand-brown font-medium">
                      Estimated Time of Arrival
                    </Label>
                    <Input 
                      type="time"
                      id="arrivalTime"
                      name="arrivalTime"
                      className="border-brand-cream mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Require airport/local transfer?
                    </Label>
                    <RadioGroup name="requireTransfer" className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="transfer-yes" />
                        <Label htmlFor="transfer-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="transfer-no" />
                        <Label htmlFor="transfer-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-brand-brown font-medium mb-3 block">
                      Require parking?
                    </Label>
                    <RadioGroup name="requireParking" className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="parking-yes" />
                        <Label htmlFor="parking-yes" className="text-brand-brown cursor-pointer">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="parking-no" />
                        <Label htmlFor="parking-no" className="text-brand-brown cursor-pointer">No</Label>
                      </div>
                    </RadioGroup>
                    <Input 
                      type="text"
                      name="vehicleDetails"
                      placeholder="If yes, vehicle details (make, model, license plate)"
                      className="border-brand-cream"
                    />
                  </div>
                </div>
              </div>

              <Separator className="bg-brand-cream" />

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo" className="text-brand-brown font-medium mb-3 block">
                  Anything else we should know?
                </Label>
                <Textarea 
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Please share any other requests, preferences, or information that would help us make your stay more comfortable..."
                  className="min-h-32 border-brand-cream"
                />
              </div>

              {/* Spam protection: honeypot field (invisible to users) */}
              <input type="text" name="_gotcha" style={{display: 'none'}} />
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white w-full py-4 text-lg uppercase tracking-[0.1em]"
              >
                {isSubmitting ? 'Submitting...' : 'Complete Pre-Check-In'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PreCheckInForm;