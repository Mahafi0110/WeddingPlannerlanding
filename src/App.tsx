import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedWeddings from '@/components/FeaturedWeddings';
import Gallery from '@/components/Gallery';
import VideoStories from '@/components/VideoStories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-800 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedWeddings />
        <Gallery />
        <VideoStories />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
