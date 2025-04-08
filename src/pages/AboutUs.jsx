
import React from "react";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="py-8 px-4 md:px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      
      <Card className="p-8 mb-8 glass-card">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="h-24 w-24 rounded-xl bg-violet-600 flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">LMS Platform</h2>
            <p className="text-gray-400">Empowering education through technology since 2020</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <p>
            Welcome to LMS Platform, where we believe that education should be accessible, engaging, 
            and effective for everyone. Our learning management system is designed to bridge the gap 
            between traditional education and the digital future, providing both learners and educators 
            with powerful tools to succeed in the 21st century.
          </p>
          
          <h3 className="text-xl font-semibold mt-8">Our Mission</h3>
          <p>
            Our mission is to transform education through technology by creating an intuitive, 
            comprehensive platform that makes learning more accessible, personalized, and impactful. 
            We're committed to helping students achieve their learning goals and enabling educators 
            to create engaging, effective courses.
          </p>
          
          <h3 className="text-xl font-semibold mt-8">Our Vision</h3>
          <p>
            We envision a world where quality education is accessible to everyone, regardless of 
            their background or location. We strive to be at the forefront of educational innovation, 
            constantly evolving our platform to meet the changing needs of learners and educators.
          </p>
        </div>
      </Card>
      
      <h2 className="text-2xl font-bold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden">
              <img src="https://i.pravatar.cc/300?img=11" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Emily Johnson</h3>
            <p className="text-violet-400 mb-2">CEO & Founder</p>
            <p className="text-sm text-gray-400">
              Former educator with 15 years of experience in EdTech solutions
            </p>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden">
              <img src="https://i.pravatar.cc/300?img=32" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Michael Chen</h3>
            <p className="text-violet-400 mb-2">CTO</p>
            <p className="text-sm text-gray-400">
              Tech innovator specializing in learning platforms and AI solutions
            </p>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden">
              <img src="https://i.pravatar.cc/300?img=20" alt="Team member" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold mb-1">Sarah Rodriguez</h3>
            <p className="text-violet-400 mb-2">Head of Content</p>
            <p className="text-sm text-gray-400">
              Curriculum expert with a passion for interactive learning materials
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
