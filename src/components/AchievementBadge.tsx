
import React from 'react';
import { Card } from '@/components/ui/card';

interface Achievement {
  id: number;
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

interface AchievementBadgeProps {
  achievement: Achievement;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement }) => {
  return (
    <Card className={`p-3 text-center rounded-2xl transition-all duration-200 ${
      achievement.earned 
        ? 'bg-gradient-to-br from-honey-gold/20 to-botanical-green/20 border-honey-gold/50 shadow-soft hover:scale-105' 
        : 'bg-gray-50 border-gray-200 opacity-60'
    }`}>
      <div className="text-2xl mb-2">{achievement.icon}</div>
      <div className={`text-xs font-bold mb-1 ${
        achievement.earned ? 'text-deep-mocha' : 'text-gray-400'
      }`}>
        {achievement.title}
      </div>
      <div className={`text-xs leading-tight ${
        achievement.earned ? 'text-deep-mocha/70' : 'text-gray-400'
      }`}>
        {achievement.description}
      </div>
      {achievement.earned && (
        <div className="mt-2">
          <div className="w-full h-1 bg-gradient-to-r from-honey-gold to-botanical-green rounded-full"></div>
        </div>
      )}
    </Card>
  );
};

export default AchievementBadge;
