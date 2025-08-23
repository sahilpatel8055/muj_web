import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import course images
import courseMBA from '@/assets/course-mba.jpg';
import courseMCA from '@/assets/course-mca.jpg';
import courseBBA from '@/assets/course-bba.jpg';
import courseBCA from '@/assets/course-bca.jpg';
import courseBCOM from '@/assets/course-bcom.jpg';

// Import logos
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import smuLogo from '@/assets/smulogo.jpg';

const AllCourses = () => {
  const [activeTab, setActiveTab] = useState('UG');

  const ugCourses = [
    {
      title: 'Bachelor of Business Administration',
      institution: 'Manipal University Jaipur',
      duration: '3 Years',
      rating: 4.9,
      students: '5000+',
      imageUrl: courseBBA,
      institutionLogo: mujLogo,
      institutionBadgeColor: 'bg-blue-600',
      href: '/bba'
    },
    {
      title: 'Bachelor of Computer Applications',
      institution: 'Manipal University Jaipur',
      duration: '3 Years',
      rating: 4.8,
      students: '4500+',
      imageUrl: courseBCA,
      institutionLogo: mujLogo,
      institutionBadgeColor: 'bg-blue-600',
      href: '/bca'
    },
    {
      title: 'Bachelor of Commerce',
      institution: 'Manipal University Jaipur',
      duration: '3 Years',
      rating: 4.7,
      students: '6000+',
      imageUrl: courseBCOM,
      institutionLogo: mujLogo,
      institutionBadgeColor: 'bg-blue-600',
      href: '/bcom'
    },
    {
      title: 'Bachelor of Arts',
      institution: 'Sikkim Manipal University',
      duration: '3 Years',
      rating: 4.6,
      students: '3000+',
      imageUrl: courseBBA,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/ba-smu'
    },
    {
      title: 'Bachelor of Commerce',
      institution: 'Sikkim Manipal University',
      duration: '3 Years',
      rating: 4.5,
      students: '2500+',
      imageUrl: courseBCOM,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/bcom-smu'
    }
  ];

  const pgCourses = [
    {
      title: 'Master of Business Administration',
      institution: 'Manipal University Jaipur',
      duration: '2 Years',
      rating: 4.9,
      students: '8000+',
      imageUrl: courseMBA,
      institutionLogo: mujLogo,
      institutionBadgeColor: 'bg-blue-600',
      href: '/mba'
    },
    {
      title: 'Master of Computer Applications',
      institution: 'Manipal University Jaipur',
      duration: '2 Years',
      rating: 4.8,
      students: '3500+',
      imageUrl: courseMCA,
      institutionLogo: mujLogo,
      institutionBadgeColor: 'bg-blue-600',
      href: '/mca'
    },
    {
      title: 'Master of Business Administration',
      institution: 'Sikkim Manipal University',
      duration: '2 Years',
      rating: 4.5,
      students: '4000+',
      imageUrl: courseMBA,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/mba-smu'
    },
    {
      title: 'Master of Computer Applications',
      institution: 'Sikkim Manipal University',
      duration: '2 Years',
      rating: 4.4,
      students: '2000+',
      imageUrl: courseMCA,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/mca-smu'
    },
    {
      title: 'Master of Arts',
      institution: 'Sikkim Manipal University',
      duration: '2 Years',
      rating: 4.3,
      students: '1500+',
      imageUrl: courseBBA,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/ma-smu'
    },
    {
      title: 'Master of Commerce',
      institution: 'Sikkim Manipal University',
      duration: '2 Years',
      rating: 4.2,
      students: '1200+',
      imageUrl: courseBCOM,
      institutionLogo: smuLogo,
      institutionBadgeColor: 'bg-green-600',
      href: '/mcom-smu'
    }
  ];

  const displayCourses = activeTab === 'UG' ? ugCourses : pgCourses;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Online Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of online degree programs from top Manipal Universities
            </p>
          </div>
        </section>

        {/* Course Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4">
              <Button
                variant={activeTab === 'UG' ? 'default' : 'outline'}
                onClick={() => setActiveTab('UG')}
                className={activeTab === 'UG' ? 'bg-gradient-primary' : ''}
              >
                Undergraduate (UG)
              </Button>
              <Button
                variant={activeTab === 'PG' ? 'default' : 'outline'}
                onClick={() => setActiveTab('PG')}
                className={activeTab === 'PG' ? 'bg-gradient-primary' : ''}
              >
                Postgraduate (PG)
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {activeTab === 'UG' ? 'Undergraduate' : 'Postgraduate'} Programs
              </h2>
              <Badge variant="secondary" className="text-sm">
                {displayCourses.length} Courses Available
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  title={course.title}
                  institution={course.institution}
                  duration={course.duration}
                  rating={course.rating}
                  students={course.students}
                  imageUrl={course.imageUrl}
                  institutionLogo={course.institutionLogo}
                  institutionBadgeColor={course.institutionBadgeColor}
                  href={course.href}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllCourses;