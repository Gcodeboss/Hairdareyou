
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const RoutineHeatmap = () => {
  // Generate mock data for the last 30 days
  const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Mock completion rates with some pattern
      const completion = Math.random() > 0.2 ? Math.random() * 0.8 + 0.2 : 0;
      
      data.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        completion: completion
      });
    }
    
    return data;
  };

  const heatmapData = generateHeatmapData();
  const averageCompletion = heatmapData.reduce((sum, day) => sum + day.completion, 0) / heatmapData.length;
  const streak = heatmapData.reverse().findIndex(day => day.completion < 0.5);
  const currentStreak = streak === -1 ? heatmapData.length : streak;

  const getIntensityColor = (completion: number) => {
    if (completion === 0) return 'bg-deep-mocha/10';
    if (completion < 0.3) return 'bg-soft-terracotta/30';
    if (completion < 0.6) return 'bg-soft-terracotta/60';
    if (completion < 0.8) return 'bg-botanical-green/60';
    return 'bg-botanical-green';
  };

  return (
    <Card className="p-6 mb-6 rounded-3xl bg-white border border-blush-rose shadow-soft">
      <div className="flex items-center space-x-3 mb-4">
        <Calendar className="w-5 h-5 text-soft-terracotta" />
        <h2 className="text-lg font-bold text-deep-mocha">Routine Completion</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 rounded-2xl bg-blush-rose/30">
          <div className="text-lg font-bold text-deep-mocha">🔥 {currentStreak}</div>
          <div className="text-xs text-deep-mocha/70 font-medium">Day Streak</div>
        </div>
        <div className="text-center p-3 rounded-2xl bg-botanical-green/20">
          <div className="text-lg font-bold text-deep-mocha">{Math.round(averageCompletion * 100)}%</div>
          <div className="text-xs text-deep-mocha/70 font-medium">Avg. Completion</div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-deep-mocha mb-2">Last 30 Days</div>
        <div className="grid grid-cols-7 gap-1">
          {heatmapData.reverse().map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-deep-mocha/50 mb-1 font-medium">
                {index % 7 === 0 ? day.dayName : ''}
              </div>
              <div
                className={`w-8 h-8 rounded-lg ${getIntensityColor(day.completion)} border border-white shadow-sm transition-all duration-200 hover:scale-110 flex items-center justify-center`}
                title={`${day.date}: ${Math.round(day.completion * 100)}% completion`}
              >
                <span className="text-xs font-bold text-deep-mocha/70">{day.day}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-deep-mocha/60">
        <span className="font-medium">Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded bg-deep-mocha/10"></div>
          <div className="w-3 h-3 rounded bg-soft-terracotta/30"></div>
          <div className="w-3 h-3 rounded bg-soft-terracotta/60"></div>
          <div className="w-3 h-3 rounded bg-botanical-green/60"></div>
          <div className="w-3 h-3 rounded bg-botanical-green"></div>
        </div>
        <span className="font-medium">More</span>
      </div>
    </Card>
  );
};

export default RoutineHeatmap;
