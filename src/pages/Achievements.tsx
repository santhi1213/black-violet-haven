
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Check, Lock, Star, Trophy, Flame, Zap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const achievementCategories = [
  { id: "all", label: "All" },
  { id: "course", label: "Course Completion" },
  { id: "quiz", label: "Quiz Master" },
  { id: "streak", label: "Learning Streaks" },
  { id: "social", label: "Community" },
];

const achievements = [
  {
    id: 1,
    title: "First Course Completed",
    description: "Complete your first course",
    progress: 100,
    icon: Trophy,
    category: "course",
    unlocked: true,
    date: "Apr 12, 2023",
  },
  {
    id: 2,
    title: "Learning Enthusiast",
    description: "Complete 5 courses",
    progress: 60,
    icon: Award,
    category: "course",
    unlocked: false,
  },
  {
    id: 3,
    title: "Knowledge Master",
    description: "Complete 10 courses",
    progress: 20,
    icon: Award,
    category: "course",
    unlocked: false,
  },
  {
    id: 4,
    title: "Perfect Quiz",
    description: "Score 100% on any quiz",
    progress: 100,
    icon: Star,
    category: "quiz",
    unlocked: true,
    date: "May 03, 2023",
  },
  {
    id: 5,
    title: "Quiz Champion",
    description: "Score above 90% on 10 quizzes",
    progress: 70,
    icon: Star,
    category: "quiz",
    unlocked: false,
  },
  {
    id: 6,
    title: "7-Day Streak",
    description: "Learn for 7 consecutive days",
    progress: 100,
    icon: Flame,
    category: "streak",
    unlocked: true,
    date: "Jun 18, 2023",
  },
  {
    id: 7,
    title: "30-Day Streak",
    description: "Learn for 30 consecutive days",
    progress: 23,
    icon: Flame,
    category: "streak",
    unlocked: false,
  },
  {
    id: 8,
    title: "Helpful Peer",
    description: "Answer 5 questions in the forum",
    progress: 60,
    icon: Zap,
    category: "social",
    unlocked: false,
  },
  {
    id: 9,
    title: "Community Pillar",
    description: "Answer 25 questions in the forum",
    progress: 12,
    icon: Zap,
    category: "social",
    unlocked: false,
  },
  {
    id: 10,
    title: "Top Contributor",
    description: "Have 10 of your forum answers marked as helpful",
    progress: 40,
    icon: Target,
    category: "social",
    unlocked: false,
  },
];

const AchievementCard = ({ achievement }) => {
  return (
    <Card className={`p-6 relative ${achievement.unlocked ? "glass-card" : "border-gray-800"}`}>
      <div className="flex items-start">
        <div className={`p-4 rounded-full ${
          achievement.unlocked 
            ? "bg-violet-500/20 text-violet-400" 
            : "bg-gray-800/50 text-gray-500"
        }`}>
          <achievement.icon className="h-6 w-6" />
        </div>
        
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {achievement.title}
              {achievement.unlocked && (
                <Badge className="ml-2 bg-violet-500">
                  <Check className="h-3 w-3 mr-1" /> Earned
                </Badge>
              )}
            </h3>
          </div>
          
          <p className="text-sm text-gray-400 mt-1">{achievement.description}</p>
          
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Progress</span>
              <span className="font-medium">
                {achievement.progress}%
                {achievement.unlocked && <span className="text-gray-400 text-xs ml-2">• {achievement.date}</span>}
              </span>
            </div>
            <Progress value={achievement.progress} className="h-2" />
          </div>
        </div>
        
        {!achievement.unlocked && (
          <div className="absolute top-4 right-4 text-gray-500">
            <Lock className="h-5 w-5" />
          </div>
        )}
      </div>
    </Card>
  );
};

const Achievements = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  
  const filteredAchievements = React.useMemo(() => {
    if (activeCategory === "all") {
      return achievements;
    }
    return achievements.filter(a => a.category === activeCategory);
  }, [activeCategory]);
  
  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);
  
  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Achievements</h1>
      
      <Card className="p-6 mb-8 glass-card">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="p-6 bg-violet-500/20 rounded-full">
            <Trophy className="h-12 w-12 text-violet-400" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">Achievement Progress</h2>
            <p className="text-gray-400 mb-4">You've unlocked {unlockedCount} of {totalCount} achievements</p>
            
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-400">Overall completion</span>
              <span className="font-medium">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>
        </div>
      </Card>
      
      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="mb-6">
        <TabsList>
          {achievementCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map(achievement => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
