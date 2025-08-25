import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RankingsAccreditations from '@/components/RankingsAccreditations';
import TopRankedUniversities from '@/components/TopRankedUniversities';
import CourseGrid from '@/components/CourseGrid';
import OurImpact from '@/components/OurImpact';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import ConvocationSlider from '@/components/convocation-slider'; // Import the component

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <RankingsAccreditations />
        <TopRankedUniversities />
        <CourseGrid />
        <OurImpact />
        <WhyChooseUs />
        <ConvocationSlider /> {/* Added the component here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
