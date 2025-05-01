import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { Github, Linkedin, Mail, Code, Calendar, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/xovdjoog', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me through other means.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <Input type="email" name="_replyto" placeholder="Your Email" required />
                </div>
                <div>
                  <Input name="subject" placeholder="Subject" required />
                </div>
                <div>
                  <Textarea name="message" placeholder="Your Message" rows={5} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
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
        <div className="flex justify-center gap-8 mt-6">
          <a 
            href="https://github.com/renuka010" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-zinc-200 transition-colors group"
          >
            <Github className="h-10 w-10 text-zinc-700 group-hover:text-zinc-900 transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/renuka-bhaskaran-451680227/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors group"
          >
            <Linkedin className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors" />
          </a>
          <a 
            href="mailto:renuka.1.bhaskaran@gmail.com"
            className="h-16 w-16 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors group"
          >
            <Mail className="h-10 w-10 text-red-600 group-hover:text-red-700 transition-colors" />
          </a>
          <a 
            href="https://leetcode.com/u/Renuka_B/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-16 w-16 rounded-full bg-orange-50 flex items-center justify-center hover:bg-orange-100 transition-colors group"
          >
            <Code className="h-10 w-10 text-orange-600 group-hover:text-orange-700 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
