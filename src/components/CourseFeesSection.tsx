import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Percent, GraduationCap, ChevronRight } from "lucide-react";

const courseFees = {
  indian: {
    fullFee: "1,75,000",
    semesterFee: "43,750",
    emi: "7,292",
  },
  nri: {
    fullFee: "4,000",
    semesterFee: "1,000",
    emi: "200",
    currency: "$"
  },
  foreign: {
    fullFee: "3,000",
    semesterFee: "750",
    emi: "150",
    currency: "$"
  },
  african: {
    fullFee: "2,500",
    semesterFee: "625",
    emi: "125",
    currency: "$"
  }
};

const scholarships = [
  { category: "Divyaang (For persons with disabilities)", discount: "20%", criteria: "Divyaang certificate" },
  { category: "Defence personnel", discount: "20%", criteria: "Personnel / Service / IC number" },
  { category: "Alumni of Manipal University Jaipur", discount: "20%", criteria: "UG/PG alumni of Manipal University Jaipur" },
  { category: "Government employees", discount: "10%", criteria: "Identity card" },
  { category: "Merit (80% and above in bachelor’s degree)", discount: "10%", criteria: "Mark sheet" },
];

interface CourseFeesProps {
  courseData?: any;
  courseName?: string;
}

const CourseFeesSection = ({ courseData, courseName = "MBA" }: CourseFeesProps) => {
  const [activeTab, setActiveTab] = useState("indian");
  const [isScholarshipModalOpen, setIsScholarshipModalOpen] = useState(false);
  
  // Use provided course data or fallback to default MBA data
  const fees = courseData?.fees || courseFees;
  const feesData = fees[activeTab];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-foreground mb-8">
          Online {courseName} Course Fee
        </h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 rounded-full p-1 mb-8 md:justify-start md:w-fit">
            <TabsTrigger value="indian" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Indian Nationals</TabsTrigger>
            <TabsTrigger value="nri" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Non-Resident Indians</TabsTrigger>
            <TabsTrigger value="foreign" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Foreign Nationals</TabsTrigger>
            <TabsTrigger value="african" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">African Nationals</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            <Card className="bg-purple-100/50 p-6 md:p-8 rounded-xl text-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-sm font-semibold text-black">Full course fee (Four semesters)</h3>
                  <p className="text-4xl font-bold mt-1">
                    {feesData.currency || "₹"} {feesData.fullFee}
                  </p>
                  <p className="text-sm text-black mt-1">Inclusive of all taxes</p>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  <Card className="p-4 bg-white rounded-lg">
                    <h4 className="text-sm font-semibold text-black">Each semester fee</h4>
                    <p className="text-2xl font-bold mt-1">
                      {feesData.currency || "₹"} {feesData.semesterFee}
                    </p>
                    <p className="text-xs text-black mt-1">Inclusive of all taxes</p>
                  </Card>
                  <Card className="p-4 bg-white rounded-lg">
                    <h4 className="text-sm font-semibold text-black">EMI starting at</h4>
                    <p className="text-2xl font-bold mt-1">
                      {feesData.currency || "₹"} {feesData.emi}
                      <span className="text-base text-black">/Month</span>
                    </p>
                    <p className="text-xs text-black mt-1">T&C</p>
                  </Card>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-left mb-6">Easy EMI & Scholarships</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 flex items-center gap-4">
              <div className="bg-pink-100 p-3 rounded-full">
                <Percent className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">No-cost EMI</h4>
                <p className="text-muted-foreground text-sm">
                  Hassle-free learning with no-cost EMIs, low interest rates, and flexible part-payment options.
                </p>
              </div>
            </Card>
            <Card className="p-6 flex items-center justify-between gap-4 cursor-pointer" onClick={() => setIsScholarshipModalOpen(true)}>
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Manipal scholarship scheme</h4>
                  <p className="text-muted-foreground text-sm">
                    Exclusive scholarships of up to 20% for various categories.
                  </p>
                </div>
              </div>
              <span className="text-black font-semibold text-sm flex items-center gap-1">
                Learn More <ChevronRight className="w-4 h-4" />
              </span>
            </Card>
          </div>
        </div>
      </div>

      {/* Scholarship Modal */}
      <Dialog open={isScholarshipModalOpen} onOpenChange={setIsScholarshipModalOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Manipal Scholarship Scheme</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-lime-200">
                    <th className="px-4 py-2 text-left font-semibold">Scholarship category</th>
                    <th className="px-4 py-2 text-left font-semibold">Scholarship discount</th>
                    <th className="px-4 py-2 text-left font-semibold">Eligibility criteria</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarships.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-b-0">
                      <td className="px-4 py-2 text-sm">{item.category}</td>
                      <td className="px-4 py-2 text-sm">{item.discount}</td>
                      <td className="px-4 py-2 text-sm">{item.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CourseFeesSection;
