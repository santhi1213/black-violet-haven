
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Filter, Plus, ArrowUpRight, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const forumCategories = [
  { id: 1, name: "General Discussion", count: 124 },
  { id: 2, name: "Course Help", count: 87 },
  { id: 3, name: "Projects", count: 53 },
  { id: 4, name: "Career Advice", count: 42 },
  { id: 5, name: "Technical Questions", count: 98 },
];

const recentThreads = [
  {
    id: 1,
    title: "How to understand recursive functions?",
    author: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?u=alex",
    category: "Course Help",
    replies: 24,
    views: 156,
    lastActivity: "3 hours ago",
    isHot: true,
  },
  {
    id: 2,
    title: "Share your final project for Web Development course",
    author: "Maria Garcia",
    avatar: "https://i.pravatar.cc/150?u=maria",
    category: "Projects",
    replies: 18,
    views: 132,
    lastActivity: "6 hours ago",
    isHot: false,
  },
  {
    id: 3,
    title: "Job opportunities in Machine Learning",
    author: "David Kim",
    avatar: "https://i.pravatar.cc/150?u=david",
    category: "Career Advice",
    replies: 32,
    views: 245,
    lastActivity: "1 day ago",
    isHot: true,
  },
  {
    id: 4,
    title: "Understanding Big O Notation",
    author: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    category: "Technical Questions",
    replies: 15,
    views: 98,
    lastActivity: "2 days ago",
    isHot: false,
  },
  {
    id: 5,
    title: "Welcome to the forum! Introduce yourself",
    author: "Admin",
    avatar: "https://i.pravatar.cc/150?u=admin",
    category: "General Discussion",
    replies: 87,
    views: 312,
    lastActivity: "3 days ago",
    isHot: false,
  },
];

const ForumThread = ({ thread }) => {
  return (
    <Card className="p-4 hover:bg-violet-500/10 transition-colors mb-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={thread.avatar} alt={thread.author} />
          <AvatarFallback>{thread.author.substring(0, 2)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium">
              <a href="#" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                {thread.title}
                {thread.isHot && <Badge className="ml-2 bg-red-500 hover:bg-red-600">Hot</Badge>}
              </a>
            </h3>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
            <span className="flex items-center gap-1">
              <Badge variant="secondary" className="bg-violet-500/10 hover:bg-violet-500/20 text-violet-300">
                {thread.category}
              </Badge>
            </span>
            <span>by {thread.author}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" /> {thread.replies} replies
            </span>
            <span className="flex items-center gap-1">
              <ArrowUpRight className="h-4 w-4" /> {thread.views} views
            </span>
            <span>Last activity: {thread.lastActivity}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Forum = () => {
  const { toast } = useToast();

  const handleCreatePost = () => {
    toast({
      title: "Coming soon",
      description: "The ability to create new posts will be available soon.",
    });
  };

  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
          <p className="text-gray-400">
            Connect with other students, ask questions, and share your knowledge
          </p>
        </div>
        
        <Button onClick={handleCreatePost} className="w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" /> Create New Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {forumCategories.map(category => (
                <div key={category.id} className="flex items-center justify-between group">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 py-2 text-sm hover:text-violet-400 transition-colors w-full"
                  >
                    <MessageCircle className="h-4 w-4 text-violet-500" />
                    {category.name}
                  </a>
                  <Badge variant="outline" className="text-xs bg-gray-800 group-hover:bg-violet-500/10">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-3">
          <Card className="p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Search discussions..."
                className="flex-1"
              />
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Search className="h-4 w-4" /> Search
              </Button>
            </div>
          </Card>
          
          <Tabs defaultValue="recent">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="recent">Recent Discussions</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="recent" className="space-y-4">
              {recentThreads.map(thread => (
                <ForumThread key={thread.id} thread={thread} />
              ))}
            </TabsContent>
            
            <TabsContent value="popular" className="space-y-4">
              {recentThreads
                .sort((a, b) => b.views - a.views)
                .map(thread => (
                  <ForumThread key={thread.id} thread={thread} />
              ))}
            </TabsContent>
            
            <TabsContent value="unanswered" className="space-y-4">
              <Card className="p-8 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                <h3 className="text-lg font-medium mb-2">No unanswered threads</h3>
                <p className="text-gray-400">
                  All discussions have at least one reply. Great job, community!
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Forum;
