
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Bell, Lock, User, Globe, Palette } from "lucide-react";

const Settings = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    bio: "Frontend developer focused on creating beautiful and functional user interfaces.",
    timeZone: "America/New_York",
    language: "english",
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weeklyDigest: true,
    newCourses: true,
    forumActivity: false,
    marketing: false,
  });
  
  const [appearance, setAppearance] = useState({
    theme: "dark",
    reducedMotion: false,
    fontSize: "medium",
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleProfileSelectChange = (name, value) => {
    setProfileData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (name, checked) => {
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleAppearanceChange = (name, value) => {
    setAppearance(prev => ({ ...prev, [name]: value }));
  };
  
  const saveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64">
            <TabsList className="flex flex-col h-auto bg-transparent p-0 justify-start">
              <TabsTrigger 
                value="profile" 
                className="justify-start w-full mb-1 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400"
              >
                <User className="h-5 w-5 mr-2" /> Profile
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="justify-start w-full mb-1 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400"
              >
                <Bell className="h-5 w-5 mr-2" /> Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="security" 
                className="justify-start w-full mb-1 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400"
              >
                <Lock className="h-5 w-5 mr-2" /> Security & Privacy
              </TabsTrigger>
              <TabsTrigger 
                value="preferences" 
                className="justify-start w-full mb-1 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400"
              >
                <Palette className="h-5 w-5 mr-2" /> Appearance
              </TabsTrigger>
              <TabsTrigger 
                value="language" 
                className="justify-start w-full mb-1 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-400"
              >
                <Globe className="h-5 w-5 mr-2" /> Language & Region
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1">
            <TabsContent value="profile">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="https://i.pravatar.cc/300" alt="User" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="mt-4" onClick={() => toast({ description: "This feature is coming soon" })}>
                      Change Photo
                    </Button>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={profileData.name} 
                          onChange={handleProfileChange} 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={profileData.email} 
                          onChange={handleProfileChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        name="bio" 
                        value={profileData.bio} 
                        onChange={handleProfileChange} 
                        rows={4}
                      />
                      <p className="text-xs text-gray-400">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex justify-end">
                  <Button onClick={saveSettings}>Save Changes</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium mb-4">Notification Channels</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-400">Receive notifications via email</p>
                        </div>
                        <Switch 
                          checked={notifications.email} 
                          onCheckedChange={(checked) => handleNotificationChange('email', checked)} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Push Notifications</p>
                          <p className="text-sm text-gray-400">Receive notifications in your browser</p>
                        </div>
                        <Switch 
                          checked={notifications.push} 
                          onCheckedChange={(checked) => handleNotificationChange('push', checked)} 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-md font-medium mb-4">Notification Types</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Weekly Learning Digest</p>
                          <p className="text-sm text-gray-400">Summary of your learning progress</p>
                        </div>
                        <Switch 
                          checked={notifications.weeklyDigest} 
                          onCheckedChange={(checked) => handleNotificationChange('weeklyDigest', checked)} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">New Course Announcements</p>
                          <p className="text-sm text-gray-400">Be notified when new courses are available</p>
                        </div>
                        <Switch 
                          checked={notifications.newCourses} 
                          onCheckedChange={(checked) => handleNotificationChange('newCourses', checked)} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Forum Activity</p>
                          <p className="text-sm text-gray-400">Replies to your posts and discussions</p>
                        </div>
                        <Switch 
                          checked={notifications.forumActivity} 
                          onCheckedChange={(checked) => handleNotificationChange('forumActivity', checked)} 
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing & Promotions</p>
                          <p className="text-sm text-gray-400">Special offers and promotions</p>
                        </div>
                        <Switch 
                          checked={notifications.marketing} 
                          onCheckedChange={(checked) => handleNotificationChange('marketing', checked)} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex justify-end">
                  <Button onClick={saveSettings}>Save Changes</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Security & Privacy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium mb-4">Password</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New Password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">Confirm New Password</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                      </div>
                      
                      <Button variant="outline">Change Password</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-md font-medium mb-4">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Profile Visibility</p>
                          <p className="text-sm text-gray-400">Make your profile visible to other users</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Learning Activity</p>
                          <p className="text-sm text-gray-400">Show your learning progress to other users</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Data Usage</p>
                          <p className="text-sm text-gray-400">Allow us to collect usage data to improve services</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-md font-medium mb-4">Sessions</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      You're currently signed in on this device. Sign out all other sessions if you think your account has been compromised.
                    </p>
                    <Button variant="destructive">Sign Out All Other Sessions</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Appearance</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-md font-medium mb-4">Theme</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border rounded-md p-4 flex justify-center items-center cursor-pointer transition ${
                          appearance.theme === 'light' ? 'border-violet-500 bg-violet-500/20' : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => handleAppearanceChange('theme', 'light')}
                      >
                        <div className="h-16 w-16 bg-white rounded-md"></div>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex justify-center items-center cursor-pointer transition ${
                          appearance.theme === 'dark' ? 'border-violet-500 bg-violet-500/20' : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => handleAppearanceChange('theme', 'dark')}
                      >
                        <div className="h-16 w-16 bg-gray-900 rounded-md"></div>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-4 flex justify-center items-center cursor-pointer transition ${
                          appearance.theme === 'system' ? 'border-violet-500 bg-violet-500/20' : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => handleAppearanceChange('theme', 'system')}
                      >
                        <div className="h-16 w-16 bg-gradient-to-r from-white to-gray-900 rounded-md"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 text-center text-sm">
                      <div>Light</div>
                      <div>Dark</div>
                      <div>System</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-md font-medium mb-4">Accessibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Reduced Motion</p>
                          <p className="text-sm text-gray-400">Minimize animations throughout the interface</p>
                        </div>
                        <Switch 
                          checked={appearance.reducedMotion} 
                          onCheckedChange={(checked) => handleAppearanceChange('reducedMotion', checked)} 
                        />
                      </div>
                      
                      <div>
                        <p className="font-medium mb-2">Font Size</p>
                        <Select 
                          value={appearance.fontSize} 
                          onValueChange={(value) => handleAppearanceChange('fontSize', value)}
                        >
                          <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex justify-end">
                  <Button onClick={saveSettings}>Save Changes</Button>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="language">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Language & Region</h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">Language</p>
                    <Select 
                      value={profileData.language} 
                      onValueChange={(value) => handleProfileSelectChange('language', value)}
                    >
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="chinese">Chinese</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Time Zone</p>
                    <Select 
                      value={profileData.timeZone} 
                      onValueChange={(value) => handleProfileSelectChange('timeZone', value)}
                    >
                      <SelectTrigger className="w-full md:w-[250px]">
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Chicago">Central Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Denver">Mountain Time (US & Canada)</SelectItem>
                        <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                        <SelectItem value="Europe/London">London</SelectItem>
                        <SelectItem value="Europe/Paris">Paris</SelectItem>
                        <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Date Format</p>
                    <Select defaultValue="MM/DD/YYYY">
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY/MM/DD">YYYY/MM/DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="flex justify-end">
                  <Button onClick={saveSettings}>Save Changes</Button>
                </div>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;
