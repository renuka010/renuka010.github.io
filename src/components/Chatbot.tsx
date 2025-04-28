
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Calendar, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi there! I'm the virtual assistant for CodeCoffeeRain. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = { text: input, sender: 'user' as const };
    setMessages((prev) => [...prev, userMessage]);
    
    // Reset input
    setInput('');
    
    // Process the message and prepare a response
    setTimeout(() => {
      let botResponse;
      
      const lowerInput = input.toLowerCase();
      if (
        lowerInput.includes('meeting') || 
        lowerInput.includes('schedule') || 
        lowerInput.includes('book') ||
        lowerInput.includes('calendar')
      ) {
        botResponse = { 
          text: "Great! I can help you schedule a meeting. When would you like to meet?", 
          sender: 'bot' as const 
        };
        setShowBooking(true);
      } else if (
        lowerInput.includes('hi') ||
        lowerInput.includes('hello') ||
        lowerInput.includes('hey')
      ) {
        botResponse = { 
          text: "Hello! I'm the virtual assistant for CodeCoffeeRain. I can tell you about my skills, experience, or help you schedule a meeting.", 
          sender: 'bot' as const 
        };
      } else if (
        lowerInput.includes('skill') ||
        lowerInput.includes('experience') ||
        lowerInput.includes('background')
      ) {
        botResponse = { 
          text: "I'm a Python developer with 3+ years of coding experience and a background in banking (6 years). I specialize in generative AI, building agentic systems, and system architecture for AI solutions.", 
          sender: 'bot' as const 
        };
      } else if (
        lowerInput.includes('contact') ||
        lowerInput.includes('reach') ||
        lowerInput.includes('email')
      ) {
        botResponse = { 
          text: "You can reach me via email at hello@example.com or through LinkedIn. Would you like to schedule a meeting?", 
          sender: 'bot' as const 
        };
      } else {
        botResponse = { 
          text: "I'm sorry, I didn't quite understand that. I can tell you about my skills, experience, or help you schedule a meeting.", 
          sender: 'bot' as const 
        };
      }
      
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleBookMeeting = () => {
    // In a real app, this would open a calendar integration
    toast({
      title: "Meeting Request Sent",
      description: "Thanks for your interest! I'll get back to you soon to confirm the meeting time.",
    });
    
    // Add confirmation message to chat
    setMessages((prev) => [
      ...prev, 
      { 
        text: "Great! I've sent your meeting request. We'll confirm the details soon.", 
        sender: 'bot' 
      }
    ]);
    
    // Hide booking interface
    setShowBooking(false);
  };

  return (
    <>
      {/* Chatbot trigger button */}
      <button
        id="chatbot-trigger"
        className="fixed bottom-5 right-5 h-14 w-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="text-white" />
      </button>
      
      {/* Chatbot window */}
      {isOpen && (
        <Card className="fixed bottom-5 right-5 w-80 sm:w-96 h-[500px] shadow-lg z-50 flex flex-col">
          {/* Chatbot header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">CodeCoffeeRain Assistant</h3>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Chatbot messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white self-end rounded-br-none' 
                    : 'bg-secondary self-start rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            ))}
            
            {/* Meeting booking interface */}
            {showBooking && (
              <div className="bg-white p-4 rounded-lg border mt-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Meeting
                </h4>
                <p className="text-sm text-muted-foreground my-2">
                  Select a time to schedule a chat with me.
                </p>
                <div className="grid grid-cols-2 gap-2 my-3">
                  <Button variant="outline" size="sm">Tomorrow</Button>
                  <Button variant="outline" size="sm">This Week</Button>
                  <Button variant="outline" size="sm">Next Week</Button>
                  <Button variant="outline" size="sm">Custom Date</Button>
                </div>
                <Button className="w-full" onClick={handleBookMeeting}>
                  Request Meeting
                </Button>
              </div>
            )}
          </div>
          
          {/* Chatbot input */}
          <div className="p-3 border-t flex gap-2">
            <Input 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
