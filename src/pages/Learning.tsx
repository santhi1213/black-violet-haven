
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Search, BookOpen, User, CheckCircle2, Filter } from "lucide-react";
import { mockCourses } from "@/lib/mock-data";

interface EnrolledCourse {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: {
    name: string;
  };
  duration: string;
  progress: number;
  category?: string;
  level?: string;
  enrolled?: boolean;
  completed?: boolean;
}

const Learning = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("in-progress");
  
  // Filter enrolled courses
  const enrolledCourses = mockCourses.filter(course => course.enrolled) as EnrolledCourse[];
  
  // Filter based on tab selection
  const filteredCourses = enrolledCourses.filter(course => {
    if (activeTab === "completed") return course.completed;
    if (activeTab === "in-progress") return !course.completed;
    return true; // All courses tab
  });
  
  // Further filter based on search term
  const displayCourses = filteredCourses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Learning</h1>
            <p className="text-gray-400">Track your progress and continue learning</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search your courses..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Courses</TabsTrigger>
          </TabsList>
        </Tabs>
        
        {displayCourses.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {displayCourses.map((course) => (
              <Card key={course.id} className="glass-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 h-48 md:h-auto">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold mb-2 md:mb-0">{course.title}</h3>
                      <div className="flex items-center gap-2">
                        {course.completed ? (
                          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs flex items-center">
                            <CheckCircle2 size={14} className="mr-1" />
                            Completed
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded-full text-xs">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <Clock size={14} className="mr-1" />
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <BookOpen size={14} className="mr-1" />
                      <span>12 lessons</span>
                      <span className="mx-2">•</span>
                      <User size={14} className="mr-1" />
                      <span>{course.instructor.name}</span>
                    </div>
                    
                    {!course.completed && (
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="text-violet-400">{course.progress}% complete</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="default" 
                        className="primary-button"
                        onClick={() => window.location.href = `/course/${course.id}`}
                      >
                        {course.completed ? "Review Course" : "Continue Learning"}
                      </Button>
                      
                      {course.completed && (
                        <Button 
                          variant="outline"
                          className="secondary-button"
                        >
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="glass-card p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <BookOpen className="h-12 w-12 text-gray-400" />
              <h3 className="text-xl font-semibold">No courses found</h3>
              <p className="text-gray-400 mb-4">
                {searchTerm ? "Try searching with different keywords" : "You haven't enrolled in any courses yet"}
              </p>
              <Button 
                variant="default" 
                className="primary-button"
                onClick={() => window.location.href = "/courses"}
              >
                Browse Courses
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Learning;
