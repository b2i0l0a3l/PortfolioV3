import { getProjects } from '@/features/projects/services/projects.service';
import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { ExternalLink, Mail, ChevronDown } from 'lucide-react';

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

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-black/40 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I am Bilal, a passionate Full-Stack Developer with a deep love for creating robust, efficient, and scalable technological solutions. My core expertise lies in building high-performance .NET backends using Clean Architecture and coupling them with highly interactive Next.js frontends.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My tech stack heavily relies on C#, T-SQL, and PostgreSQL to ensure scalable data management, alongside crafting modern user experiences in React and Next.js.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="text-4xl font-bold text-accent mb-2">2.5+</h3>
              <p className="text-white/60 font-medium tracking-wide">Years Experience</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="text-4xl font-bold text-accent mb-2">5+</h3>
              <p className="text-white/60 font-medium tracking-wide">Projects Completed</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="text-4xl font-bold text-accent mb-2">Client</h3>
              <p className="text-white/60 font-medium tracking-wide">Satisfaction First</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-2xl">
              <h3 className="text-4xl font-bold text-accent mb-2">Modern</h3>
              <p className="text-white/60 font-medium tracking-wide">Tech Stack Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-white/50 max-w-md text-lg text-center md:text-right">
              A collection of my recent projects highlighting my expertise in modern web development and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shrink-0">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} />
            ))}
          </div>

          {projects.length === 0 && (
             <div className="text-center text-white/50 py-24 bg-card border border-border rounded-3xl">
               <span className="block text-2xl mb-2">🚧</span>
               More projects coming soon.
             </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-black/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Work Together</h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
            Currently open for new opportunities and freelance projects. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:belamraoui21@gmail.com" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-black bg-white hover:bg-white/90 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            <Mail size={20} />
            Say Hello
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 lg:px-8 text-center text-white/40 text-sm bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} Professional Portfolio. Designed with purpose.</p>
          <div className="flex items-center gap-6">
             <a href="https://github.com/b2i0l0a3l" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
               <span className="sr-only">GitHub</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
             </a>
             <a href="#" className="hover:text-white transition-colors">
               <span className="sr-only">LinkedIn</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
