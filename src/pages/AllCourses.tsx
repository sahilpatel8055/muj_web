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
  const [activeUniversity, setActiveUniversity] = useState('All');

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

  const currentCourses = activeTab === 'UG' ? ugCourses : pgCourses;
  const displayCourses = activeUniversity === 'All' 
    ? currentCourses 
    : currentCourses.filter(course => 
        activeUniversity === 'MUJ' 
          ? course.institution.includes('Manipal University Jaipur')
          : course.institution.includes('Sikkim Manipal University')
      );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 mt-8">
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
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-4">
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
              <div className="flex justify-center gap-2">
                <Button
                  variant={activeUniversity === 'All' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveUniversity('All')}
                  className={activeUniversity === 'All' ? 'bg-gradient-primary' : ''}
                >
                  All Universities
                </Button>
                <Button
                  variant={activeUniversity === 'MUJ' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveUniversity('MUJ')}
                  className={activeUniversity === 'MUJ' ? 'bg-gradient-primary' : ''}
                >
                  MUJ
                </Button>
                <Button
                  variant={activeUniversity === 'SMU' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveUniversity('SMU')}
                  className={activeUniversity === 'SMU' ? 'bg-gradient-primary' : ''}
                >
                  SMU
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Postgraduate Programs Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Postgraduate Programs</h2>
              <Badge variant="secondary" className="text-sm">
                {pgCourses.length} Courses Available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto">
              <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                {pgCourses.slice(0, Math.ceil(pgCourses.length / 2)).map((course, index) => (
                  <div key={index} className="min-w-[320px] md:min-w-0">
                    <CourseCard
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
                  </div>
                ))}
              </div>
              <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                {pgCourses.slice(Math.ceil(pgCourses.length / 2)).map((course, index) => (
                  <div key={index + Math.ceil(pgCourses.length / 2)} className="min-w-[320px] md:min-w-0">
                    <CourseCard
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Undergraduate Programs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Undergraduate Programs</h2>
              <Badge variant="secondary" className="text-sm">
                {ugCourses.length} Courses Available
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto">
              <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                {ugCourses.slice(0, Math.ceil(ugCourses.length / 2)).map((course, index) => (
                  <div key={index} className="min-w-[320px] md:min-w-0">
                    <CourseCard
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
                  </div>
                ))}
              </div>
              <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                {ugCourses.slice(Math.ceil(ugCourses.length / 2)).map((course, index) => (
                  <div key={index + Math.ceil(ugCourses.length / 2)} className="min-w-[320px] md:min-w-0">
                    <CourseCard
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* University-wise Courses */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">University-wise Programs</h2>
            
            {/* Manipal University Jaipur */}
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <img src={mujLogo} alt="Manipal University Jaipur" className="h-12 w-auto mr-4" />
                <h3 className="text-2xl font-bold">Manipal University Jaipur</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto">
                  <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                    {pgCourses.filter(course => course.institution.includes('Manipal University Jaipur')).slice(0, 1).map((course, index) => (
                      <div key={index} className="min-w-[320px] md:min-w-0">
                        <CourseCard
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
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                    {pgCourses.filter(course => course.institution.includes('Manipal University Jaipur')).slice(1).map((course, index) => (
                      <div key={index + 1} className="min-w-[320px] md:min-w-0">
                        <CourseCard
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ugCourses.filter(course => course.institution.includes('Manipal University Jaipur')).map((course, index) => (
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
            </div>

            {/* Sikkim Manipal University */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <img src={smuLogo} alt="Sikkim Manipal University" className="h-12 w-auto mr-4" />
                <h3 className="text-2xl font-bold">Sikkim Manipal University</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Postgraduate Programs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto">
                  <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                    {pgCourses.filter(course => course.institution.includes('Sikkim Manipal University')).slice(0, 2).map((course, index) => (
                      <div key={index} className="min-w-[320px] md:min-w-0">
                        <CourseCard
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
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-6 md:grid md:grid-cols-1 md:gap-6">
                    {pgCourses.filter(course => course.institution.includes('Sikkim Manipal University')).slice(2).map((course, index) => (
                      <div key={index + 2} className="min-w-[320px] md:min-w-0">
                        <CourseCard
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">Undergraduate Programs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ugCourses.filter(course => course.institution.includes('Sikkim Manipal University')).map((course, index) => (
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllCourses;