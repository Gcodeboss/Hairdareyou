
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Camera, Save, Calendar, TrendingUp, Smile } from 'lucide-react';

const Journal = () => {
  const navigate = useNavigate();
  const [feelings, setFeelings] = useState({
    dryness: 3,
    frizz: 2,
    shine: 4,
    softness: 3,
    overall: 4
  });
  const [mood, setMood] = useState(3);
  const [notes, setNotes] = useState('');
  const [todayPhoto, setTodayPhoto] = useState<string | null>(null);

  const feelingLabels = {
    dryness: 'How dry does your hair feel?',
    frizz: 'How much frizz do you notice?',
    shine: 'How shiny is your hair?',
    softness: 'How soft does your hair feel?',
    overall: 'Overall hair satisfaction?'
  };

  const moodEmojis = ['😢', '😕', '😐', '😊', '😍'];

  const handleSliderChange = (feeling: string, value: number) => {
    setFeelings({ ...feelings, [feeling]: value });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setTodayPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const renderSlider = (feeling: string) => (
    <div key={feeling} className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-foreground">
          {feelingLabels[feeling as keyof typeof feelingLabels]}
        </label>
        <span className="text-sm text-muted-foreground font-bold bg-accent px-2 py-1 rounded-full">
          {feelings[feeling as keyof typeof feelings]}/5
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="1"
          max="5"
          value={feelings[feeling as keyof typeof feelings]}
          onChange={(e) => handleSliderChange(feeling, parseInt(e.target.value))}
          className="w-full h-3 bg-accent rounded-full appearance-none cursor-pointer slider active:animate-tap-scale"
          style={{
            background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 50%, hsl(var(--primary) / 0.6) 100%)`
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={() => navigate('/dashboard')}
            variant="ghost"
            className="p-2 rounded-2xl hover:bg-accent active:animate-tap-scale"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Hair Journal</h1>
          <div></div>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-medium">Today, December 3rd</span>
        </div>

        {/* Mood Tracker */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <Smile className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">How are you feeling today?</h2>
          </div>
          <div className="flex justify-between items-center">
            {moodEmojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => setMood(index + 1)}
                className={`text-3xl p-2 rounded-2xl transition-all duration-300 active:animate-tap-scale ${
                  mood === index + 1 ? 'bg-primary/30 scale-125' : 'hover:bg-accent'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </Card>

        {/* Hair Feelings */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <h2 className="text-lg font-bold text-foreground mb-6">
            How's your hair today? 💭
          </h2>
          <div className="space-y-6">
            {Object.keys(feelings).map(feeling => renderSlider(feeling))}
          </div>
        </Card>

        {/* Photo Comparison */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <h3 className="text-lg font-bold text-foreground mb-4">
            📸 Today's Progress Photo
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-sm font-semibold text-foreground mb-2">Last Week</div>
              <div className="aspect-square bg-accent rounded-2xl flex items-center justify-center">
                <img 
                  src="/placeholder.svg?height=120&width=120" 
                  alt="Last week" 
                  className="w-full h-full object-cover rounded-2xl opacity-70"
                />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground mb-2">Today</div>
              {todayPhoto ? (
                <img src={todayPhoto} alt="Today" className="aspect-square object-cover rounded-2xl" />
              ) : (
                <label className="aspect-square border-2 border-dashed border-primary/50 bg-accent rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/10 transition-all duration-300 active:animate-tap-scale">
                  <Camera className="w-8 h-8 text-primary mb-2" />
                  <span className="text-xs text-foreground font-semibold text-center">Tap to add</span>
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              )}
            </div>
          </div>
          
          {todayPhoto && (
            <div className="bg-primary/10 p-3 rounded-2xl border border-primary/30">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-semibold">
                  Great progress! Your hair looks shinier compared to last week ✨
                </span>
              </div>
            </div>
          )}
        </Card>

        {/* Notes */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <h3 className="text-lg font-bold text-foreground mb-4">
            ✍️ Notes
          </h3>
          <textarea
            placeholder="How did your hair routine go today? Any observations, changes, or thoughts to remember..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-32 p-4 border-2 border-border rounded-2xl resize-none focus:border-primary focus:outline-none text-sm bg-background text-foreground font-medium placeholder:text-muted-foreground"
          />
        </Card>

        {/* Recent Entries Preview */}
        <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
          <h3 className="text-lg font-bold text-foreground mb-4">
            📅 Recent Entries
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-accent rounded-2xl hover:bg-primary/10 transition-colors cursor-pointer">
              <div>
                <div className="text-sm font-semibold text-foreground">December 2nd</div>
                <div className="text-xs text-muted-foreground font-medium">Overall satisfaction: 4/5 • Mood: 😊</div>
              </div>
              <div className="text-xs text-primary font-semibold">View</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-accent rounded-2xl hover:bg-primary/10 transition-colors cursor-pointer">
              <div>
                <div className="text-sm font-semibold text-foreground">December 1st</div>
                <div className="text-xs text-muted-foreground font-medium">Overall satisfaction: 3/5 • Mood: 😐</div>
              </div>
              <div className="text-xs text-primary font-semibold">View</div>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <Button
          onClick={() => {
            navigate('/dashboard');
          }}
          className="w-full py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-soft transition-all duration-300 transform hover:scale-105 font-semibold active:animate-tap-scale"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Today's Entry
        </Button>
      </div>
    </div>
  );
};

export default Journal;
