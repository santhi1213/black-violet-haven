
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  ArrowRight,
  Play,
  Users,
  Award,
  Clock,
  BookOpen,
} from "lucide-react";
import { mockCourses } from "@/lib/mock-data";
import CourseCard from "@/components/courses/CourseCard";

const Index = () => {
  const featuredCourses = mockCourses.slice(0, 4);
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Elevate Your Learning Experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover thousands of courses taught by expert instructors to help you advance your skills and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="primary-button text-lg p-6">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="secondary-button text-lg p-6">
                  Sign Up for Free
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="glass-card p-5 rounded-xl text-center">
              <div className="bg-violet-500/20 h-12 w-12 mx-auto flex items-center justify-center rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="font-medium text-lg mb-1">500+ Courses</h3>
              <p className="text-gray-400 text-sm">On various topics</p>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-center">
              <div className="bg-violet-500/20 h-12 w-12 mx-auto flex items-center justify-center rounded-full mb-4">
                <Users className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="font-medium text-lg mb-1">50k+ Students</h3>
              <p className="text-gray-400 text-sm">Learning worldwide</p>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-center">
              <div className="bg-violet-500/20 h-12 w-12 mx-auto flex items-center justify-center rounded-full mb-4">
                <Award className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="font-medium text-lg mb-1">Free Certificates</h3>
              <p className="text-gray-400 text-sm">For all courses</p>
            </div>
            
            <div className="glass-card p-5 rounded-xl text-center">
              <div className="bg-violet-500/20 h-12 w-12 mx-auto flex items-center justify-center rounded-full mb-4">
                <Clock className="h-6 w-6 text-violet-400" />
              </div>
              <h3 className="font-medium text-lg mb-1">Lifetime Access</h3>
              <p className="text-gray-400 text-sm">Learn at your pace</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Featured Courses</h2>
              <p className="text-gray-400">Handpicked courses to get you started on your learning journey</p>
            </div>
            <Link to="/courses" className="flex items-center text-violet-400 hover:text-violet-300 mt-4 md:mt-0">
              View All Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Categories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of course categories and find the perfect match for your learning goals
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="it">IT & Software</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["Web Development", "Graphic Design", "Data Science", "Marketing", "Business", "UI/UX Design", "Mobile App Development", "Photography"].map((category, index) => (
                <Link to="/courses" key={index} className="group">
                  <div className="glass-card rounded-xl p-6 text-center h-full transition-all group-hover:bg-violet-500/20 group-hover:shadow-lg group-hover:shadow-violet-500/30">
                    <div className="bg-violet-500/20 h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4 group-hover:bg-violet-500/40">
                      <BookOpen className="h-8 w-8 text-violet-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-violet-300">{category}</h3>
                    <p className="text-gray-400 text-sm">
                      {Math.floor(Math.random() * 100) + 10}+ courses
                    </p>
                  </div>
                </Link>
              ))}
            </TabsContent>
            
            {/* Additional tab contents would be similar */}
            <TabsContent value="design"></TabsContent>
            <TabsContent value="development"></TabsContent>
            <TabsContent value="business"></TabsContent>
            <TabsContent value="marketing"></TabsContent>
            <TabsContent value="it"></TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From signing up to earning your certificate, we've made the process simple and intuitive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-violet-600 h-16 w-16 flex items-center justify-center rounded-full mb-6 z-10">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="absolute top-8 left-1/2 h-0.5 w-full bg-gradient-to-r from-violet-600/0 via-violet-600/50 to-violet-600/0 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-3">Create an Account</h3>
              <p className="text-gray-400">
                Sign up for free and get immediate access to thousands of courses from expert instructors.
              </p>
            </div>
            
            <div className="relative flex flex-col items-center text-center">
              <div className="bg-violet-600 h-16 w-16 flex items-center justify-center rounded-full mb-6 z-10">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="absolute top-8 left-1/2 h-0.5 w-full bg-gradient-to-r from-violet-600/0 via-violet-600/50 to-violet-600/0 hidden md:block"></div>
              <h3 className="text-xl font-semibold mb-3">Enroll in Courses</h3>
              <p className="text-gray-400">
                Browse our catalog and enroll in courses that match your interests and career goals.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-violet-600 h-16 w-16 flex items-center justify-center rounded-full mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn & Earn Certificate</h3>
              <p className="text-gray-400">
                Complete courses at your own pace and earn certificates to showcase your achievements.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/login">
              <Button className="primary-button">Get Started Now</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What Our Students Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from our students about their learning experience and how our platform has helped them achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Johnson",
                role: "UX Designer",
                avatar: "https://i.pravatar.cc/150?img=1",
                content: "The courses are incredibly well-structured and the instructors are top-notch. I was able to transition to a new career in just 6 months!",
              },
              {
                name: "Michael Chang",
                role: "Web Developer",
                avatar: "https://i.pravatar.cc/150?img=8",
                content: "I've taken several programming courses and they've all been excellent. The practical projects really helped me apply what I learned.",
              },
              {
                name: "Sarah Williams",
                role: "Marketing Specialist",
                avatar: "https://i.pravatar.cc/150?img=5",
                content: "The digital marketing courses helped me stay up-to-date with the latest trends and strategies. Highly recommended for anyone in the field!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="glass-card rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-violet-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-purple-900/50 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of students who are already learning and advancing their careers with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button className="primary-button py-6 text-lg">
                  Sign Up for Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="secondary-button py-6 text-lg">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
