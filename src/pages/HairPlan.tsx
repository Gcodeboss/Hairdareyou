import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Calendar, FileText, CheckCircle, Crown, Sparkles, Package } from 'lucide-react';
import SubscriptionBox from '@/components/SubscriptionBox';

const HairPlan = () => {
  const navigate = useNavigate();

  const goals = [
    { icon: '🌱', text: 'Reduce hair fall by 60%' },
    { icon: '✨', text: 'Boost shine and softness' },
    { icon: '💪', text: 'Strengthen hair strands' }
  ];

  const weeklyRoutine = [
    { day: 'Mon', tasks: ['Scalp massage', 'Leave-in treatment'] },
    { day: 'Tue', tasks: ['Gentle brushing', 'Protective style'] },
    { day: 'Wed', tasks: ['Deep conditioning', 'Scalp oil'] },
    { day: 'Thu', tasks: ['Leave-in treatment', 'Silk pillowcase'] },
    { day: 'Fri', tasks: ['Gentle shampoo', 'Protein treatment'] },
    { day: 'Sat', tasks: ['Hair mask', 'Scalp massage'] },
    { day: 'Sun', tasks: ['Rest day', 'Protective style'] }
  ];

  const products = [
    {
      id: '1',
      name: 'Nourishing Scalp Oil',
      type: 'Treatment',
      price: '$24',
      rating: '4.8',
      image: '🌿',
      description: 'Deeply nourishing oil blend for scalp health',
      whyRecommended: 'Your curly hair type benefits from deep scalp nourishment. This oil blend will reduce dryness and promote healthy hair growth.',
      ingredients: ['Jojoba Oil', 'Rosemary Extract', 'Vitamin E'],
      benefits: ['Moisturizes scalp', 'Reduces flaking', 'Promotes growth']
    },
    {
      id: '2',
      name: 'Gentle Cleansing Shampoo',
      type: 'Cleanser',
      price: '$18',
      rating: '4.6',
      image: '🧴',
      description: 'Sulfate-free gentle cleanser for all hair types',
      whyRecommended: 'Based on your wash frequency of 2-3 times per week, this gentle formula won\'t strip your natural oils.',
      ingredients: ['Coconut Surfactants', 'Aloe Vera', 'Chamomile'],
      benefits: ['Gentle cleansing', 'Preserves oils', 'Soothes scalp']
    },
    {
      id: '3',
      name: 'Deep Repair Hair Mask',
      type: 'Treatment',
      price: '$32',
      rating: '4.9',
      image: '✨',
      description: 'Intensive weekly treatment for damaged hair',
      whyRecommended: 'Perfect for your goal of reducing frizz and enhancing shine. Use weekly for maximum benefits.',
      ingredients: ['Keratin Complex', 'Argan Oil', 'Shea Butter'],
      benefits: ['Repairs damage', 'Adds shine', 'Reduces frizz']
    },
    {
      id: '4',
      name: 'Leave-in Conditioner',
      type: 'Daily Care',
      price: '$22',
      rating: '4.7',
      image: '💧',
      description: 'Lightweight daily moisture for curly hair',
      whyRecommended: 'Essential for your daily routine. Provides moisture without weighing down your curls.',
      ingredients: ['Hyaluronic Acid', 'Plant Proteins', 'Glycerin'],
      benefits: ['Daily moisture', 'Curl definition', 'Heat protection']
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate('/plan-ready')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent active:animate-tap-scale"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Your Hair Plan</h1>
          <div></div>
        </div>

        {/* Goals Recap */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Your Goals</h2>
          </div>
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-xl">{goal.icon}</span>
                <span className="text-foreground font-medium">{goal.text}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Expert Analysis - Moved to position #2 */}
        <Card className="p-6 mb-6 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="w-5 h-5 text-foreground" />
            <h2 className="text-lg font-bold text-foreground">Expert Analysis</h2>
          </div>
          <div className="bg-card/70 p-4 rounded-2xl">
            <div className="text-sm text-foreground leading-relaxed font-medium">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                  MP
                </div>
                <div>
                  <div className="font-bold">Dr. Maya Patel, Trichologist</div>
                  <div className="text-xs text-muted-foreground">Curly Hair Specialist • 15+ years</div>
                </div>
              </div>
              <p className="mb-3">
                <strong>Your Hair Analysis:</strong>
              </p>
              <p className="mb-2">
                • Your photos show beautiful curly hair with moderate dryness at the ends and some frizz patterns typical of your hair type.
              </p>
              <p className="mb-2">
                • Based on your goals (reduce frizz, add volume, enhance shine), I recommend focusing on moisture retention and gentle styling.
              </p>
              <p className="mb-2">
                • Your wash frequency of 2-3x per week is perfect for curly hair - this preserves natural oils.
              </p>
              <p>
                • With consistent care following this plan, expect to see 40-60% improvement in frizz control and 70% improvement in shine within 8-12 weeks.
              </p>
            </div>
          </div>
        </Card>

        {/* Weekly Routine */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">Weekly Routine</h2>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {weeklyRoutine.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs font-bold text-muted-foreground mb-2">{day.day}</div>
                <div className="space-y-1">
                  {day.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="text-[8px] leading-tight bg-gradient-to-r from-primary/10 to-primary/5 px-1 py-0.5 rounded text-foreground font-medium break-words">
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Primary CTA - Start Free Plan */}
        <Button
          onClick={() => navigate('/dashboard')}
          className="w-full py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-soft transition-all duration-300 transform hover:scale-105 mb-6 font-semibold active:animate-tap-scale"
        >
          <CheckCircle className="w-5 h-5 mr-2" />
          Start Your Free Hair Plan
        </Button>

        {/* Freemium Messaging */}
        <div className="text-center mb-6">
          <p className="text-sm text-foreground font-medium mb-2">
            ✨ Start tracking your progress today - completely free!
          </p>
          <p className="text-xs text-muted-foreground">
            Get personalized guidance, track your journey, and see results
          </p>
        </div>

        {/* Upgrade Section */}
        <Card className="p-6 mb-6 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-dashed border-primary/40 shadow-soft">
          <div className="text-center mb-4">
            <Crown className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-bold text-foreground mb-2">Want to Accelerate Your Results?</h3>
            <p className="text-sm text-muted-foreground">
              Get the exact products recommended by our experts, delivered to your door
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-center">
              <Sparkles className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Expert-curated</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Personalized</p>
            </div>
            <div className="text-center">
              <Package className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Convenient</p>
            </div>
          </div>

          <Button
            onClick={() => {
              const subscriptionBox = document.querySelector('.subscription-box');
              if (subscriptionBox) {
                subscriptionBox.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="outline"
            className="w-full py-3 text-foreground border-2 border-primary hover:bg-primary/10 rounded-2xl font-semibold transition-all duration-300"
          >
            <Crown className="w-4 h-4 mr-2" />
            View Premium Products
          </Button>
        </Card>

        {/* Subscription Box - Now positioned as optional upgrade */}
        <div className="subscription-box">
          <SubscriptionBox products={products} />
        </div>
      </div>
    </div>
  );
};

export default HairPlan;
