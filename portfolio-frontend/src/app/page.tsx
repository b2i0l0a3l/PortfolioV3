import dynamic from 'next/dynamic';
import { getProjects } from '@/features/projects/services/projects.service';
import { ChevronDown } from 'lucide-react';

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <div className="py-24 text-center text-white/50 animate-pulse">Loading About...</div>,
});
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="py-24 text-center text-white/50 animate-pulse">Loading Projects...</div>,
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="py-24 text-center text-white/50 animate-pulse">Loading Contact...</div>,
});
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Navigation (Mock for UX) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            Dev<span className="text-accent">Portfolio.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-24 px-6 lg:px-8 overflow-hidden">
        {/* Elite Background Effects: Tech Grid + Glowing Orbs */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-[100%] blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          <div className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-white/90 uppercase">Available for Enterprise Projects</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight mb-8 leading-[1.05]">
            <span className="block text-white">Hi, I'm Bilal.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-emerald-400 py-2">
              Architecting the Future.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
            I engineer <span className="text-white font-semibold">bulletproof .NET backends</span> and craft <span className="text-white font-semibold">stunning Next.js experiences</span>. By marrying robust Clean Architecture with breathtaking UI, I turn complex technical challenges into competitive business advantages.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-10 py-5 text-base font-bold text-white bg-accent/90 hover:bg-accent rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.35)] active:translate-y-0">
              Explore My Engineering Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white bg-transparent border-2 border-white/10 hover:bg-white/5 hover:border-white/30 rounded-full transition-all duration-300 hover:-translate-y-1 active:translate-y-0">
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white/40 hover:text-white transition-colors duration-300">
            <span className="text-xs font-semibold tracking-widest uppercase mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
      
    </div>
  );
}
