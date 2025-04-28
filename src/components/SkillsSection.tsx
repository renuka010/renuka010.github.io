
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Python", "Generative AI & LLMs", "System Architecture", "Backend Development", "Data Structures & Algorithms", "SQL & Databases"]
    },
    {
      title: "Professional Skills",
      skills: ["Problem Solving", "Financial Analysis", "Project Management", "Agile Methodologies", "Communication", "Teamwork"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white relative">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My diverse skill set spans technical expertise and professional competencies, shaped by my unique journey from banking to software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="hover:shadow-md transition-all hover:scale-105">
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{skill}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
