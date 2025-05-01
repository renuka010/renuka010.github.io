import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, BookOpen, Coffee, Code } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "AWS Certified Gen AI Practitioner",
      description: "Professional certification in Generative AI from Amazon Web Services"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Rising Star Award",
      description: "Recognition for exceptional performance and innovation"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "LeetCode Knight Badge",
      description: "Top 5% globally among LeetCode users"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Indeed Women Coders",
      description: "Ranked in top 50 in India among women coders"
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
              I'm a Python developer specializing in <span className="text-primary font-medium">generative AI</span> and <span className="text-primary font-medium">agentic systems</span>. 
              Throughout my career, I've worn multiple hats—managing projects, mentoring teams, 
              and diving deep into code implementation. My approach combines technical expertise 
              with a passion for understanding systems at their fundamental level.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
              My software journey began in <span className="text-primary font-medium">open source</span>, which instilled in me the values of 
              collaboration and building for community benefit. Before transitioning to tech, 
              I worked as a banker, giving me a unique perspective on how technology can transform 
              traditional industries.
            </p>
            
            <p className="text-lg mb-4 leading-relaxed">
              Currently, I'm focused on building agentic systems and 
              automations that push the boundaries of what's possible.
            </p>
            
            <p className="text-lg leading-relaxed">
              If any of this clicks with what you’re building or thinking about—
              <span className="text-primary font-medium">I'd welcome the opportunity to connect</span>.
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
