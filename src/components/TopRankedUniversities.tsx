import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, BookOpen, Award } from "lucide-react";

const universities = [
  {
    id: 1,
    name: "Manipal University Jaipur",
    ranking: "#1 Private University",
    accreditation: "NAAC A+ Grade",
    students: "25,000+",
    courses: "100+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=300&fit=crop&crop=center",
    features: ["UGC Entitled", "AICTE Approved", "Industry Aligned Curriculum"]
  },
  {
    id: 2,
    name: "Sikkim Manipal University",
    ranking: "#2 Distance Education",
    accreditation: "UGC-DEB Approved",
    students: "50,000+",
    courses: "80+",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=400&h=300&fit=crop&crop=center",
    features: ["WES Recognized", "Global Recognition", "Flexible Learning"]
  }
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
          {universities.map((university) => (
            <Card key={university.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {university.ranking}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{university.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{university.rating}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="mb-4">
                  {university.accreditation}
                </Badge>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{university.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{university.courses} Courses</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {university.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-success" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Programs
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRankedUniversities;