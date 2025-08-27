import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, BookOpen, Award } from "lucide-react";

// Import your campus images here
import mujImage from '@/assets/campus/muj1.png';
import smuImage from '@/assets/campus/smu.png';
import maheImage from '@/assets/campus/mahe.png';

const universities = [
  {
    id: 1,
    name: "Manipal University Jaipur",
    ranking: "#1 Private University",
    image: mujImage,
    link: "/muj"
  },
  {
    id: 3,
    name: "Manipal Academy of Higher Education",
    ranking: "Ranks 4th amongst all Universities",
    image: maheImage,
    link: "/mahe"
  },
  {
    id: 2,
    name: "Sikkim Manipal University",
    ranking: "#2 Distance Education",
    image: smuImage,
    link: "/smu"
  },
];

const TopRankedUniversities = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shape Your Future With Our Top-Ranked Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from India's leading universities offering world-class online education with industry-relevant curriculum and global recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manipal University Jaipur card - spans two rows */}
          <div className="relative overflow-hidden rounded-xl h-full row-span-2 group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden flex-grow">
                    <img src={universities[0].image} alt={universities[0].name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-0 left-0 z-10"> {/* Adjusted positioning for the badge container */}
                        <span className="relative inline-block py-2 px-4 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                            {universities[0].ranking}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-red-700 transform rotate-45"></span> {/* Adjusted tail positioning */}
                        </span>
                    </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between bg-white">
                    <h3 className="text-base font-bold text-black">{universities[0].name}</h3>
                    <Button asChild variant="link" className="text-orange-500 text-sm font-medium transition-colors duration-200">
                        <a href={universities[0].link}>
                            View all Courses →
                        </a>
                    </Button>
                </div>
            </div>
          </div>

          {/* Manipal Academy of Higher Education card - top right */}
          <div className="relative overflow-hidden rounded-xl h-full group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img src={universities[1].image} alt={universities[1].name} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-0 left-0 z-10"> {/* Adjusted positioning for the badge container */}
                        <span className="relative inline-block py-2 px-4 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                            {universities[1].ranking}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-red-700 transform rotate-45"></span> {/* Adjusted tail positioning */}
                        </span>
                    </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between bg-white">
                    <h3 className="text-base font-bold text-black">{universities[1].name}</h3>
                    <Button asChild variant="link" className="text-orange-500 text-sm font-medium transition-colors duration-200">
                        <a href={universities[1].link}>
                            View all Courses →
                        </a>
                    </Button>
                </div>
              </div>
          </div>

          {/* Sikkim Manipal University card - bottom right */}
          <div className="relative overflow-hidden rounded-xl h-full group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img src={universities[2].image} alt={universities[2].name} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-0 left-0 z-10"> {/* Adjusted positioning for the badge container */}
                        <span className="relative inline-block py-2 px-4 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                            {universities[2].ranking}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-3 h-3 bg-red-700 transform rotate-45"></span> {/* Adjusted tail positioning */}
                        </span>
                    </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between bg-white">
                    <h3 className="text-base font-bold text-black">{universities[2].name}</h3>
                    <Button asChild variant="link" className="text-orange-500 text-sm font-medium transition-colors duration-200">
                        <a href={universities[2].link}>
                            View all Courses →
                        </a>
                    </Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankedUniversities;
