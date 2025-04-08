import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Camera, Clock, Edit, User } from "lucide-react";
import { mockCourses, mockCertificates } from "@/lib/mock-data";
import { useToast } from "@/hooks/use-toast";

interface EnrolledCourse {
  id: string;
  title: string;
  thumbnail: string;
  instructor: {
    name: string;
  };
  duration: string;
  progress: number;
  completed?: boolean;
  enrolled?: boolean;
  [key: string]: any;
}

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [name, setName] = useState("Alex Johnson");
  const [bio, setBio] = useState("Frontend Developer passionate about UI/UX and interactive web experiences.");
  const [email, setEmail] = useState("alex.johnson@example.com");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const enrolledCourses = mockCourses.filter(course => course.enrolled).slice(0, 5) as EnrolledCourse[];

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been saved successfully.",
      });
    }, 1000);
  };

  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
          <div className="relative group">
            <Avatar className="h-28 w-28 border-4 border-violet-600">
              <AvatarImage src="https://i.pravatar.cc/300" alt="Alex Johnson" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <Camera className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-gray-400">{bio}</p>
              </div>
              <Button className="secondary-button flex gap-2 items-center">
                <Edit size={16} /> Edit Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                <div className="text-sm text-gray-400">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">86</div>
                <div className="text-sm text-gray-400">Hours</div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="billing" className="hidden lg:block">Billing</TabsTrigger>
            <TabsTrigger value="settings" className="hidden lg:block">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, Country"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself"
                      rows={4}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="primary-button" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </Card>
            
            <Card className="glass-card p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Social Profiles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="LinkedIn profile URL"
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    placeholder="Twitter profile URL"
                  />
                </div>
                <div>
                  <Label htmlFor="github">GitHub</Label>
                  <Input
                    id="github"
                    placeholder="GitHub profile URL"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Personal Website</Label>
                  <Input
                    id="website"
                    placeholder="Your website URL"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses" className="mt-6">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">My Courses</h2>
              
              <div className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex flex-col md:flex-row gap-4 border-b border-gray-700 pb-6">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title} 
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <Clock size={14} className="mr-1" />
                        <span>{course.duration}</span>
                        <span className="mx-2">•</span>
                        <BookOpen size={14} className="mr-1" />
                        <span>24 lessons</span>
                        <span className="mx-2">•</span>
                        <User size={14} className="mr-1" />
                        <span>{course.instructor.name}</span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span className="text-violet-400">{course.progress}% complete</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          variant="default" 
                          className="primary-button text-sm px-4 py-1 h-auto"
                          onClick={() => window.location.href = `/course/${course.id}`}
                        >
                          Continue Learning
                        </Button>
                        
                        {course.completed && (
                          <Button 
                            variant="outline"
                            className="secondary-button text-sm px-4 py-1 h-auto"
                          >
                            View Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="secondary-button"
                  onClick={() => window.location.href = "/courses"}
                >
                  Browse More Courses
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="certificates" className="mt-6">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">My Certificates</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCertificates.map((certificate) => (
                  <div key={certificate.id} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                    <div className="relative">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="font-semibold text-lg">{certificate.title}</h3>
                          <p className="text-sm text-gray-300">{certificate.issuer}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <Award size={14} className="mr-1 text-violet-400" />
                        <span>Certificate of Completion</span>
                        <span className="mx-2">•</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{certificate.issueDate}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="default" 
                          className="primary-button text-sm flex-1"
                        >
                          Download
                        </Button>
                        <Button 
                          variant="outline" 
                          className="secondary-button text-sm flex-1"
                        >
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-6">
            <Card className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-400">Receive emails about course updates and new content</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <div className="border-b border-gray-700 pb-6"></div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
                
                <div className="border-b border-gray-700 pb-6"></div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Public Profile</h3>
                    <p className="text-sm text-gray-400">Make your profile visible to other students</p>
                  </div>
                  <Switch id="public-profile" defaultChecked />
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-6">Password</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      placeholder="••••••••••"
                    />
                  </div>
                  <div className="hidden md:block"></div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="••••••••••"
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••••"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <Button className="primary-button">Update Password</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
