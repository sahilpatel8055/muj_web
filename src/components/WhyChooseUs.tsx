import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Award, BookOpen, Headphones, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry-Aligned Curriculum",
    description: "Programs designed with industry experts to meet current market demands and future trends"
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced professors and industry professionals with years of expertise"
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to course materials and recorded lectures"
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Degrees recognized worldwide with international accreditations and partnerships"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Personal academic advisors and round-the-clock technical support for all students"
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Hands-on projects, case studies, and real-world applications in every program"
  },
  {
    icon: TrendingUp,
    title: "Career Services",
    description: "Comprehensive placement assistance with resume building and interview preparation"
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Regular assessments and feedback mechanisms to ensure high educational standards"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Students Choose Manipal for Online Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience excellence in online education with our unique blend of academic rigor, industry relevance, and student-centric approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-card border border-border/50 group">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with our comprehensive online programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✓ No Hidden Fees
            </Badge>
            <Badge className="px-4 py-2 bg-success/10 text-success border-success/20">
              ✓ EMI Options Available
            </Badge>
            <Badge className="px-4 py-2 bg-accent/10 text-accent-foreground border-accent/20">
              ✓ Lifetime Career Support
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;