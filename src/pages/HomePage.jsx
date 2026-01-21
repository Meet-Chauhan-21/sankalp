import Hero from '../components/Hero';
import WhatIsNaamJaap from '../components/WhatIsNaamJaap';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import WhyDigital from '../components/WhyDigital';
import Quote from '../components/Quote';
import About from '../components/About';
import CTA from '../components/CTA';

const HomePage = () => {
    return (
        <>
            <Hero />
            <WhatIsNaamJaap />
            <Benefits />
            <HowItWorks />
            <WhyDigital />
            <Quote />
            <About />
            <CTA />
        </>
    );
};

export default HomePage;
