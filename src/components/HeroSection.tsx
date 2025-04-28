import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-20 pb-10 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Rain drops animation (subtle background effect) */}
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
        <div className="flex flex-col justify-center space-y-6 animate-fade-in">
          <h2 className="text-lg font-medium text-rain">Hello, I am</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="block">Full Stack</span>
            <span className="text-primary">Python Developer</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-md">
            From banking to building agentic systems. I blend the analytical mindset of finance 
            with the creativity of coding to solve complex problems.
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
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
              <Github />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Email">
              <Mail />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LeetCode">
              <Code />
            </a>
          </div>
        </div>
        
        <div className="relative order-first md:order-last flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
              alt="Profile Photo" 
              className="w-full h-full object-cover"
            />
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
