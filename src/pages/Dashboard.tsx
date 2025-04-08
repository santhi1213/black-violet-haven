
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, BookOpen, Award, ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { mockCourses } from "@/lib/mock-data";

const performanceData = [
  { name: "Week 1", score: 65 },
  { name: "Week 2", score: 59 },
  { name: "Week 3", score: 80 },
  { name: "Week 4", score: 81 },
  { name: "Week 5", score: 56 },
  { name: "Week 6", score: 90 },
  { name: "Week 7", score: 95 },
];

const Dashboard = () => {
  const inProgressCourses = mockCourses.slice(0, 2);
  
  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Courses in Progress</p>
              <h3 className="text-3xl font-bold">4</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Hours Spent</p>
              <h3 className="text-3xl font-bold">26.5</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Clock className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Courses Completed</p>
              <h3 className="text-3xl font-bold">12</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Award className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Certificates</p>
              <h3 className="text-3xl font-bold">8</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Award className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 glass-card col-span-1 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Learning Progress</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1A1A2E",
                    borderColor: "#7C3AED",
                    borderRadius: "0.5rem"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#7C3AED" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "#7C3AED" }}
                  activeDot={{ r: 8, stroke: "#A855F7", strokeWidth: 2 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <h3 className="text-xl font-semibold mb-4">Current Courses</h3>
          
          <div className="space-y-4">
            {inProgressCourses.map((course) => (
              <div key={course.id} className="flex items-center gap-4 border-b border-gray-700 pb-4">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-violet-300">{course.title}</h4>
                  <div className="flex items-center text-sm text-gray-400 mt-1">
                    <span>{course.progress}% complete</span>
                  </div>
                  <Progress 
                    value={course.progress} 
                    className="h-1.5 mt-2" 
                  />
                </div>
              </div>
            ))}
            
            <a href="/courses" className="flex items-center justify-center w-full text-violet-400 hover:text-violet-300 text-sm gap-1 mt-2">
              View all courses <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </Card>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recommended Courses</h3>
          <a href="/courses" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCourses.slice(2, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
