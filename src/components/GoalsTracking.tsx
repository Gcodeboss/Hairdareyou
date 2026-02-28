
import React from 'react';
import { Card } from '@/components/ui/card';
import { Target, CheckCircle, TrendingUp } from 'lucide-react';

interface GoalsTrackingProps {
  goals: string[];
}

const GoalsTracking = ({ goals }: GoalsTrackingProps) => {
  // Mock progress data for each goal
  const goalProgress = [
    {
      goal: 'Reduce frizz',
      progress: 0.75,
      status: 'on-track',
      recommendation: 'Continue with leave-in treatments',
      improvement: '+25%'
    },
    {
      goal: 'Add volume',
      progress: 0.60,
      status: 'needs-attention',
      recommendation: 'Try volumizing mousse on wash days',
      improvement: '+15%'
    },
    {
      goal: 'Enhance shine',
      progress: 0.85,
      status: 'excellent',
      recommendation: 'Great progress! Maintain current routine',
      improvement: '+40%'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-botanical-green';
      case 'on-track':
        return 'text-honey-gold';
      case 'needs-attention':
        return 'text-soft-terracotta';
      default:
        return 'text-deep-mocha/50';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-botanical-green/20';
      case 'on-track':
        return 'bg-honey-gold/20';
      case 'needs-attention':
        return 'bg-soft-terracotta/20';
      default:
        return 'bg-deep-mocha/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="w-4 h-4 text-botanical-green" />;
      case 'on-track':
        return <TrendingUp className="w-4 h-4 text-honey-gold" />;
      case 'needs-attention':
        return <Target className="w-4 h-4 text-soft-terracotta" />;
      default:
        return <Target className="w-4 h-4 text-deep-mocha/50" />;
    }
  };

  const overallProgress = goalProgress.reduce((sum, goal) => sum + goal.progress, 0) / goalProgress.length;

  return (
    <Card className="p-6 mb-6 rounded-3xl bg-white border border-blush-rose shadow-soft">
      <div className="flex items-center space-x-3 mb-4">
        <Target className="w-5 h-5 text-soft-terracotta" />
        <h2 className="text-lg font-bold text-deep-mocha">Goals Tracking</h2>
      </div>

      {/* Overall Progress */}
      <div className="text-center mb-6 p-4 rounded-2xl bg-gradient-to-r from-botanical-green/20 to-soft-terracotta/20">
        <div className="text-2xl font-bold text-deep-mocha mb-1">
          {Math.round(overallProgress * 100)}%
        </div>
        <div className="text-sm text-deep-mocha/70 font-medium mb-3">Overall Goal Progress</div>
        <div className="w-full bg-white/50 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-soft-terracotta to-botanical-green h-3 rounded-full transition-all duration-1000"
            style={{ width: `${overallProgress * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Individual Goals */}
      <div className="space-y-4">
        <div className="text-sm font-semibold text-deep-mocha mb-2">Individual Goals</div>
        {goalProgress.map((goalData, index) => (
          <div key={index} className={`p-4 rounded-2xl ${getStatusBg(goalData.status)}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {getStatusIcon(goalData.status)}
                <span className="text-sm font-semibold text-deep-mocha">
                  {goalData.goal}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-bold ${getStatusColor(goalData.status)}`}>
                  {goalData.improvement}
                </span>
                <span className="text-sm font-bold text-deep-mocha">
                  {Math.round(goalData.progress * 100)}%
                </span>
              </div>
            </div>
            
            <div className="w-full bg-white/50 rounded-full h-2 mb-3">
              <div 
                className={`h-2 rounded-full transition-all duration-1000 ${
                  goalData.status === 'excellent' ? 'bg-botanical-green' :
                  goalData.status === 'on-track' ? 'bg-honey-gold' : 'bg-soft-terracotta'
                }`}
                style={{ width: `${goalData.progress * 100}%` }}
              ></div>
            </div>
            
            <div className="text-xs text-deep-mocha/70">
              💡 {goalData.recommendation}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-deep-mocha/10">
        <div className="text-sm font-semibold text-deep-mocha mb-3">Quick Actions</div>
        <div className="grid grid-cols-2 gap-3">
          <button className="p-3 rounded-2xl bg-blush-rose/30 text-xs font-semibold text-deep-mocha hover:bg-blush-rose transition-colors">
            Update Goals
          </button>
          <button className="p-3 rounded-2xl bg-botanical-green/20 text-xs font-semibold text-deep-mocha hover:bg-botanical-green/30 transition-colors">
            Set New Goal
          </button>
        </div>
      </div>
    </Card>
  );
};

export default GoalsTracking;
