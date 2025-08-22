import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CourseGrid from '@/components/CourseGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CourseGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
