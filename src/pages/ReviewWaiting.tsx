
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Star, Users, Target } from 'lucide-react';

const ReviewWaiting = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
            <Clock className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Your Plan is Being Created
          </h1>
          <p className="text-muted-foreground font-medium">
            Our hair experts are analyzing your profile
          </p>
        </div>

        {/* Progress */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-foreground font-medium">Profile received</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-foreground font-medium">Photos analyzed</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-foreground font-medium">Expert review in progress</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <span className="text-sm text-muted-foreground font-medium">Plan finalization</span>
            </div>
          </div>
          
          <div className="mt-6 bg-secondary/20 p-4 rounded-2xl border border-secondary/30">
            <div className="text-sm text-foreground text-center font-semibold">
              <strong>Estimated time:</strong> 18-24 hours
            </div>
          </div>
        </Card>

        {/* What's happening */}
        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-bold text-foreground">What's happening now:</h3>
          
          <Card className="p-4 rounded-2xl bg-card border border-border shadow-lg">
            <div className="flex items-start space-x-3">
              <Star className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Expert Analysis</div>
                <div className="text-sm text-muted-foreground font-medium">Licensed trichologists are reviewing your hair type and photos</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 rounded-2xl bg-card border border-border shadow-lg">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Custom Plan Creation</div>
                <div className="text-sm text-muted-foreground font-medium">Building a routine tailored to your specific goals and lifestyle</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 rounded-2xl bg-card border border-border shadow-lg">
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-secondary mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Product Matching</div>
                <div className="text-sm text-muted-foreground font-medium">Selecting the best products for your hair type and budget</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Preview dashboard button */}
        <Button
          onClick={() => navigate('/dashboard-preview')}
          variant="outline"
          className="w-full py-4 rounded-2xl border-2 hover:bg-accent mb-4 font-medium"
        >
          Preview Your Dashboard
        </Button>

        {/* Demo skip button */}
        <Button
          onClick={() => navigate('/plan-ready')}
          className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl text-sm font-semibold shadow-lg"
        >
          Skip to Plan Ready (Demo)
        </Button>
      </div>
    </div>
  );
};

export default ReviewWaiting;
