import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const impactStats = [
  {
    number: "60+",
    description: "Countries and 2000+ towns & cities- our students span the globe"
  },
  {
    number: "100k+",
    description: "Learners have been empowered through Online Manipal"
  },
  {
    number: "93%",
    description: "Of students say their online degree has a positive ROI"
  },
  {
    number: "81%",
    description: "Of students find online is better than or equal to on-campus learning"
  }
];

const OurImpact = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-24">
          {impactStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-5xl md:text-6xl font-bold font-serif mb-2">
                {stat.number}
              </div>
              <p className="text-lg text-gray-400 max-w-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
