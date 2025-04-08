
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent",
      description: "We've received your message and will respond shortly.",
    });
  };
  
  return (
    <div className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-violet-500/20 p-4 rounded-full">
              <Mail className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="font-medium">Email</h3>
            <a href="mailto:support@lmsplatform.com" className="text-violet-400 hover:underline">
              support@lmsplatform.com
            </a>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-violet-500/20 p-4 rounded-full">
              <Phone className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="font-medium">Phone</h3>
            <a href="tel:+1-800-123-4567" className="text-violet-400 hover:underline">
              +1 (800) 123-4567
            </a>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="bg-violet-500/20 p-4 rounded-full">
              <MapPin className="h-6 w-6 text-violet-400" />
            </div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-400">
              123 Education Lane<br />
              San Francisco, CA 94105
            </p>
          </div>
        </Card>
      </div>
      
      <Card className="p-8 glass-card">
        <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter subject" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Type your message here..." 
              className="min-h-[150px] resize-y"
            />
          </div>
          
          <Button type="submit" className="flex gap-2">
            <Send className="h-4 w-4" /> Send Message
          </Button>
        </form>
      </Card>
      
      <div className="mt-10">
        <Card className="p-4 glass-card">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">How quickly can I expect a response?</h3>
              <p className="text-gray-400 text-sm mt-1">
                We typically respond to all inquiries within 24-48 business hours.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">Do you offer bulk discounts for institutions?</h3>
              <p className="text-gray-400 text-sm mt-1">
                Yes, we offer special pricing for educational institutions and organizations. 
                Please contact our sales team for more information.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium">How do I report a technical issue?</h3>
              <p className="text-gray-400 text-sm mt-1">
                You can report technical issues through the form above or by emailing 
                support@lmsplatform.com with details of the problem you're experiencing.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
