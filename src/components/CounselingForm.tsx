import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface CounselingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const courses = [
  "MBA", "MCA", "BCA", "BBA", "BCOM", "MA (Journalism)", 
  "M.Sc (Data Science)", "M.Sc (Business Analytics)", "BA", "Other"
];

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal", "Other"
];

export default function CounselingForm({ isOpen, onClose, selectedCourse }: CounselingFormProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    emailId: "",
    location: "",
    course: selectedCourse || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.contactNumber || !formData.emailId || !formData.location || !formData.course) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Application Submitted!",
      description: "Our counselor will contact you within 24 hours.",
    });

    // Reset form and close
    setFormData({
      fullName: "",
      contactNumber: "",
      emailId: "",
      location: "",
      course: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-2 border-manipal-orange">
        <DialogHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/11129ed6-3d3c-4b47-98fe-0ea196d6e32a.png" 
              alt="Online Manipal Logo" 
              className="h-16 w-auto"
            />
          </div>
          <DialogTitle className="text-2xl font-bold text-manipal-text-dark">
            Get 100% Free Counselling
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-manipal-text-dark font-medium">
              Type name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Type name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="border-gray-300 focus:border-manipal-orange focus:ring-manipal-orange"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="emailId" className="text-manipal-text-dark font-medium">
              Type email id
            </Label>
            <Input
              id="emailId"
              type="email"
              placeholder="Type email id"
              value={formData.emailId}
              onChange={(e) => setFormData({...formData, emailId: e.target.value})}
              className="border-gray-300 focus:border-manipal-orange focus:ring-manipal-orange"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber" className="text-manipal-text-dark font-medium">
              Enter Contact Number
            </Label>
            <Input
              id="contactNumber"
              type="tel"
              placeholder="Enter Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
              className="border-gray-300 focus:border-manipal-orange focus:ring-manipal-orange"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-manipal-text-dark font-medium">
              Select Course...
            </Label>
            <Select 
              value={formData.course} 
              onValueChange={(value) => setFormData({...formData, course: value})}
            >
              <SelectTrigger className="border-gray-300 focus:border-manipal-orange focus:ring-manipal-orange">
                <SelectValue placeholder="Select Course..." />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="hover:bg-manipal-orange-light">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-manipal-text-dark font-medium">
              Select State...
            </Label>
            <Select 
              value={formData.location} 
              onValueChange={(value) => setFormData({...formData, location: value})}
            >
              <SelectTrigger className="border-gray-300 focus:border-manipal-orange focus:ring-manipal-orange">
                <SelectValue placeholder="Select State..." />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-300 max-h-60">
                {states.map((state) => (
                  <SelectItem key={state} value={state} className="hover:bg-manipal-orange-light">
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            variant="manipal" 
            size="lg" 
            className="w-full mt-6"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}