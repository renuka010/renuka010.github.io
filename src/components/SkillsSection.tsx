import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "Python", "Java", "FastAPI", "REST", "MCP", "LangChain", "Docker", "Streamlit", "NLTK", "Spacy",
        "Transformer Models", "Sentence Embeddings", "Fine-tuning", "OpenAI", "Gemini", "Mistral", "RAG", "Ollama",
        "AWS", "AWS Bedrock", "Google Big Query", "Google Looker Studio",
        "Redis", "Marqo", "FAISS", "Chroma DB", "Vector Databases", "PostgreSQL", "DataStructures & Algorithms"
      ]
    },
    {
      title: "Professional Skills",
      skills: ["Problem Solving", "Project Management", "Agile Methodologies", "Communication", "Mentorship"]
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
              <h3 className="text-xl font-semibold mb-6 text-center underline decoration-primary underline-offset-4">{category.title}</h3>
              <div className="text-center flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`text-lg font-medium ${
                      index % 3 === 0 ? 'text-primary' : 
                      index % 3 === 1 ? 'text-muted' : 
                      'text-secondary'
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
