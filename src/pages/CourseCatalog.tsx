
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import CourseListItem from "@/components/courses/CourseListItem";
import { mockCourses } from "@/lib/mock-data";

const CourseCatalog = () => {
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  
  const filteredCourses = mockCourses.filter(course => {
    // Apply search filter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply category filter
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    // Apply level filter
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const categories = ["Design", "Development", "Business", "Marketing"];
  const levels = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search courses..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={levelFilter} onValueChange={setLevelFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {levels.map(level => (
                <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Tabs defaultValue="grid" className="hidden md:flex">
            <TabsList>
              <TabsTrigger 
                value="grid" 
                onClick={() => setViewType("grid")}
                className="px-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
              </TabsTrigger>
              <TabsTrigger 
                value="list" 
                onClick={() => setViewType("list")}
                className="px-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3" y1="6" y2="6" /><line x1="3" x2="3" y1="12" y2="12" /><line x1="3" x2="3" y1="18" y2="18" /></svg>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {filteredCourses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="bg-violet-500/20 p-5 rounded-full mb-4">
            <Search className="h-10 w-10 text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-gray-400 text-center max-w-md mb-6">
            We couldn't find any courses matching your search criteria. Try adjusting your filters or search term.
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setCategoryFilter("all");
              setLevelFilter("all");
            }}
            className="primary-button"
          >
            Clear Filters
          </Button>
        </div>
      ) : viewType === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <CourseListItem key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCatalog;
