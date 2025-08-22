import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import courseMBA from '@/assets/course-mba.jpg';
import courseMCA from '@/assets/course-mca.jpg';
import courseBBA from '@/assets/course-bba.jpg';
import courseBCA from '@/assets/course-bca.jpg';
import courseBCom from '@/assets/course-bcom.jpg';

const CourseGrid = () => {
  const courses = [
    {
      id: 1,
      title: 'Online MBA',
      description: 'Master of Business Administration',
      image: courseMBA,
      duration: '2 Years',
      students: '15,000+',
      rating: '4.8',
      popular: true,
      href: '/mba'
    },
    {
      id: 2,
      title: 'Online MCA',
      description: 'Master of Computer Applications',
      image: courseMCA,
      duration: '2 Years',
      students: '8,000+',
      rating: '4.7',
      popular: false,
      href: '/mca'
    },
    {
      id: 3,
      title: 'Online BBA',
      description: 'Bachelor of Business Administration',
      image: courseBBA,
      duration: '3 Years',
      students: '12,000+',
      rating: '4.6',
      popular: true,
      href: '/bba'
    },
    {
      id: 4,
      title: 'Online BCA',
      description: 'Bachelor of Computer Applications',
      image: courseBCA,
      duration: '3 Years',
      students: '10,000+',
      rating: '4.5',
      popular: false,
      href: '/bca'
    },
    {
      id: 5,
      title: 'Online BCom',
      description: 'Bachelor of Commerce',
      image: courseBCom,
      duration: '3 Years',
      students: '18,000+',
      rating: '4.7',
      popular: true,
      href: '/bcom'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Online Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of UGC-approved online degree programs 
            designed to accelerate your career growth.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course) => (
            <a href={course.href} key={course.id}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {course.popular && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2">
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-smooth font-medium"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;