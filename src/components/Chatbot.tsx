import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Bot, Send, Calendar, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi! Want to schedule a meeting with Renuka?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    return;
  }, []);
  
  const addMessage = (text: string, sender: 'user' | 'bot') => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: 'user' as const };
    setMessages((prev) => [...prev, userMessage]);
    
    setInput('');
    
    setTimeout(() => {
      let botResponse;
      
      const lowerInput = input.toLowerCase();
      if (
        lowerInput.includes('meeting') || 
        lowerInput.includes('schedule') || 
        lowerInput.includes('book') ||
        lowerInput.includes('calendar') ||
        lowerInput.includes('meet') ||
        lowerInput.includes('set up a call') 
      ) {
        botResponse = { 
          text: "Great! I can help you schedule a meeting. When would you like to set up?", 
          sender: 'bot' as const 
        };
        setShowBooking(true);
      } else if (
        lowerInput.includes('who are you')
      ) {
        botResponse = { 
          text: "I'm the virtual assistant for Renuka's Space. I can help you schedule a meeting.", 
          sender: 'bot' as const 
        };
        setShowBooking(false);
      } else if (
        lowerInput.includes('what you do') ||
        lowerInput.includes('what you can do') ||
        lowerInput.includes('what you can help')
      ) {
        botResponse = { 
          text: "I can help you schedule a meeting with Renuka.", 
          sender: 'bot' as const 
        };
        setShowBooking(false);
      } else if (
        lowerInput.includes('contact') ||
        lowerInput.includes('reach') ||
        lowerInput.includes('email') ||
        lowerInput.includes('phone')
      ) {
        botResponse = { 
          text: "You can reach Renuka via email at renuka.1.bhaskaran@gmail.com or through LinkedIn. Would you like to schedule a meeting?", 
          sender: 'bot' as const 
        };
        setShowBooking(false);
      } else if (
        lowerInput.includes('hi') ||
        lowerInput.includes('hello') ||
        lowerInput.includes('hey')
      ) {
        botResponse = { 
          text: "Hello! I'm the virtual assistant for Renuka's Space. I can help you schedule a meeting.", 
          sender: 'bot' as const 
        };
        setShowBooking(false);
      } else {
        botResponse = { 
          text: "I'm sorry, I didn't quite understand that.", 
          sender: 'bot' as const 
        };
        setShowBooking(false);
      }
      
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    if (time !== 'Custom Date') {
      setSelectedDate(undefined);
    }
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
      setSelectedTime(`Custom Date: ${format(date, 'PPP')}`);
    }
  };

  const handleBookMeeting = async () => {
    if (!selectedTime || !bookingEmail) {
      toast({
        title: "Please select a time and enter your email",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('email', bookingEmail);
      formData.append('meeting_time', selectedTime);
      formData.append('subject', 'Meeting Request');
      formData.append('message', `New meeting request for ${selectedTime}`);

      const response = await fetch('https://formspree.io/f/xovdjoog', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Meeting request sent!",
          description: "I'll get back to you soon to confirm the meeting.",
        });
        setShowBooking(false);
        setSelectedTime('');
        setSelectedDate(undefined);
        setBookingEmail('');
        addMessage("I've sent your meeting request. I'll get back to you soon to confirm the time!", 'bot');
      } else {
        throw new Error('Failed to send meeting request');
      }
    } catch (error) {
      toast({
        title: "Error sending request",
        description: "Please try again or contact me through email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        id="chatbot-trigger"
        className="fixed bottom-5 right-5 h-14 w-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-50"
        onClick={() => setIsOpen(true)}
      >
        <Bot className="text-white h-6 w-6" />
      </button>
      
      {isOpen && (
        <Card className="fixed bottom-5 right-5 w-80 sm:w-96 h-[500px] shadow-lg z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Renuka's Assistant</h3>
                <p className="text-xs text-muted-foreground">Schedule a meeting with Renuka</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white self-end rounded-br-none' 
                    : 'bg-accent text-foreground self-start rounded-bl-none'
                }`}
              >
                {message.text}
              </div>
            ))}
            
            {showBooking && (
              <div className="bg-white p-4 rounded-lg border mt-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book a Meeting
                </h4>
                <p className="text-sm text-muted-foreground my-2">
                  Select a time to schedule a chat with me.
                </p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="mb-3"
                  value={bookingEmail}
                  onChange={(e) => setBookingEmail(e.target.value)}
                  required
                />
                <div className="grid grid-cols-2 gap-2 my-3">
                  <Button 
                    variant={selectedTime === 'Tomorrow' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleTimeSelection('Tomorrow')}
                  >
                    Tomorrow
                  </Button>
                  <Button 
                    variant={selectedTime === 'This Week' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleTimeSelection('This Week')}
                  >
                    This Week
                  </Button>
                  <Button 
                    variant={selectedTime === 'Next Week' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleTimeSelection('Next Week')}
                  >
                    Next Week
                  </Button>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button 
                        variant={selectedDate ? "default" : "outline"} 
                        size="sm"
                        className="w-full"
                      >
                        {selectedDate ? format(selectedDate, 'PPP') : 'Custom Date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                        disabled={{ before: new Date() }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Button 
                  className="w-full" 
                  onClick={handleBookMeeting}
                  disabled={isSubmitting || !selectedTime || !bookingEmail}
                >
                  {isSubmitting ? 'Sending Request...' : 'Request Meeting'}
                </Button>
              </div>
            )}
          </div>
          
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
