
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-10">
      <div className="max-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Code<span className="text-coffee">Coffee</span><span className="text-rain">Rain</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Python Developer | GenAI Specialist | System Architect
            </p>
          </div>
          
          <div className="flex space-x-6">
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
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} CodeCoffeeRain. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
