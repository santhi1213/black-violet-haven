
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { Trophy, Clock, Calendar, BarChart as BarChartIcon, PieChart as PieChartIcon, TrendingUp } from "lucide-react";

const weeklyData = [
  { name: "Mon", minutes: 45 },
  { name: "Tue", minutes: 65 },
  { name: "Wed", minutes: 30 },
  { name: "Thu", minutes: 90 },
  { name: "Fri", minutes: 75 },
  { name: "Sat", minutes: 120 },
  { name: "Sun", minutes: 60 },
];

const monthlyData = [
  { name: "Week 1", minutes: 340 },
  { name: "Week 2", minutes: 420 },
  { name: "Week 3", minutes: 280 },
  { name: "Week 4", minutes: 390 },
];

const subjectData = [
  { name: "Programming", value: 45, color: "#7C3AED" },
  { name: "Data Science", value: 25, color: "#EC4899" },
  { name: "Web Development", value: 20, color: "#3B82F6" },
  { name: "UI/UX Design", value: 10, color: "#10B981" },
];

const completionData = [
  { name: "Jan", completion: 2 },
  { name: "Feb", completion: 1 },
  { name: "Mar", completion: 3 },
  { name: "Apr", completion: 2 },
  { name: "May", completion: 4 },
  { name: "Jun", completion: 3 },
  { name: "Jul", completion: 5 },
  { name: "Aug", completion: 2 },
  { name: "Sep", completion: 3 },
  { name: "Oct", completion: 0 },
  { name: "Nov", completion: 0 },
  { name: "Dec", completion: 0 },
];

const quizScoreData = [
  { name: "Quiz 1", score: 85 },
  { name: "Quiz 2", score: 70 },
  { name: "Quiz 3", score: 90 },
  { name: "Quiz 4", score: 95 },
  { name: "Quiz 5", score: 75 },
  { name: "Quiz 6", score: 88 },
  { name: "Quiz 7", score: 92 },
];

const Analytics = () => {
  return (
    <div className="py-8 px-4 md:px-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Learning Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Current Streak</p>
              <h3 className="text-3xl font-bold">7 days</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Trophy className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Total Learning Time</p>
              <h3 className="text-3xl font-bold">87 hours</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <Clock className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">Quiz Average</p>
              <h3 className="text-3xl font-bold">85%</h3>
            </div>
            <div className="bg-violet-500/20 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-violet-400" />
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 glass-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2" /> Learning Time
            </h2>
            
            <Tabs defaultValue="weekly">
              <TabsList className="h-8">
                <TabsTrigger value="weekly" className="text-xs px-3">Weekly</TabsTrigger>
                <TabsTrigger value="monthly" className="text-xs px-3">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <TabsContent value="weekly" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" label={{ value: 'Minutes', angle: -90, position: 'left', fill: '#999' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1A1A2E",
                      borderColor: "#7C3AED",
                      borderRadius: "0.5rem"
                    }}
                    formatter={(value) => [`${value} minutes`, 'Time Spent']}
                  />
                  <Bar dataKey="minutes" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#999" />
                  <YAxis stroke="#999" label={{ value: 'Minutes', angle: -90, position: 'left', fill: '#999' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1A1A2E",
                      borderColor: "#7C3AED",
                      borderRadius: "0.5rem"
                    }}
                    formatter={(value) => [`${value} minutes`, 'Time Spent']}
                  />
                  <Bar dataKey="minutes" fill="#7C3AED" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center">
              <PieChartIcon className="h-5 w-5 mr-2" /> Learning Distribution
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between h-64">
            <ResponsiveContainer width="60%" height="100%">
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1A1A2E",
                    borderColor: "#7C3AED",
                    borderRadius: "0.5rem"
                  }}
                  formatter={(value) => [`${value}%`, 'Distribution']}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="space-y-3 mt-4 md:mt-0">
              {subjectData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 glass-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center">
              <Calendar className="h-5 w-5 mr-2" /> Course Completions
            </h2>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={completionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1A1A2E",
                    borderColor: "#7C3AED",
                    borderRadius: "0.5rem"
                  }}
                  formatter={(value) => [`${value} courses`, 'Completed']}
                />
                <Bar dataKey="completion" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6 glass-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center">
              <BarChartIcon className="h-5 w-5 mr-2" /> Quiz Performance
            </h2>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={quizScoreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "#1A1A2E",
                    borderColor: "#7C3AED",
                    borderRadius: "0.5rem"
                  }}
                  formatter={(value) => [`${value}%`, 'Score']}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#EC4899" 
                  strokeWidth={3}
                  dot={{ r: 5, strokeWidth: 2, fill: "#EC4899" }}
                  activeDot={{ r: 8, stroke: "#EC4899", strokeWidth: 2 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
