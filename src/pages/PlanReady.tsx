
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, ArrowRight } from 'lucide-react';

const PlanReady = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-sm mx-auto text-center">
        {/* Celebration animation with logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto flex items-center justify-center shadow-lg animate-pulse rounded-3xl bg-card p-2 border border-border">
            <img 
              src="/uploads/38d331b9-ac4e-41dc-86bb-a3faf9e60485.png" 
              alt="Hair Dare You Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          {/* Floating particles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-4 right-8">
            <div className="w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute top-4 left-8">
            <div className="w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          🎉 Your Hair Care Plan is Ready!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
          Our experts have crafted a personalized routine just for you. Ready to transform your hair?
        </p>

        <Card className="p-6 mb-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl border border-border shadow-lg">
          <div className="text-sm text-muted-foreground mb-2 font-medium">
            <strong>Plan created by:</strong>
          </div>
          <div className="text-lg font-bold text-foreground mb-1">
            Dr. Maya Patel, Trichologist
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            15+ years experience • Specializes in textured hair
          </div>
        </Card>

        <Button
          onClick={() => navigate('/hair-plan')}
          className="w-full py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105 mb-4 font-semibold"
        >
          View My Hair Plan
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-sm text-muted-foreground font-medium">
          Your personalized routine awaits ✨
        </p>
      </div>
    </div>
  );
};

export default PlanReady;
