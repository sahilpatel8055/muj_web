import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle } from "lucide-react";

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

const CourseFeesSection = () => {
  const [activeTab, setActiveTab] = useState("indian");
  const feesData = courseFees[activeTab];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
          Online MBA Course Fee
        </h2>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-muted/50 rounded-full p-1 mb-8">
            <TabsTrigger value="indian" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Indian Nationals</TabsTrigger>
            <TabsTrigger value="nri" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Non-Resident Indians</TabsTrigger>
            <TabsTrigger value="foreign" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">Foreign Nationals</TabsTrigger>
            <TabsTrigger value="african" className="rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background font-semibold">African Nationals</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            <Card className="bg-purple-100/50 p-6 md:p-12 rounded-xl text-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-sm font-semibold text-gray-600">Full course fee (Four semesters)</h3>
                  <p className="text-4xl font-bold mt-1">
                    {feesData.currency || "₹"} {feesData.fullFee}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-white rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-600">Each semester fee</h4>
                    <p className="text-2xl font-bold mt-1">
                      {feesData.currency || "₹"} {feesData.semesterFee}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                  </Card>
                  <Card className="p-4 bg-white rounded-lg">
                    <h4 className="text-sm font-semibold text-gray-600">EMI starting at</h4>
                    <p className="text-2xl font-bold mt-1">
                      {feesData.currency || "₹"} {feesData.emi}
                      <span className="text-base text-gray-600">/Month</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">T&C</p>
                  </Card>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-600 mt-4">
                <AlertCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Note for online payments</span>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CourseFeesSection;
