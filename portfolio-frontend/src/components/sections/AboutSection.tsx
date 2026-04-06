import React from "react";

export default function AboutSection() {
  return (
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
  );
}
