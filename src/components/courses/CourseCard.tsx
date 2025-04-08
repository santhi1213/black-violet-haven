
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, BookOpen, Users, Star } from "lucide-react";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    instructor: {
      name: string;
      avatar: string;
    };
    price: number;
    rating: number;
    reviewCount: number;
    level: string;
    duration: string;
    students: number;
    progress?: number;
    enrolled?: boolean;
    hasDiscount?: boolean;
  };
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="glass-card overflow-hidden transition-all hover:shadow-lg hover:shadow-violet-500/20 hover:border-violet-500/40">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full aspect-video object-cover"
        />
        
        {course.level && (
          <Badge className="absolute top-3 left-3 bg-violet-500/80 hover:bg-violet-600">
            {course.level}
          </Badge>
        )}
        
        {course.hasDiscount && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3"
          >
            20% OFF
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 hover:text-violet-400">
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <div className="flex mr-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={14} 
                className={star <= Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} 
              />
            ))}
          </div>
          <span className="text-violet-300 mr-1">{course.rating.toFixed(1)}</span>
          <span>({course.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            <span>12 lessons</span>
          </div>
        </div>
        
        {course.enrolled && typeof course.progress !== 'undefined' && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span className="text-violet-400">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-1" />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
          <div className="flex items-center">
            <img 
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="h-6 w-6 rounded-full mr-2 object-cover"
            />
            <span className="text-sm">{course.instructor.name}</span>
          </div>
          <span className="font-bold">${course.price.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
