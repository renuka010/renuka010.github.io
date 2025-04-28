
import React from 'react';
import { Progress } from '@/components/ui/progress';

const SkillsSection: React.FC = () => {
  const technicalSkills = [
    { name: 'Python', level: 95 },
    { name: 'Generative AI & LLMs', level: 90 },
    { name: 'System Architecture', level: 85 },
    { name: 'Backend Development', level: 88 },
    { name: 'Data Structures & Algorithms', level: 92 },
    { name: 'SQL & Databases', level: 80 },
  ];
  
  const otherSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Financial Analysis', level: 90 },
    { name: 'Project Management', level: 82 },
    { name: 'Agile Methodologies', level: 78 },
    { name: 'Communication', level: 85 },
    { name: 'Teamwork', level: 88 },
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
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-primary pl-3">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-coffee pl-3">Professional Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-coffee" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
