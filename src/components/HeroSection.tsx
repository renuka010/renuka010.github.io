import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 pb-10 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Rain drops animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="rain-drop animate-rain-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-container grid md:grid-cols-2 gap-8 items-center">
        <div className="relative order-1 mt-16">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/Profile.jpg"
              alt="Profile Photo" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center space-y-6 animate-fade-in order-2">
          <h2 className="text-lg font-medium text-rain"></h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block font-quicksand">Hi! I am Renuka</span>
            <span className="text-primary">Python Developer</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-md">
            I craft intelligent applications with clean, maintainable code.
            Exploring AI, automation, and scalable backend systems.
          </p>
          
          <div className="flex space-x-4 pt-2">
            <Button asChild variant="default" size="lg" className="rounded-full">
              <a href="#contact">Let's Talk</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-4 pt-2">
            <a href="https://github.com/renuka010" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/renuka-bhaskaran-451680227/" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <button 
              onClick={() => window.open('mailto:renuka.1.bhaskaran@gmail.com')}
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail />
            </button>
            <a href="https://leetcode.com/u/Renuka_B/" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LeetCode" target="_blank" rel="noopener noreferrer">
              <Code />
            </a>
          </div>
        </div>
      </div>
      
      {/* Coffee cup decoration */}
      <div className="absolute bottom-10 left-10 opacity-10 hidden md:block">
        <div className="w-16 h-16 rounded-full border-2 border-coffee"></div>
      </div>
    </section>
  );
};

export default HeroSection;
