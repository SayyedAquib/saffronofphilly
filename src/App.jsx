import PopularItems from './components/PopularItems';
import OrderSection from './components/OrderSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Rewards from './components/Rewards';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PopularItems />
      <OrderSection />
      <Testimonials />
      <Features />
      <Rewards />
      <Founder />
      <FAQ />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;