
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Submission = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/review-waiting');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <Card className="max-w-sm mx-auto p-8 text-center shadow-lg rounded-3xl bg-card border border-border">
        <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Profile Submitted! ✨
        </h2>
        
        <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
          Thank you for sharing your hair journey with us. Our experts are now reviewing your profile to create your personalized plan.
        </p>
        
        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">Analyzing your hair type...</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="font-medium">Creating your routine...</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="font-medium">Matching perfect products...</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Submission;
