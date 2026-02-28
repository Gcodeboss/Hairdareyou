import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, Edit, Settings, Camera, User, Star, Trophy, Calendar, Target } from 'lucide-react';
import { calculateHairHealthScore, getScoreCategory } from '@/utils/hairHealthScore';
import ProfileEdit from '@/components/ProfileEdit';
import AchievementBadge from '@/components/AchievementBadge';
import { motion } from 'framer-motion';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data - in real app this would come from context/state
  const [userProfile, setUserProfile] = useState({
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    joinDate: '2024-01-15',
    hairType: 'Curly',
    goals: ['Reduce frizz', 'Add volume', 'Enhance shine'],
    washFrequency: '2-3 times a week',
    age: 28,
    routineCompletion: 0.85,
    totalSessions: 42,
    currentStreak: 7,
    longestStreak: 21,
    goalsAchieved: 2,
    profilePhoto: null,
    daysActive: 28
  });

  const hairHealthScore = calculateHairHealthScore(userProfile);
  const scoreCategory = getScoreCategory(hairHealthScore);
  
  const memberSince = new Date(userProfile.joinDate).toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  const achievements = [
    { id: 1, title: 'First Week', description: 'Complete 7 days of routine', earned: true, icon: '🌟' },
    { id: 2, title: 'Consistency Champion', description: '21-day streak achieved', earned: true, icon: '🏆' },
    { id: 3, title: 'Progress Master', description: 'Hair score improved by 20+', earned: true, icon: '📈' },
    { id: 4, title: 'Goal Crusher', description: 'Achieved 2 hair goals', earned: true, icon: '🎯' },
    { id: 5, title: 'Photo Journey', description: 'Upload 10 progress photos', earned: false, icon: '📸' },
    { id: 6, title: 'Monthly Milestone', description: 'Complete 30 days', earned: false, icon: '🗓️' }
  ];

  const earnedAchievements = achievements.filter(a => a.earned);

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
          <h1 className="text-xl font-bold text-foreground">Profile</h1>
          <Button
            onClick={() => setIsEditing(true)}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <Edit className="w-5 h-5 text-foreground" />
          </Button>
        </motion.div>

        {/* Profile Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-gradient-to-r from-accent/30 to-primary/10 border border-primary/20 shadow-lg card-hover">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
                  <AvatarImage src={userProfile.profilePhoto} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
                <p className="text-muted-foreground text-sm font-medium">Member since {memberSince}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg">{scoreCategory.emoji}</span>
                  <span className="text-sm font-semibold text-foreground">Hair Score: {hairHealthScore}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { icon: '🔥', value: userProfile.currentStreak, label: 'Current Streak' },
            { icon: '🎯', value: userProfile.goalsAchieved, label: 'Goals Achieved' },
            { icon: '📊', value: userProfile.totalSessions, label: 'Sessions' }
          ].map((stat, index) => (
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

        {/* Hair Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Hair Profile</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Hair Type</span>
                <span className="text-foreground font-semibold">{userProfile.hairType}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Wash Frequency</span>
                <span className="text-foreground font-semibold">{userProfile.washFrequency}</span>
              </div>
              <div>
                <span className="text-muted-foreground font-medium mb-2 block">Current Goals</span>
                <div className="space-y-2">
                  {userProfile.goals.map((goal, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground font-medium">{goal}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Trophy className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Achievements</h3>
              <span className="text-sm text-muted-foreground font-medium">({earnedAchievements.length}/{achievements.length})</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AchievementBadge achievement={achievement} />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-bold text-foreground">Account</h3>
            </div>
            <div className="space-y-3">
              {[
                'Notification Settings',
                'Privacy & Data',
                'Help & Support'
              ].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left p-3 rounded-2xl hover:bg-accent/50 transition-all duration-300"
                  >
                    <span className="text-foreground font-medium">{item}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-md mx-auto flex justify-around">
            <Button 
              onClick={() => navigate('/dashboard')}
              variant="ghost" 
              className="flex flex-col items-center space-y-1 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Routine</span>
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
              <User className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary">Profile</span>
            </Button>
          </div>
        </motion.div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <ProfileEdit
            userProfile={userProfile}
            onSave={setUserProfile}
            onClose={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;