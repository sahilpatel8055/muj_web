import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Declare gtag_report_conversion to make TypeScript happy
declare global {
  interface Window {
    gtag_report_conversion: ((url?: string) => boolean) | undefined;
  }
}

interface CounselingFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: string; // 'auto', 'cta', 'bell'
}

const CounselingFormPopup: React.FC<CounselingFormPopupProps> = ({ isOpen, onClose, trigger = 'cta' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    consent: true // Default to true as requested
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'Online MBA',
    'Online MCA',
    'Online BBA',
    'Online BCA',
    'Online BCom',
    'Online MCom',
    'Online BA',
    'Online MA'
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
          trigger: trigger || 'popup'
        }
      });

      if (error) {
        throw error;
      }

      toast.success('Thank you! Your details have been submitted successfully. We will contact you soon.');
      
      // Set session storage to remember form submission
      sessionStorage.setItem('counselingFormSubmitted', 'true');
      sessionStorage.setItem('counselingFormSubmittedTime', Date.now().toString());

      // Google Ads Conversion Tracking - NEW ADDITION
      if (window.gtag_report_conversion) {
        // Call the conversion function. For a popup submission, a redirect URL is typically not passed.
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
      
      onClose();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error submitting your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm sm:max-w-md md:max-w-lg mx-auto p-6 gap-0 bg-card/95 backdrop-blur-md border-border rounded-2xl shadow-lg min-h-[500px] sm:min-h-[480px] md:min-h-[450px] m-4">
        <DialogTitle className="sr-only">Counseling Form</DialogTitle>
        <DialogDescription className="sr-only">Submit your details for counseling and we'll contact you soon</DialogDescription>
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-destructive hover:text-destructive-foreground z-50"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center mb-4">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
              Join <span className="text-primary">50,000+</span> Learners Across India
            </h3>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-3 h-3 text-primary" />
                </div>
                Easy financing
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-primary" />
                </div>
                Scholarships
              </div>
            </div>
            <p className="text-sm text-card-foreground font-medium mb-2">
              Submit your details and we'll contact you soon!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-foreground w-16 flex-shrink-0">NAME :</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm h-11 flex-1"
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-foreground w-16 flex-shrink-0">EMAIL :</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm h-11 flex-1"
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-foreground whitespace-nowrap">Mobile No. :</label>
              <div className="flex flex-1">
                <div className="flex items-center bg-background border border-r-0 border-gray-400 rounded-l-md px-3 h-11">
                  <span className="text-sm text-muted-foreground">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="bg-background border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-l-none text-sm h-11"
                  required
                />
              </div>
            </div>

            <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
              <SelectTrigger className="bg-background border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm h-11">
                <SelectValue placeholder="Select course*" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-gray-400 shadow-lg z-50">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="text-sm">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-start space-x-2 mt-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                className="mt-1 flex-shrink-0"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                I authorize Online Manipal and its associates to contact me with updates notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC. I accept the{" "}
                <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</a>{" "}
                and{" "}
                <a href="/disclaimer" target="_blank" className="text-primary hover:underline">Disclaimer</a>.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-sm h-11 mt-4"
              disabled={!formData.consent || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Enroll Now'}
            </Button>
          </form>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Last Date: <span className="text-primary font-medium">23 Aug</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-primary font-medium">Limited Seats</span>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounselingFormPopup;
