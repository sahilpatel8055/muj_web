import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Globe, Award, BookOpen, Briefcase } from "lucide-react";

const impactStats = [
  {
    icon: Users,
    number: "2.5 Lakh+",
    label: "Students Empowered",
    description: "Across various programs and disciplines"
  },
  {
    icon: Globe,
    number: "50+",
    label: "Countries",
    description: "Students from around the world"
  },
  {
    icon: BookOpen,
    number: "100+",
    label: "Programs Offered",
    description: "Undergraduate to Doctoral levels"
  },
  {
    icon: Award,
    number: "95%",
    label: "Placement Rate",
    description: "Industry-ready graduates"
  },
  {
    icon: Briefcase,
    number: "500+",
    label: "Industry Partners",
    description: "For internships and placements"
  },
  {
    icon: TrendingUp,
    number: "30%",
    label: "Salary Hike",
    description: "Average increase post-graduation"
  }
];

const OurImpact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforming Lives Through Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over the years, we've been committed to providing quality education that creates meaningful impact in students' lives and careers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border border-border/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with our world-class online education programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;