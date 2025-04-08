
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users } from "lucide-react";

interface InstructorCardProps {
  instructor: {
    id?: string;
    name: string;
    avatar: string;
    title?: string;
    bio?: string;
    rating?: number;
    reviewCount?: number;
    courses?: number;
    students?: number;
  };
}

const InstructorCard = ({ instructor }: InstructorCardProps) => {
  return (
    <Card className="glass-card p-6">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24 border-2 border-violet-600">
            <AvatarImage
              src={instructor.avatar}
              alt={instructor.name}
              className="object-cover"
            />
            <AvatarFallback>
              {instructor.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="mt-4 text-center sm:hidden">
            <h3 className="font-semibold text-lg">{instructor.name}</h3>
            <p className="text-gray-400 text-sm">{instructor.title || "Course Instructor"}</p>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="hidden sm:block">
            <h3 className="font-semibold text-lg">{instructor.name}</h3>
            <p className="text-violet-400 text-sm mb-2">{instructor.title || "Course Instructor"}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-sm">
              <Users className="mr-1 h-4 w-4 text-gray-400" />
              <span>{instructor.students || "10,000"}+ students</span>
            </div>
            <div className="flex items-center text-sm">
              <MessageSquare className="mr-1 h-4 w-4 text-gray-400" />
              <span>{instructor.courses || "15"} courses</span>
            </div>
            
            <Badge variant="outline" className="text-yellow-500 border-yellow-500/30 bg-yellow-500/10">
              Top Instructor
            </Badge>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">
            {instructor.bio ||
              `Experienced instructor with a passion for teaching. Specializing in creating
               comprehensive and engaging courses that help students achieve their learning goals.`}
          </p>
          
          <div className="flex gap-3">
            <Button variant="outline" className="secondary-button text-sm">
              View Profile
            </Button>
            <Button variant="ghost" className="text-sm">
              <MessageSquare className="mr-1 h-4 w-4" /> Contact
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;
