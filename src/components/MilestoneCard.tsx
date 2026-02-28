
import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Flame, Target, Crown } from 'lucide-react';

const MilestoneCard = () => {
  const milestones = [
    {
      id: 'streak-7',
      title: '7-Day Streak',
      description: 'Complete routine for 7 consecutive days',
      progress: 7,
      target: 7,
      completed: true,
      icon: Flame,
      color: 'text-soft-terracotta',
      bgColor: 'bg-soft-terracotta/20'
    },
    {
      id: 'streak-30',
      title: '30-Day Streak',
      description: 'Complete routine for 30 consecutive days',
      progress: 21,
      target: 30,
      completed: false,
      icon: Crown,
      color: 'text-honey-gold',
      bgColor: 'bg-honey-gold/20'
    },
    {
      id: 'score-80',
      title: 'Hair Health Score 80+',
      description: 'Achieve a hair health score of 80 or higher',
      progress: 72,
      target: 80,
      completed: false,
      icon: Target,
      color: 'text-botanical-green',
      bgColor: 'bg-botanical-green/20'
    }
  ];

  const nextMilestone = milestones.find(m => !m.completed);
  const completedCount = milestones.filter(m => m.completed).length;

  return (
    <Card className="p-6 mb-6 rounded-3xl bg-white border border-blush-rose shadow-soft">
      <div className="flex items-center space-x-3 mb-4">
        <Award className="w-5 h-5 text-honey-gold" />
        <h2 className="text-lg font-bold text-deep-mocha">Milestones & Achievements</h2>
      </div>

      {/* Achievement Summary */}
      <div className="text-center mb-4 p-4 rounded-2xl bg-gradient-to-r from-honey-gold/20 to-botanical-green/20">
        <div className="text-2xl font-bold text-deep-mocha">{completedCount}/{milestones.length}</div>
        <div className="text-sm text-deep-mocha/70 font-medium">Achievements Unlocked</div>
      </div>

      {/* Next Milestone */}
      {nextMilestone && (
        <div className="mb-4">
          <div className="text-sm font-semibold text-deep-mocha mb-2">Next Milestone</div>
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-blush-rose/30">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${nextMilestone.bgColor}`}>
              <nextMilestone.icon className={`w-5 h-5 ${nextMilestone.color}`} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-deep-mocha">{nextMilestone.title}</div>
              <div className="text-xs text-deep-mocha/70 mb-2">{nextMilestone.description}</div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-soft-terracotta to-botanical-green h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(nextMilestone.progress / nextMilestone.target) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-deep-mocha/60 mt-1 font-medium">
                {nextMilestone.progress}/{nextMilestone.target}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Milestones */}
      <div className="space-y-2">
        <div className="text-sm font-semibold text-deep-mocha mb-2">All Achievements</div>
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`flex items-center space-x-3 p-2 rounded-2xl transition-all duration-200 ${
              milestone.completed ? 'bg-botanical-green/20' : 'bg-deep-mocha/5'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              milestone.completed ? 'bg-botanical-green' : milestone.bgColor
            }`}>
              <milestone.icon className={`w-4 h-4 ${
                milestone.completed ? 'text-white' : milestone.color
              }`} />
            </div>
            <div className="flex-1">
              <div className={`text-sm font-medium ${
                milestone.completed ? 'text-deep-mocha' : 'text-deep-mocha/70'
              }`}>
                {milestone.title}
              </div>
            </div>
            {milestone.completed && (
              <div className="text-xs font-semibold text-botanical-green">✓ Complete</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MilestoneCard;
