
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Agentic AI Assistant',
      description: 'An autonomous AI system that can plan, reason, and execute tasks without human intervention.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'LangChain', 'OpenAI', 'Vector DBs'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Financial Data Analyzer',
      description: 'A tool that leverages my banking experience to provide intelligent financial insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Pandas', 'Plotly', 'Flask'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'Competitive Coding Platform',
      description: 'A platform to practice algorithmic problems with automated testing and performance analysis.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'FastAPI', 'React', 'Docker'],
      githubLink: '#',
      liveLink: '#',
    },
    {
      title: 'AI System Architecture',
      description: 'Reference implementation for scalable, production-ready AI systems with proper monitoring.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Kubernetes', 'Prometheus', 'MLflow'],
      githubLink: '#',
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30 relative">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my projects that showcase my skills in Python development, AI, and system architecture.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-background/50">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="border-t p-4">
                <div className="flex justify-between w-full">
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.githubLink}>
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.liveLink}>
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
