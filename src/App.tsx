/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Trust from './components/Trust';
import ApiSection from './components/ApiSection';
import Pricing from './components/Pricing';
import About from './components/About';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#0066FF]/30">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <Trust />
        <ApiSection />
        <Pricing />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
