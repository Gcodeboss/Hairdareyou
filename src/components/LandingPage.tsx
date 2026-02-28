import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Users, Target, Camera, TrendingUp, Star, ArrowRight, Check, Menu, X } from 'lucide-react';
const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = [{
    label: 'Features',
    href: '#features'
  }, {
    label: 'How It Works',
    href: '#how-it-works'
  }, {
    label: 'Testimonials',
    href: '#testimonials'
  }, {
    label: 'About',
    href: '#about'
  }];
  const features = [{
    icon: Target,
    title: "Personalized Hair Plans",
    description: "Get custom routines tailored to your unique hair type, goals, and lifestyle preferences."
  }, {
    icon: Camera,
    title: "Progress Tracking",
    description: "Document your hair journey with photo timelines and track improvements over time."
  }, {
    icon: TrendingUp,
    title: "Expert Guidance",
    description: "Access professional tips and science-backed recommendations for optimal hair health."
  }, {
    icon: Users,
    title: "Community Support",
    description: "Connect with others on similar hair journeys and share experiences and tips."
  }];
  const steps = [{
    number: "01",
    title: "Take Hair Assessment",
    description: "Answer questions about your hair type, concerns, and goals to create your profile."
  }, {
    number: "02",
    title: "Get Your Custom Plan",
    description: "Receive a personalized routine with product recommendations and care tips."
  }, {
    number: "03",
    title: "Track Your Progress",
    description: "Follow your routine, upload photos, and watch your hair transform over time."
  }];
  const testimonials = [{
    name: "Sarah Chen",
    hairType: "Curly Hair",
    quote: "Finally found a routine that actually works for my curls. My hair has never been healthier!",
    rating: 5
  }, {
    name: "Marcus Johnson",
    hairType: "Textured Hair",
    quote: "The personalized approach made all the difference. Love tracking my progress with photos.",
    rating: 5
  }, {
    name: "Emma Rodriguez",
    hairType: "Fine Hair",
    quote: "Hair Dare You helped me understand my hair better and gave me confidence in my routine.",
    rating: 5
  }];
  const benefits = ["Personalized hair care routines", "Expert-backed recommendations", "Progress photo tracking", "Community support", "Product recommendations", "Goal achievement tracking"];
  return <div className="min-h-screen bg-warm-beige">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blush-rose/20 shadow-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              
              <span className="text-xl font-bold text-deep-mocha">Hair Dare You</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(item => <a key={item.label} href={item.href} className="text-deep-mocha hover:text-soft-terracotta transition-colors duration-200 font-medium">
                  {item.label}
                </a>)}
              <Button onClick={() => navigate('/onboarding')} className="bg-soft-terracotta hover:bg-soft-terracotta/90 text-white px-6 py-2 rounded-2xl shadow-soft transition-all duration-300 hover:scale-105">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-2xl hover:bg-blush-rose/20">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden border-t border-blush-rose/20">
              <div className="py-4 space-y-4">
                {navigationItems.map(item => <a key={item.label} href={item.href} className="block text-deep-mocha hover:text-soft-terracotta transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>)}
                <Button onClick={() => navigate('/onboarding')} className="bg-soft-terracotta hover:bg-soft-terracotta/90 text-white w-full rounded-2xl shadow-soft mt-4">
                  Get Started
                </Button>
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blush-rose/20 to-lavender-mist/30"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Enhanced Logo Display */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              
              
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-deep-mocha mb-6 leading-tight">
            Your Journey to
            <span className="block text-soft-terracotta">Healthier Hair</span>
          </h1>
          
          <p className="text-xl text-deep-mocha/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get personalized hair care routines, track your progress with photos, and achieve your hair goals with expert guidance tailored just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={() => navigate('/onboarding')} className="bg-soft-terracotta hover:bg-soft-terracotta/90 text-white px-8 py-4 text-lg rounded-3xl shadow-soft-lg transition-all duration-300 transform hover:scale-105">
              Start Your Hair Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-sm text-deep-mocha/60 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-honey-gold" />
              Join 10,000+ happy users
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-soft-terracotta">10k+</div>
              <div className="text-sm text-deep-mocha/70">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-soft-terracotta">95%</div>
              <div className="text-sm text-deep-mocha/70">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-soft-terracotta">4.9</div>
              <div className="text-sm text-deep-mocha/70">App Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-mocha mb-4">
              Everything You Need for Hair Success
            </h2>
            <p className="text-lg text-deep-mocha/70 max-w-2xl mx-auto">
              Our comprehensive platform combines personalization, tracking, and expert guidance to help you achieve your hair goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <Card key={index} className="border-0 shadow-soft hover:shadow-soft-lg transition-all duration-300 rounded-3xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-blush-rose/20 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-soft-terracotta" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-mocha mb-3">{feature.title}</h3>
                  <p className="text-deep-mocha/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-lavender-mist/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-mocha mb-4">
              How It Works
            </h2>
            <p className="text-lg text-deep-mocha/70">
              Three simple steps to transform your hair care routine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => <div key={index} className="text-center relative">
                <div className="w-20 h-20 mx-auto mb-6 bg-soft-terracotta rounded-2xl flex items-center justify-center shadow-soft">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-mocha mb-3">{step.title}</h3>
                <p className="text-deep-mocha/70 leading-relaxed">{step.description}</p>
                
                {index < steps.length - 1 && <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-soft-terracotta/50 mx-auto" />
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-mocha mb-6">
                Why Choose Hair Dare You?
              </h2>
              <p className="text-lg text-deep-mocha/70 mb-8 leading-relaxed">
                Join thousands who have transformed their hair care routine with our science-backed, personalized approach to hair wellness.
              </p>
              
              <div className="grid gap-4 mb-8">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-botanical-green rounded-full flex items-center justify-center mr-4">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-deep-mocha font-medium">{benefit}</span>
                  </div>)}
              </div>

              <Button onClick={() => navigate('/onboarding')} className="bg-soft-terracotta hover:bg-soft-terracotta/90 text-white px-8 py-4 text-lg rounded-3xl shadow-soft">
                Get Started Today
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blush-rose to-lavender-mist rounded-3xl shadow-soft-lg"></div>
              <div className="absolute inset-8 bg-white rounded-2xl shadow-soft flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-soft-terracotta mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-deep-mocha mb-2">Your Hair Transformation</h3>
                  <p className="text-deep-mocha/70">Starts Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blush-rose/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-deep-mocha mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-deep-mocha/70">
              Real stories from real people who transformed their hair
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-soft rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-honey-gold fill-current" />)}
                  </div>
                  <p className="text-deep-mocha italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-deep-mocha">{testimonial.name}</div>
                    <div className="text-sm text-deep-mocha/70">{testimonial.hairType}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-deep-mocha">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Join thousands of people who have discovered their best hair with Hair Dare You. Start your personalized journey today.
          </p>
          
          <Button onClick={() => navigate('/onboarding')} className="bg-soft-terracotta hover:bg-soft-terracotta/90 text-white px-12 py-4 text-xl rounded-3xl shadow-soft-lg transition-all duration-300 transform hover:scale-105">
            Start Your Hair Journey
            <Sparkles className="ml-3 w-6 h-6" />
          </Button>
          
          <p className="text-white/60 mt-6 text-sm">
            No commitment required • Get started in under 5 minutes
          </p>
        </div>
      </section>
    </div>;
};
export default LandingPage;