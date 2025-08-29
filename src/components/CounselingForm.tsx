import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Declare gtag_report_conversion to make TypeScript happy
declare global {
  interface Window {
    gtag_report_conversion: ((url?: string) => boolean) | undefined;
  }
}

const CounselingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    consent: true
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'Online MBA',
    'Online MCA', 
    'Online BBA',
    'Online BCA',
    'Online BCom',
    'Online MCom'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-to-sheets', {
        body: {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          course: formData.course,
          trigger: 'counseling-form'
        }
      });

      if (error) {
        throw error;
      }

      toast.success('Thank you! Your details have been submitted successfully. We will contact you soon.');
      
      // Google Ads Conversion Tracking - NEW ADDITION
      if (window.gtag_report_conversion) {
        // Call the conversion function. For an embedded form, no redirect URL is typically passed.
        window.gtag_report_conversion(); 
      }
      // End Google Ads Conversion Tracking

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        course: '',
        consent: true
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-lg w-full max-w-sm lg:max-w-sm xl:max-w-md overflow-hidden">{/* Fixed width and added overflow-hidden */}
      <div className="text-center mb-3">
        <h2 className="text-lg font-bold text-primary mb-2">Free Counseling Form</h2>
        <h3 className="text-sm font-bold text-foreground mb-1">
          Join <span className="text-primary">50,000+</span> Learners Across India
        </h3>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Calendar className="w-2 h-2 text-primary" />
            </div>
            Easy financing
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <Users className="w-2 h-2 text-primary" />
            </div>
            Scholarships
          </div>
        </div>
        <p className="text-xs text-card-foreground font-medium">
          Submit your details and we'll contact you soon!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2 text-xs">{/* Reduced spacing and smaller text */}
        <Input
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-background border-border focus:border-primary text-xs h-8"
          required
        />

        <Input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-background border-border focus:border-primary text-xs h-8"
          required
        />

        <div className="flex">
          <div className="flex items-center bg-background border border-r-0 border-border rounded-l-md px-2 h-8">
            <span className="text-xs text-muted-foreground">🇮🇳 +91</span>
          </div>
          <Input
            type="tel"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="bg-background border-border focus:border-primary rounded-l-none text-xs h-8"
            required
          />
        </div>

        <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
          <SelectTrigger className="bg-background border-border focus:border-primary text-xs h-8">
            <SelectValue placeholder="Select course*" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course} value={course}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-start space-x-2">
          <Checkbox 
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            className="mt-0.5 flex-shrink-0"
          />
          <label htmlFor="consent" className="text-xs text-muted-foreground leading-tight">
            I authorize Online Manipal and its associates to contact me with updates notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-xs h-8"
          disabled={!formData.consent || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Enroll Now'}
        </Button>
      </form>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          Last Date: <span className="text-primary font-medium">23 Aug</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="w-3 h-3" />
          <span className="text-primary font-medium">Limited Seats</span>
        </div>
      </div>
    </div>
  );
};

export default CounselingForm;
