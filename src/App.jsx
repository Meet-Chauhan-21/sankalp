import Hero from './components/Hero';
import WhatIsNaamJaap from './components/WhatIsNaamJaap';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import WhyDigital from './components/WhyDigital';
import Quote from './components/Quote';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-brand-accent selection:bg-saffron-200 selection:text-saffron-900 overflow-x-hidden">
      <Hero />
      <WhatIsNaamJaap />
      <Benefits />
      <HowItWorks />
      <WhyDigital />
      <Quote />
      <About />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
