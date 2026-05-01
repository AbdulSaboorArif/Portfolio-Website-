import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import AILab from '@/components/sections/AILab';
import Work from '@/components/sections/Work';
import Journey from '@/components/sections/Journey';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AILab />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
