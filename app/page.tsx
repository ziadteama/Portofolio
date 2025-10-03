import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}