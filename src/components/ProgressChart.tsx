
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface ProgressData {
  day: string;
  score: number;
  completion: number;
}

interface ProgressChartProps {
  data: ProgressData[];
  title: string;
  metric: 'score' | 'completion';
}

const ProgressChart = ({ data, title, metric }: ProgressChartProps) => {
  const color = metric === 'score' ? '#EB8876' : '#BFD8A7';
  
  return (
    <Card className="p-6 rounded-3xl bg-white border border-blush-rose shadow-soft">
      <h3 className="text-lg font-bold text-deep-mocha mb-4">{title}</h3>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#4E3E3E' }}
            />
            <YAxis 
              domain={[0, metric === 'score' ? 100 : 1]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#4E3E3E' }}
            />
            <Line 
              type="monotone" 
              dataKey={metric} 
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProgressChart;
