import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, BookOpen, Coffee, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Top 50 Competitive Programmer",
      description: "Ranked in top 50 among 10,000+ participants"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "LeetCode Top 5% Coder",
      description: "Ranked in the top 5% globally among LeetCode users"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Rising Star Award",
      description: "Recognition for exceptional performance and innovation"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "AWS Certified Solutions Architect",
      description: "Professional certification for cloud architecture"
    }
  ];

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
          
          <div className="order-1 md:order-2 space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card transition-transform hover:scale-105">
                <CardContent className="p-6 flex items-center gap-4">
                  {achievement.icon}
                  <div>
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
