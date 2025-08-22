import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import BCOMImage from "@/assets/course-bcom.jpg";

const BCOM = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <span>Home</span> / <span>All Courses</span> / <span>Bachelors Degrees</span> / <span className="text-foreground">Online BCom MUJ</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#E6E0FF' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src="/src/assets/muj_logo-removebg-preview.png" alt="MUJ" className="h-12" />
                <div className="w-px h-12 bg-border"></div>
                <Badge className="bg-success/10 text-success border-success/20">NAAC A+ Accredited</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Bachelor of Commerce
              </h1>
              <h2 className="text-xl text-muted-foreground mb-4">
                (Online BCom Degree)
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
                </div>
                <span className="text-lg font-semibold">4.6</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Boost your career prospects with an online Bachelor of Commerce (BCom) from Manipal University Jaipur (MUJ), a NAAC A+ accredited institution. This 100% online undergraduate degree program is designed to provide comprehensive knowledge in commerce and business fundamentals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={BCOMImage} 
                alt="BCom Program" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Program Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3 Years Duration</h3>
              <p className="text-muted-foreground">Complete your BCom in 3 years with flexible online learning</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commerce Experts</h3>
              <p className="text-muted-foreground">Learn from experienced commerce and finance professionals</p>
            </Card>
            
            <Card className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commerce Foundation</h3>
              <p className="text-muted-foreground">Strong foundation in accounting, finance, and business studies</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UGC Approved</h3>
              <p className="text-muted-foreground">Degree equivalent to traditional campus programs</p>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
              <p className="text-muted-foreground">Real-world business scenarios and practical applications</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-muted-foreground">Professional development and placement assistance</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Core Subject Areas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Financial Accounting",
              "Business Economics", 
              "Cost Accounting",
              "Business Law",
              "Statistics",
              "Business Communication"
            ].map((subject, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-foreground mb-2">{subject}</h3>
                <p className="text-muted-foreground text-sm">
                  Build expertise in {subject.toLowerCase()} with theoretical and practical knowledge
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Build Your Commerce Foundation
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start your career in commerce and finance with our comprehensive BCom program
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request Callback
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BCOM;