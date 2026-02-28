
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Droplets, Sun, Moon, Star } from 'lucide-react';

const DashboardPreview = () => {
  const navigate = useNavigate();

  const routineItems = [
    { time: 'Morning', icon: Sun, task: 'Gentle scalp massage', completed: false },
    { time: 'Evening', icon: Moon, task: 'Apply leave-in treatment', completed: false },
    { time: 'Tonight', icon: Droplets, task: 'Deep conditioning mask', completed: false }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate('/review-waiting')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Dashboard Preview</h1>
          <div></div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Good morning, Sarah! 👋
          </h2>
          <p className="text-muted-foreground font-medium">
            Your personalized plan will be ready soon
          </p>
        </div>

        {/* Hair Health Score */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl border border-border shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground mb-1 font-semibold">Hair Health Score</div>
              <div className="text-3xl font-bold text-foreground">--</div>
              <div className="text-sm text-muted-foreground font-medium">Coming soon</div>
            </div>
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-primary" />
            </div>
          </div>
        </Card>

        {/* Today's Routine Preview */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Today's Routine</h3>
          </div>
          
          <div className="space-y-3">
            {routineItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-secondary/30 rounded-2xl opacity-60">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-muted-foreground">{item.time}</div>
                  <div className="text-sm text-muted-foreground font-medium">{item.task}</div>
                </div>
                <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-secondary/20 rounded-2xl text-center border border-secondary/30">
            <div className="text-sm text-foreground font-semibold">
              Unlock your routine when your plan is ready! ✨
            </div>
          </div>
        </Card>

        {/* Tip of the Day */}
        <Card className="p-6 mb-6 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 border border-border shadow-lg">
          <h3 className="text-lg font-bold text-foreground mb-3">
            💡 Tip of the Day
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
            While you wait, remember that consistency is key! Even small daily habits can make a big difference in your hair health journey.
          </p>
        </Card>

        {/* Action buttons */}
        <div className="space-y-3">
          <Button
            onClick={() => navigate('/content-hub')}
            variant="outline"
            className="w-full py-4 rounded-2xl border-2 hover:bg-accent font-medium"
          >
            Explore Hair Care Tips
          </Button>
          
          <Button
            onClick={() => navigate('/journal')}
            variant="outline"
            className="w-full py-4 rounded-2xl border-2 hover:bg-accent font-medium"
          >
            Start Hair Journal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
