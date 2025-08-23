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
            <div
              className="p-6 h-full flex flex-col justify-end bg-cover bg-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40"
              style={{ backgroundImage: `url(${universities[0].image})` }}
            >
              <h3 className="text-xl font-bold text-black mb-1">{universities[0].name}</h3>
              <a href={universities[0].link} className="flex items-center text-black hover:underline font-medium">
                View all Courses →
              </a>
            </div>
            {/* Custom Ranking Badge */}
            <div className="absolute top-0 left-4">
              <span className="relative inline-block py-2 px-6 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-700 transform rotate-45"></span>
                {universities[0].ranking}
              </span>
            </div>
          </div>

          {/* Manipal Academy of Higher Education card - top right */}
          <div className="relative overflow-hidden rounded-xl h-full group">
            <div
              className="p-6 h-full flex flex-col justify-end bg-cover bg-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40"
              style={{ backgroundImage: `url(${universities[1].image})` }}
            >
              <h3 className="text-base font-bold text-black mb-1">{universities[1].name}</h3>
              <a href={universities[1].link} className="flex items-center text-black hover:underline font-medium">
                View all Courses →
              </a>
            </div>
            {/* Custom Ranking Badge */}
            <div className="absolute top-0 left-4">
              <span className="relative inline-block py-2 px-6 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-700 transform rotate-45"></span>
                {universities[1].ranking}
              </span>
            </div>
          </div>

          {/* Sikkim Manipal University card - bottom right */}
          <div className="relative overflow-hidden rounded-xl h-full group">
            <div
              className="p-6 h-full flex flex-col justify-end bg-cover bg-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40"
              style={{ backgroundImage: `url(${universities[2].image})` }}
            >
              <h3 className="text-base font-bold text-black mb-1">{universities[2].name}</h3>
              <a href={universities[2].link} className="flex items-center text-black hover:underline font-medium">
                View all Courses →
              </a>
            </div>
            {/* Custom Ranking Badge */}
            <div className="absolute top-0 left-4">
              <span className="relative inline-block py-2 px-6 text-xs font-bold text-white uppercase bg-red-600 rounded-b-lg">
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-700 transform rotate-45"></span>
                {universities[2].ranking}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRankedUniversities;
