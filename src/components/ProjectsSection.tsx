import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'EvaloAI Assistant',
      description: 'Interview AI Agents\'s Backend API collection.',
      image: 'public//evalo.png',
      tags: ['Python', 'FastAPI', 'Langchain', 'Gemini', 'Librosa', 'GoogleSpeechRecognition'],
      githubLink: 'https://github.com/renukab01/evalo.ai-backend',
      liveLink: 'https://evaloai-backend-production.up.railway.app/docs',
    },
    {
      title: 'RAG Q&A Chatbot',
      description: 'An AI conversational bot with knowledge base.',
      image: 'public//qna.jpg',
      tags: ['Python', 'HuggingFace', 'Gemini', 'Chroma DB'],
      githubLink: 'https://github.com/renuka010/RAG-QA-Geminipro',
      liveLink: 'https://github.com/renuka010/RAG-QA-Geminipro',
    },
    {
      title: 'Mistral Telegram Bot',
      description: 'A Conversation chatbot integrated with telegram.',
      image: 'public//telegram.jpg',
      tags: ['Python', 'Pydub', 'Mistral', 'GoogleSpeechRecognition'],
      githubLink: 'https://github.com/renuka010/Mistral-Telegram-Bot',
      liveLink: 'https://github.com/renuka010/Mistral-Telegram-Bot',
    },
    {
      title: 'MindTranquil',
      description: 'A personal meditation app for meditation and tracking habits.',
      image: 'public//mind_tran.png',
      tags: ['Python', 'Django', 'DRF', 'Celery', 'RabbitMQ', 'Tailwind', 'Javascript'],
      githubLink: 'https://github.com/renuka010/MindTranquil',
      liveLink: 'https://github.com/renuka010/MindTranquil/assets/72569696/502f31d5-7010-4698-a4bd-fc3584202689',
    },
    {
      title: 'Vendor Management System',
      description: 'REST API collection of Vendor Management System.',
      image: 'public//vms.png',
      tags: ['Python', 'Django', 'DRF', 'Postgres'],
      githubLink: 'https://github.com/renuka010/vendorMS',
      liveLink: 'https://github.com/renuka010/vendorMS',
    },
    {
      title: 'Path Finding Algorithm Visualizer',
      description: 'Dijkstra\'s and Astar Algorithm Visualizer.',
      image: 'public//path.png',
      tags: ['Python', 'Pygame'],
      githubLink: 'https://github.com/renuka010/Path-Finding-Algorithm-Visualizer',
      liveLink: 'https://github.com/renuka010/Path-Finding-Algorithm-Visualizer/assets/72569696/e53f03ee-5ec2-4574-8467-d58627bb354f',
    },
    {
      title: 'Sorting Algorithm Visualizer',
      description: 'Visualizer for  Insertion Sort, Bubble Sort, Merge Sort, Quick Sort and Heap Sort.',
      image: 'public//sort.png',
      tags: ['Python', 'Pygame'],
      githubLink: 'https://github.com/renuka010/Sorting-Visualizer',
      liveLink: 'https://github.com/renuka010/Sorting-Visualizer',
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
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="h-40 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    
                    <CardContent className="p-4 flex-grow flex flex-col">
                      <h3 className="font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 min-h-[40px]">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="border-t p-4 mt-auto">
                      <div className="flex justify-between w-full">
                        <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                        <Button variant="default" size="sm" className="flex items-center gap-2" asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
