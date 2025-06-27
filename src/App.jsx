import PopularItems from './components/PopularItems';
import OrderSection from './components/OrderSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Locations from './components/Locations';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Carousel from './components/Carousel';
import Banner from './components/Banner';

function App() {

  const OrderSectionData = {
    title: "Order From Our Website",
    para: "Order directly from our website to save money in fees, get faster service, earn free food via our rewards program, and support local business.",
    button: "Order Now →",
  };

  const Kitchen = {
    title: "Saffron Indian Kitchen Rewards",
    para: "Join our rewards program to earn points, get free items, and stay up to date with us.",
    button: "Profile →",
  };

  const BannerData = {
    title: "Saffron focuses on the art of blending spices",
    description:
      "Saffron is a Philly-based Indian Kitchen. Our chefs have truly mastered the art of blending spices. Whether you desire traditional Indian cuisine or the 'nouveau' style that is increasingly popular amongst our clients, you can be sure that two things will never change – the excellence of our food and the standard of our service.",
    image:
      "https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1920&q=80&auto=format",
    alt: "Indian dishes",
  }

  const FounderData = {
    title: "Founded by Chef Rahul Bhatia",
    description:
      "Rahul founded Saffron after decades of working in top restaurants across India and the United States, to bring the incredible experiences of Indian hospitality to his Philadelphia community.",
    image:
      "https://static-content.owner.com/brands/funnel/about-section-images/C4G7Wq3U9NCGB9ZH6LC7LoxcC3H5jPaN/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4590866032&w=640&q=80&auto=format",
    alt: "Chef Rahul Bhatia",
  };

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PopularItems />
      <Carousel />
      <OrderSection {...OrderSectionData} />
      <Testimonials />
      <Features />
      <Banner {...BannerData} />
      <OrderSection {...Kitchen} />
      <Banner {...FounderData} />
      <FAQ />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;