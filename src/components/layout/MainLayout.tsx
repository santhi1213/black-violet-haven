
import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Settings,
  User as UserIcon,
  BookOpen,
  BarChart,
  Award,
  Home,
  Play,
  MessageSquare,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const MainLayout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="h-8 w-8 rounded-md bg-violet-600 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <h1 className="text-xl font-bold">LMS Platform</h1>
                    <SheetClose className="ml-auto">
                      <X className="h-5 w-5" />
                    </SheetClose>
                  </div>
                  
                  <nav className="space-y-1">
                    <Link
                      to="/dashboard"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/dashboard")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <Home size={18} />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/courses"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/courses")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <BookOpen size={18} />
                      <span>Courses</span>
                    </Link>
                    <Link
                      to="/learning"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/learning")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <Play size={18} />
                      <span>My Learning</span>
                    </Link>
                    <Link
                      to="/forum"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/forum")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <MessageSquare size={18} />
                      <span>Forum</span>
                    </Link>
                    <Link
                      to="/achievements"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/achievements")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <Award size={18} />
                      <span>Achievements</span>
                    </Link>
                    <Link
                      to="/analytics"
                      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                        isActive("/analytics")
                          ? "bg-violet-500/20 text-violet-400"
                          : "hover:bg-gray-800"
                      }`}
                    >
                      <BarChart size={18} />
                      <span>Analytics</span>
                    </Link>
                  </nav>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-400 hover:text-red-300 hover:border-red-800"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-violet-600 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-xl font-bold hidden sm:block">LMS Platform</h1>
            </Link>
            
            <nav className="hidden md:flex ml-12 gap-1">
              <Link
                to="/dashboard"
                className={`nav-link ${isActive("/dashboard") ? "nav-link-active" : ""}`}
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className={`nav-link ${isActive("/courses") ? "nav-link-active" : ""}`}
              >
                Courses
              </Link>
              <Link
                to="/learning"
                className={`nav-link ${isActive("/learning") ? "nav-link-active" : ""}`}
              >
                My Learning
              </Link>
              <Link
                to="/forum"
                className={`nav-link ${isActive("/forum") ? "nav-link-active" : ""}`}
              >
                Forum
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="nav-link flex items-center">
                    More <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/achievements" className="flex w-full">
                      <Award className="mr-2 h-4 w-4" /> Achievements
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/analytics" className="flex w-full">
                      <BarChart className="mr-2 h-4 w-4" /> Analytics
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
          
          <div className="flex items-center gap-3">
            {!isSearchOpen ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-400 hover:text-white"
                >
                  <Search className="h-5 w-5" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-400 hover:text-white"
                    >
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-violet-600 rounded-full border-2 border-background" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="font-medium">
                      <div className="flex flex-col">
                        <span>New course available</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-medium">
                      <div className="flex flex-col">
                        <span>Your certificate is ready</span>
                        <span className="text-xs text-gray-500">1 day ago</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Separator orientation="vertical" className="h-6 mx-1 hidden sm:block" />
              </>
            ) : (
              <div className="relative flex items-center">
                <Input
                  placeholder="Search courses..."
                  className="w-[200px] sm:w-[300px]"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden sm:flex items-center gap-2 hover:bg-violet-500/10">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Alex Johnson</span>
                    <span className="text-xs text-gray-400">Student</span>
                  </div>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full">
                    <UserIcon className="mr-2 h-4 w-4" /> My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex w-full">
                    <UserIcon className="mr-2 h-4 w-4" /> My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="flex w-full">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-violet-600 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">LMS Platform</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/about" className="hover:text-violet-400">About Us</Link>
              <Link to="/contact" className="hover:text-violet-400">Contact</Link>
              <Link to="/terms" className="hover:text-violet-400">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-violet-400">Privacy Policy</Link>
            </div>
            
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              © 2023 LMS Platform. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
