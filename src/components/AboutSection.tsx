
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-4 leading-relaxed">
              I am a Python developer with a unique background that combines <span className="text-primary font-medium">6 years in banking</span> with a 
              passion for technology and problem-solving.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
              My journey from finance to code has given me a distinctive perspective on building systems that are not only 
              technically sound but also address real business needs.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
              Currently, I'm focused on <span className="text-primary font-medium">generative AI</span>, building agentic systems that push the boundaries 
              of what's possible. I have a deep interest in system architecture for AI solutions, ensuring scalability, 
              reliability, and ethical implementation.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me solving competitive programming problems, enjoying a good fictional book, 
              or savoring a cup of coffee while listening to the rain.
            </p>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <Card className="glass-card p-5 text-center">
              <CardContent className="p-0">
                <h3 className="text-4xl font-bold text-coffee mb-2">6+</h3>
                <p>Years in Banking</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-5 text-center">
              <CardContent className="p-0">
                <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                <p>Years Coding</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-5 text-center">
              <CardContent className="p-0">
                <h3 className="text-4xl font-bold text-rain mb-2">500+</h3>
                <p>Coding Problems</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-5 text-center">
              <CardContent className="p-0">
                <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
                <p>AI Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
