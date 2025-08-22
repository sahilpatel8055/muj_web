import React from 'react';
import { Card } from "@/components/ui/card";

// Import all accreditation images
import JohnsHopkins from "@/assets/Certificates/Johns-Hopkins-University.svg";
import UniversityOfMaryland from "@/assets/Certificates/University-of-Maryland.svg";
import UniversityOfCaliforniaIrvine from "@/assets/Certificates/University-of-California-Irvine.svg";
import UniversityOfMinnesota from "@/assets/Certificates/University-of-Minnesota.svg";
import UniversityOfIllinois from "@/assets/Certificates/University-of-Illinois-at-Urbana-Champaign.svg";
import UniversityOfRochester from "@/assets/Certificates/University-of-Rochester.svg";
import TheUniversityOfVirginia from "@/assets/Certificates/The-University-of-Virginia.svg";
import UniversityOfMichigan from "@/assets/Certificates/University-of-Michigan.svg";

const universities = [
  { name: "Johns Hopkins University", logo: JohnsHopkins },
  { name: "University of Maryland", logo: UniversityOfMaryland },
  { name: "University of California Irvine", logo: UniversityOfCaliforniaIrvine },
  { name: "University of Minnesota", logo: UniversityOfMinnesota },
  { name: "University of Illinois at Urbana-Champaign", logo: UniversityOfIllinois },
  { name: "University of Rochester", logo: UniversityOfRochester },
  { name: "The University of Virginia", logo: TheUniversityOfVirginia },
  { name: "University of Michigan", logo: UniversityOfMichigan },
];

const CourseraBenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get access to exclusive Coursera benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from <span className="font-semibold">10,000+</span> courses & professional certifications from leading global universities while pursuing your degree.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-10">
          <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-semibold">
            Top Universities
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100">
            Essential Domains
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100">
            Skills You'll Learn
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {universities.map((uni, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-4 h-32 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={uni.logo}
                alt={uni.name}
                className="max-h-full max-w-full object-contain"
              />
            </Card>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          Note: Free Coursera access for limited period only
        </p>
      </div>
    </section>
  );
};

export default CourseraBenefitsSection;
