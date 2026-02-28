import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Settings, TrendingUp, Calendar, Award, Target, Camera, ChevronRight } from 'lucide-react';
import { calculateHairHealthScore, getScoreCategory } from '@/utils/hairHealthScore';
import ProgressChart from '@/components/ProgressChart';
import MilestoneCard from '@/components/MilestoneCard';
import RoutineHeatmap from '@/components/RoutineHeatmap';
import PhotoTimeline from '@/components/PhotoTimeline';
import GoalsTracking from '@/components/GoalsTracking';
import { motion } from 'framer-motion';

const Progress = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1w' | '1m' | '3m'>('1w');

  // Mock user data
  const userProfile = {
    hairType: 'curly',
    goals: ['Reduce frizz', 'Add volume', 'Enhance shine'],
    washFrequency: '2-3 times a week',
    routineCompletion: 0.85,
    daysActive: 21
  };

  const hairHealthScore = calculateHairHealthScore(userProfile);
  const scoreCategory = getScoreCategory(hairHealthScore);

  // Mock progress data for different timeframes
  const progressData = {
    '1w': [
      { day: 'Mon', score: 65, completion: 0.9 },
      { day: 'Tue', score: 68, completion: 0.8 },
      { day: 'Wed', score: 71, completion: 1.0 },
      { day: 'Thu', score: 69, completion: 0.7 },
      { day: 'Fri', score: 72, completion: 0.9 },
      { day: 'Sat', score: 74, completion: 0.8 },
      { day: 'Sun', score: 72, completion: 0.6 }
    ],
    '1m': [
      { day: 'Week 1', score: 62, completion: 0.7 },
      { day: 'Week 2', score: 68, completion: 0.8 },
      { day: 'Week 3', score: 72, completion: 0.85 },
      { day: 'Week 4', score: 74, completion: 0.9 }
    ],
    '3m': [
      { day: 'Month 1', score: 58, completion: 0.6 },
      { day: 'Month 2', score: 68, completion: 0.75 },
      { day: 'Month 3', score: 74, completion: 0.85 }
    ]
  };

  const insights = [
    {
      title: "Consistency Improvement",
      description: "Your routine completion improved by 25% this month!",
      trend: "up"
    },
    {
      title: "Hair Health Growth",
      description: "Your hair health score increased by 16 points since you started.",
      trend: "up"
    },
    {
      title: "Best Performance Days",
      description: "You perform best on weekdays. Consider weekend reminders!",
      trend: "neutral"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            onClick={() => navigate('/dashboard')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">Your Progress</h1>
            <p className="text-sm text-muted-foreground font-medium">Track your hair journey</p>
          </div>
          <Button
            onClick={() => navigate('/settings')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </Button>
        </motion.div>

        {/* Hair Health Score Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-6 mb-6 bg-gradient-to-br from-accent/30 via-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-lg card-hover">
            <div className="text-center mb-4">
              <div className="text-sm text-muted-foreground mb-2 font-semibold">Current Hair Health Score</div>
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="text-4xl font-bold text-foreground">{hairHealthScore}</div>
                <span className="text-2xl">{scoreCategory.emoji}</span>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-lg font-bold text-primary">+16</span>
                </div>
              </div>
              <div className={`text-sm font-semibold text-primary mb-4`}>
                {scoreCategory.label}
              </div>
            </div>
            
            {/* Progress Ring Visualization */}
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="hsl(var(--border))"
                  strokeOpacity="0.3"
                  strokeWidth="8"
                  fill="transparent"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  fill="transparent"
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  initial={{ strokeDasharray: "0 351.86" }}
                  animate={{ strokeDasharray: `${(hairHealthScore / 100) * 351.86} 351.86` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">{hairHealthScore}%</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Timeframe Selector */}
        <motion.div 
          className="flex space-x-2 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {(['1w', '1m', '3m'] as const).map((timeframe) => (
            <motion.div
              key={timeframe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setSelectedTimeframe(timeframe)}
                variant={selectedTimeframe === timeframe ? "default" : "outline"}
                className={`flex-1 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedTimeframe === timeframe
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'border-2 border-border hover:bg-accent'
                }`}
              >
                {timeframe === '1w' ? '1 Week' : timeframe === '1m' ? '1 Month' : '3 Months'}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Charts */}
        <motion.div 
          className="space-y-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProgressChart 
            data={progressData[selectedTimeframe]} 
            title="📈 Hair Health Score Trend" 
            metric="score" 
          />
          <ProgressChart 
            data={progressData[selectedTimeframe]} 
            title="✅ Routine Completion Rate" 
            metric="completion" 
          />
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MilestoneCard />
        </motion.div>

        {/* Routine Completion Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <RoutineHeatmap />
        </motion.div>

        {/* Photo Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <PhotoTimeline />
        </motion.div>

        {/* Goals Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <GoalsTracking goals={userProfile.goals} />
        </motion.div>

        {/* Insights & Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Insights & Recommendations</h2>
            </div>
            
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-3 rounded-2xl bg-accent/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    insight.trend === 'up' ? 'bg-primary' : 
                    insight.trend === 'down' ? 'bg-destructive' : 'bg-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground mb-1">{insight.title}</div>
                    <div className="text-xs text-muted-foreground">{insight.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/journal')}
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1 rounded-2xl border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Add Entry</span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/dashboard')}
              variant="outline"
              className="h-16 flex flex-col items-center justify-center space-y-1 rounded-2xl border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <Target className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-foreground">Update Goals</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;