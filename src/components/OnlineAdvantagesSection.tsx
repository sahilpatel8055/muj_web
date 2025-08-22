import { GraduationCap } from "lucide-react";
import advantageImage from "@/assets/advantage.jpg";

const points = [
  {
    number: "1",
    title: "Flexibility:",
    description: "Online Manipal offers a flexible learning environment suitable for working professionals."
  },
  {
    number: "2",
    title: "Quality Education:",
    description: "The program maintains high academic standards with a curriculum updated to reflect industry trends."
  },
  {
    number: "3",
    title: "24*7 LMS Access:",
    description: "Get unlimited 24×7 access to our Learning Management System so you can study anytime, anywhere. All your course materials, lectures, and assignments are just a click away."
  },
  {
    number: "4",
    title: "1 on 1 mentor:",
    description: "Receive personalized guidance with 1-on-1 mentorship tailored to your learning needs. Get expert support to clarify doubts, plan studies, and achieve your goals faster."
  },
  {
    number: "5",
    title: "placement support:",
    description: "Get dedicated placement support with active job promotion to top recruiters. From resume building to interview preparation, we help you secure and showcase your profile for the best opportunities."
  }
];

const OnlineAdvantagesSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 leading-tight">
              <span className="text-orange-500">Online Manipal</span> Advantages
            </h2>
            
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-5xl font-bold text-orange-500 leading-none">
                      {point.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={advantageImage} 
                alt="Online Manipal Advantages"
                className="w-full h-auto max-w-lg mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineAdvantagesSection;
