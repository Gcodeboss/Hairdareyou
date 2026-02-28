import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Crown, Gift, Truck, Users, Star, ArrowRight, Check, Share2, UserPlus, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
const Club = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [referralEmail, setReferralEmail] = useState('');
  const referralCode = 'HAIR2024';
  const benefits = [{
    icon: Crown,
    title: "Free Personalized Plan",
    description: "Get your custom hair care routine at no cost"
  }, {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Earn points and unlock free products through our community"
  }, {
    icon: Users,
    title: "Expert Community",
    description: "Connect with hair experts and fellow members for free"
  }, {
    icon: Share2,
    title: "Refer & Earn",
    description: "Invite friends and earn rewards for successful referrals"
  }];
  const handleReferral = () => {
    if (!referralEmail) {
      toast({
        title: "Email Required",
        description: "Please enter a friend's email address to send the invitation.",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending referral
    toast({
      title: "Invitation Sent!",
      description: `Referral invitation sent to ${referralEmail}. You'll earn rewards when they join!`
    });
    setReferralEmail('');
  };
  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/onboarding?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard. Share it with your friends!"
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="mb-8">
            <Badge className="mb-4 text-sm">100% Free to Join</Badge>
            <h1 className="text-5xl font-bold font-montserrat mb-6 text-foreground">
              Join the Hair Dare You Club
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get your personalized hair care plan completely free! Connect with our community, 
              earn rewards, and transform your hair journey at no cost.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => navigate('/onboarding')}>
              Join Free Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">Member Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate in hair care with exclusive perks designed just for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Refer a Friend Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat mb-4">Invite Friends & Earn Rewards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Share the Hair Dare You experience with friends and earn exclusive rewards for every successful referral.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Send Invitation</h3>
                <p className="text-muted-foreground text-sm">
                  Invite friends via email and they'll get a special welcome bonus
                </p>
              </div>
              <div className="space-y-4">
                <Input type="email" placeholder="Enter friend's email address" value={referralEmail} onChange={e => setReferralEmail(e.target.value)} />
                <Button onClick={handleReferral} className="w-full">
                  Send Invitation
                  <Share2 className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>

            
          </div>

          <div className="mt-12 text-center">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-bold text-lg mb-2">Referral Rewards</h4>
              <p className="text-muted-foreground mb-4">
                Earn exclusive benefits when your friends join the Hair Dare You Club
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Gift className="w-4 h-4 text-primary" />
                  <span>Free product samples</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4 text-primary" />
                  <span>VIP community status</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>Exclusive content access</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            <h2 className="text-3xl font-bold font-montserrat mb-12">What Members Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The Hair Dare You Club gave me a completely free personalized plan that transformed 
                  my hair routine. The community support is incredible!"
                </p>
                <div className="text-sm font-medium">Sarah M., Club Member</div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I earned so many rewards by referring friends! The free plan worked amazing 
                  and now I get exclusive perks through the referral program."
                </p>
                <div className="text-sm font-medium">Jessica R., Club Member</div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            <h2 className="text-3xl font-bold font-montserrat mb-4">Ready to Start Your Free Hair Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of members who have transformed their hair completely free. Get your personalized plan today!
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => navigate('/onboarding')}>
              Get My Free Plan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Club;