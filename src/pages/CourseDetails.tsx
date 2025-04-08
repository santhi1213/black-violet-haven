import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Clock,
  BookOpen,
  Users,
  Award,
  Star,
  Play,
  File,
  CheckCircle2,
  LockKeyhole
} from "lucide-react";
import { mockCourses, mockLessons } from "@/lib/mock-data";
import InstructorCard from "@/components/courses/InstructorCard";
import VideoPlayer from "@/components/courses/VideoPlayer";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  
  // Find course by ID
  const course = mockCourses.find(c => c.id === courseId) || mockCourses[0];
  
  // Get lessons for this course
  const courseLessons = mockLessons.filter(lesson => lesson.courseId === course.id);
  
  // Group lessons by section
  const sections = courseLessons.reduce<Record<string, any[]>>((acc, lesson) => {
    if (!acc[lesson.section]) {
      acc[lesson.section] = [];
    }
    acc[lesson.section].push(lesson);
    return acc;
  }, {});

  const handleLessonClick = (lesson: any) => {
    if (!lesson.locked) {
      setSelectedLesson(lesson);
      setActiveTab("lesson");
    }
  };
  
  return (
    <div className="py-6 px-4 md:px-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-3">{course.title}</h1>
            <p className="text-gray-400 mb-4">{course.description}</p>
            
            <div className="flex items-center flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="flex mr-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={16} 
                      className={star <= course.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"} 
                    />
                  ))}
                </div>
                <span className="text-sm text-violet-300 mr-1">{course.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-400">({course.reviewCount} reviews)</span>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                <Users size={16} className="mr-1" />
                <span>{course.students} students</span>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                <Clock size={16} className="mr-1" />
                <span>{course.duration}</span>
              </div>
              
              <div className="flex items-center text-gray-400 text-sm">
                <BookOpen size={16} className="mr-1" />
                <span>{courseLessons.length} lessons</span>
              </div>
              
              <div className="bg-violet-500/20 px-3 py-1 rounded text-sm text-violet-300">
                {course.level}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-violet-600">
                <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                <AvatarFallback>{course.instructor.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm text-gray-400">Instructor</div>
                <div className="font-medium">{course.instructor.name}</div>
              </div>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="glass-card rounded-xl">
            <TabsList className="grid grid-cols-3 mb-0 p-0">
              <TabsTrigger value="overview" className="py-3 data-[state=active]:bg-violet-500/20">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="py-3 data-[state=active]:bg-violet-500/20">Curriculum</TabsTrigger>
              <TabsTrigger value="lesson" className="py-3 data-[state=active]:bg-violet-500/20" disabled={!selectedLesson}>
                {selectedLesson ? "Current Lesson" : "Select a Lesson"}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="p-6">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4">About This Course</h3>
                <p>
                  {course.fullDescription || `
                    This comprehensive course will take you from beginner to advanced in
                    ${course.title}. Through practical lessons and hands-on projects, you'll
                    master the key concepts and techniques needed to excel in this field.
                  `}
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learningPoints && course.learningPoints.map((point: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={18} className="mr-2 text-green-500 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Requirements</h3>
                <ul>
                  {course.requirements && course.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 mr-2.5"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6">Meet Your Instructor</h3>
                <InstructorCard instructor={course.instructor} />
              </div>
            </TabsContent>
            
            <TabsContent value="curriculum" className="p-6">
              <h3 className="text-xl font-semibold mb-4">Course Content</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm text-gray-400">
                  <span>{Object.keys(sections).length} sections</span> • <span>{courseLessons.length} lessons</span> • <span>{course.duration} total</span>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(sections).map(([sectionName, lessons], index) => (
                  <AccordionItem key={index} value={`section-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="text-base font-medium hover:text-violet-400 py-4">
                      {sectionName}
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-800/30">
                      {lessons.map((lesson, lessonIdx) => (
                        <button
                          key={lessonIdx}
                          onClick={() => handleLessonClick(lesson)}
                          className={`w-full flex items-start p-3 hover:bg-violet-500/10 ${
                            lesson.locked ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                          } transition-colors text-left`}
                        >
                          <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-700 shrink-0">
                            {lesson.locked ? (
                              <LockKeyhole size={14} className="text-gray-400" />
                            ) : lesson.type === "video" ? (
                              <Play size={14} className="text-violet-400" />
                            ) : (
                              <File size={14} className="text-violet-400" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm mb-1">
                                {lesson.title}
                              </h4>
                              <span className="text-xs text-gray-400">{lesson.duration}</span>
                            </div>
                            <p className="text-xs text-gray-400">
                              {lesson.type === "video" ? "Video Lesson" : "Reading Material"}
                            </p>
                          </div>
                        </button>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="lesson" className="p-6">
              {selectedLesson ? (
                <div>
                  <h2 className="text-xl font-semibold mb-4">{selectedLesson.title}</h2>
                  
                  {selectedLesson.type === "video" ? (
                    <div className="mb-6">
                      <VideoPlayer videoUrl={selectedLesson.content} />
                    </div>
                  ) : (
                    <div className="glass-card p-6 mb-6">
                      <p>{selectedLesson.content}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" className="secondary-button">
                      Previous Lesson
                    </Button>
                    <Button className="primary-button">
                      Next Lesson
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <BookOpen className="h-16 w-16 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Lesson Selected</h3>
                  <p className="text-gray-400 text-center mb-6">
                    Please select a lesson from the curriculum to start learning.
                  </p>
                  <Button
                    onClick={() => setActiveTab("curriculum")}
                    className="primary-button"
                  >
                    Go to Curriculum
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-1">
          <div className="glass-card rounded-xl overflow-hidden sticky top-20">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="w-full aspect-video object-cover"
            />
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold">${course.price.toFixed(2)}</div>
                {course.hasDiscount && (
                  <div className="text-gray-400 line-through">${(course.price * 1.25).toFixed(2)}</div>
                )}
              </div>
              
              {course.enrolled ? (
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Your progress</span>
                      <span className="text-violet-400">{course.progress}% complete</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  
                  <Button className="primary-button w-full">
                    Continue Learning
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Button className="primary-button w-full">
                    Enroll Now
                  </Button>
                  
                  <Button variant="outline" className="secondary-button w-full">
                    Add to Wishlist
                  </Button>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="font-medium mb-3">This course includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <Clock size={16} className="mr-2 text-violet-400" />
                    <span>{course.duration} of on-demand video</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <File size={16} className="mr-2 text-violet-400" />
                    <span>15 downloadable resources</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <BookOpen size={16} className="mr-2 text-violet-400" />
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Award size={16} className="mr-2 text-violet-400" />
                    <span>Certificate of completion</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                <p className="text-xs text-gray-400">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
