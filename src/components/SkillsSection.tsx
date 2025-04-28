
import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "Python", "TypeScript", "React", "Django", 
        "FastAPI", "Node.js", "Docker", "Kubernetes",
        "AWS", "PostgreSQL", "MongoDB", "Redis",
        "GraphQL", "REST APIs", "System Design", "CI/CD",
        "Git", "Linux", "Machine Learning", "Data Structures"
      ]
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
        
        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="text-center flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`text-lg font-medium ${
                      index % 3 === 0 ? 'text-primary' : 
                      index % 3 === 1 ? 'text-secondary' : 
                      'text-accent-foreground'
                    }`}
                  >
                    {skill}
                  </span>
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
