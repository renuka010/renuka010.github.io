
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail, Code, Calendar, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle the form submission here
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out through any of these channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Card className="p-6 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Linkedin className="text-primary" />
                </div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mt-1">Let's connect professionally</p>
                <a href="#" className="text-primary text-sm mt-2 hover:underline">View Profile</a>
              </Card>
              
              <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Github className="text-primary" />
                </div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground mt-1">Check out my code</p>
                <a href="#" className="text-primary text-sm mt-2 hover:underline">View Profile</a>
              </Card>
              
              <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Mail className="text-primary" />
                </div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground mt-1">Send me an email</p>
                <a href="mailto:hello@example.com" className="text-primary text-sm mt-2 hover:underline">hello@example.com</a>
              </Card>
              
              <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Code className="text-primary" />
                </div>
                <h3 className="font-medium">LeetCode</h3>
                <p className="text-sm text-muted-foreground mt-1">View my coding skills</p>
                <a href="#" className="text-primary text-sm mt-2 hover:underline">View Profile</a>
              </Card>
            </div>
            
            <Card className="p-6 bg-white flex space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Schedule a Meeting</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Let's have a chat about your project or potential collaboration.
                </p>
                <Button 
                  variant="outline" 
                  className="text-primary" 
                  onClick={() => document.getElementById('chatbot-trigger')?.click()}
                >
                  Schedule via Chatbot
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
