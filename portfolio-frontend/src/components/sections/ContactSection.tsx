import React from "react";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
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
  );
}
