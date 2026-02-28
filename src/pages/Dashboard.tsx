import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Star, Book, PenTool, Settings, User, CheckCircle, TrendingUp } from 'lucide-react';
import { calculateHairHealthScore, getScoreCategory } from '@/utils/hairHealthScore';
import ProgressChart from '@/components/ProgressChart';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const navigate = useNavigate();
  const { setUserState } = useUser();

  useEffect(() => {
    setUserState('onboarded');
  }, [setUserState]);

  // Mock user data
  const userProfile = {
    hairType: 'curly',
    goals: ['Reduce frizz', 'Add volume', 'Enhance shine'],
    washFrequency: '2-3 times a week',
    routineCompletion: 0.8,
    daysActive: 14
  };

  const hairHealthScore = calculateHairHealthScore(userProfile);
  const scoreCategory = getScoreCategory(hairHealthScore);

  const progressData = [
    { day: 'Mon', score: 65, completion: 0.9 },
    { day: 'Tue', score: 68, completion: 0.8 },
    { day: 'Wed', score: 71, completion: 1.0 },
    { day: 'Thu', score: 69, completion: 0.7 },
    { day: 'Fri', score: 72, completion: 0.9 },
    { day: 'Sat', score: 74, completion: 0.8 },
    { day: 'Sun', score: 72, completion: 0.6 }
  ];

  const todayTasks = [
    { time: 'Morning', task: 'Gentle scalp massage (5 min)', completed: true },
    { time: 'Evening', task: 'Apply leave-in treatment', completed: false },
    { time: 'Tonight', task: 'Use silk pillowcase', completed: false }
  ];

  const stats = [
    { label: 'Streak', value: '7 days', icon: '🔥' },
    { label: 'Hair Score', value: `${hairHealthScore}/100`, icon: scoreCategory.emoji },
    { label: 'Week Progress', value: '5/7', icon: '📈' }
  ];

  const completeTask = (index: number) => {
    const taskElement = document.querySelector(`[data-task="${index}"]`);
    if (taskElement) {
      taskElement.classList.add('animate-scale-in');
    }
  };

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
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Hi Sarah, your scalp will thank you today! 🌙
            </h1>
            <p className="text-muted-foreground font-medium">Ready for your evening routine?</p>
          </div>
          <Button
            onClick={() => navigate('/settings')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </Button>
        </motion.div>

        {/* Enhanced Hair Health Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-6 mb-6 bg-gradient-to-r from-accent/30 to-primary/10 rounded-3xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1 font-semibold">Hair Health Score</div>
                <div className="flex items-center space-x-2">
                  <div className="text-3xl font-bold text-foreground">{hairHealthScore}</div>
                  <span className="text-lg">{scoreCategory.emoji}</span>
                </div>
                <div className={`text-sm font-semibold text-primary`}>
                  {scoreCategory.label}
                </div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground font-medium">+3 this week</div>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${hairHealthScore}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
              ></motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-4 text-center rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Chart */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ProgressChart 
            data={progressData} 
            title="📈 This Week's Progress" 
            metric="score" 
          />
        </motion.div>

        {/* Today's Routine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Today's Routine</h2>
            </div>
            
            <div className="space-y-3">
              {todayTasks.map((item, index) => (
                <motion.div 
                  key={index} 
                  data-task={index} 
                  className={`flex items-center space-x-3 p-3 rounded-2xl transition-all duration-300 ${
                    item.completed ? 'bg-primary/20' : 'bg-accent/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    item.completed ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {item.completed ? (
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-muted-foreground">{item.time}</div>
                    <div className={`text-sm font-medium ${
                      item.completed ? 'line-through text-muted-foreground' : 'text-foreground'
                    }`}>
                      {item.task}
                    </div>
                  </div>
                  {!item.completed && (
                    <Button 
                      size="sm" 
                      className="bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 font-medium hover:scale-105 transition-all duration-300"
                      onClick={() => completeTask(index)}
                    >
                      Mark Done
                    </Button>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Tip of the Day */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-6 mb-6 bg-gradient-to-r from-accent/30 to-primary/5 rounded-3xl border border-primary/20 shadow-lg">
            <h3 className="text-lg font-bold text-foreground mb-3">
              💡 Tip of the Day
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              Silk pillowcases reduce friction while you sleep, preventing breakage and maintaining your hair's moisture. Your hair will thank you in the morning!
            </p>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/journal')}
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 rounded-2xl border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <PenTool className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Hair Journal</span>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => navigate('/content-hub')}
              variant="outline"
              className="h-20 flex flex-col items-center justify-center space-y-2 rounded-2xl border-2 border-border hover:bg-accent hover:border-primary transition-all duration-300"
            >
              <Book className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Learn & Tips</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="max-w-md mx-auto flex justify-around">
            <Button variant="ghost" className="flex flex-col items-center space-y-1 rounded-2xl hover:scale-105 transition-all duration-300">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary">Routine</span>
            </Button>
            <Button 
              onClick={() => navigate('/progress')}
              variant="ghost" 
              className="flex flex-col items-center space-y-1 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <Star className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Progress</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center space-y-1 rounded-2xl hover:scale-105 transition-all duration-300">
              <Book className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Learn</span>
            </Button>
            <Button 
              onClick={() => navigate('/profile')}
              variant="ghost" 
              className="flex flex-col items-center space-y-1 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <User className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Profile</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;