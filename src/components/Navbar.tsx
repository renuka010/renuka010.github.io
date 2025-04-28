
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-container flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary">
          Code<span className="text-coffee">Coffee</span><span className="text-rain">Rain</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button 
          variant="outline" 
          size="sm"
          className="md:hidden"
          onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
        >
          Menu
        </Button>
      </div>
      
      <div id="mobile-menu" className="hidden md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-3">
        <ul className="flex flex-col items-center space-y-3">
          {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
            <li key={item} className="w-full">
              <a 
                href={`#${item.toLowerCase()}`} 
                className="block w-full text-center py-2 text-foreground/70 hover:text-primary hover:bg-secondary/50 transition-colors"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
