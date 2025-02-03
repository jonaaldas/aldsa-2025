import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-texture">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[rgb(var(--navy-blue))] mb-6">
        Hello, I&apos;m <span className="text-[rgb(var(--accent-color))]">[Your Name]</span>
        </h1>
        <p className="text-xl text-stone-600 mb-8">
          Passionate about crafting digital experiences that blend form and function. With a keen eye for design and a
          love for clean code, I bring ideas to life in the digital realm.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-[rgb(var(--navy-blue))] hover:text-[rgb(var(--accent-color))] transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-[rgb(var(--navy-blue))] hover:text-[rgb(var(--accent-color))] transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-[rgb(var(--navy-blue))] hover:text-[rgb(var(--accent-color))] transition-colors">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a href="#" className="text-[rgb(var(--navy-blue))] hover:text-[rgb(var(--accent-color))] transition-colors">
            <FileText size={24} />
            <span className="sr-only">CV</span>
          </a>
        </div>
        <button className="bg-[rgb(var(--navy-blue))] text-white py-2 px-6 rounded-full hover:bg-[rgb(var(--accent-color))] transition-colors">
          Explore My Work
        </button>
      </div>
    </section>
  );
}
