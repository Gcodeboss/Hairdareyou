
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Star, Play } from 'lucide-react';

const ContentHub = () => {
  const navigate = useNavigate();

  const articles = [
    {
      title: '5 Hair Myths That Are Damaging Your Hair',
      category: 'Myths & Facts',
      readTime: '3 min read',
      image: '🚫',
      excerpt: 'Debunking common misconceptions about hair care that might be sabotaging your routine.'
    },
    {
      title: 'The Science of Scalp Health',
      category: 'Education',
      readTime: '5 min read',
      image: '🔬',
      excerpt: 'Understanding how your scalp health directly impacts hair growth and strength.'
    },
    {
      title: 'Celebrity Hair Secrets Revealed',
      category: 'Celebrity Tips',
      readTime: '4 min read',
      image: '⭐',
      excerpt: 'What A-list celebrities actually do to maintain their gorgeous hair.'
    },
    {
      title: 'DIY Hair Masks That Actually Work',
      category: 'DIY',
      readTime: '6 min read',
      image: '🥑',
      excerpt: 'Simple, science-backed recipes using ingredients from your kitchen.'
    }
  ];

  const videos = [
    {
      title: 'Perfect Scalp Massage Technique',
      duration: '2:30',
      thumbnail: '💆‍♀️'
    },
    {
      title: 'How to Apply Leave-in Treatment',
      duration: '1:45',
      thumbnail: '💧'
    }
  ];

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
          <h1 className="text-xl font-bold text-foreground">Learn & Tips</h1>
          <div></div>
        </div>

        {/* Featured Article */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl border border-primary/20 shadow-soft">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">✨</div>
            <div>
              <div className="text-sm text-primary font-bold mb-1">FEATURED</div>
              <h2 className="text-lg font-bold text-foreground mb-2">
                Your Hair Type Guide: Understanding Curly Hair
              </h2>
              <p className="text-sm text-muted-foreground mb-3 font-medium">
                Everything you need to know about caring for your specific curl pattern.
              </p>
              <Button size="sm" className="bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 active:animate-tap-scale font-medium">
                Read Now
              </Button>
            </div>
          </div>
        </Card>

        {/* Video Tutorials */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Video Tutorials</h3>
          <div className="space-y-3">
            {videos.map((video, index) => (
              <Card key={index} className="p-4 rounded-2xl bg-card border border-border shadow-soft hover:shadow-lg transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center text-2xl">
                    {video.thumbnail}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{video.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span className="font-medium">{video.duration}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full p-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:animate-tap-scale">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Articles</h3>
          <div className="space-y-4">
            {articles.map((article, index) => (
              <Card key={index} className="p-5 hover:shadow-lg transition-all duration-200 cursor-pointer rounded-2xl bg-card border border-border shadow-soft active:animate-tap-scale">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-accent text-primary px-2 py-1 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span className="font-medium">{article.readTime}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-foreground mb-2 leading-tight">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Tips Section */}
        <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl border border-primary/30 shadow-soft">
          <div className="flex items-center space-x-3 mb-4">
            <Star className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Expert Tip</h3>
          </div>
          <p className="text-foreground text-sm leading-relaxed mb-4 font-medium">
            "The key to healthy hair isn't expensive products—it's consistency. Stick to your routine for at least 8 weeks to see real changes."
          </p>
          <div className="text-xs text-muted-foreground font-semibold">
            — Dr. Maya Patel, Trichologist
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContentHub;
