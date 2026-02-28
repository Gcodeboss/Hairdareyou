import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import PhotoUpload from '@/components/PhotoUpload';
import { motion } from 'framer-motion';

const Onboarding = () => {
  const navigate = useNavigate();
  const { setUserState } = useUser();
  const [step, setStep] = useState(1);

  useEffect(() => {
    setUserState('quiz-started');
  }, [setUserState]);
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    phone: '',
    email: '',
    name: '',
    hairType: '',
    goals: [],
    washFrequency: '',
    currentProducts: '',
    photos: {
      hair: null as File | null,
      scalp: null as File | null
    },
    photoConsent: false
  });

  const hairTypes = [
    { id: 'straight', label: 'Straight', emoji: '💇‍♀️' },
    { id: 'wavy', label: 'Wavy', emoji: '🌊' },
    { id: 'curly', label: 'Curly', emoji: '🌀' },
    { id: 'coily', label: 'Coily', emoji: '✨' }
  ];

  const getHairGoals = () => {
    const baseGoals = [
      'Reduce hair fall',
      'Grow longer hair', 
      'Add volume',
      'Reduce frizz',
      'Improve scalp health',
      'Enhance shine'
    ];

    const maleSpecificGoals = [
      'Prevent balding',
      'Thicken hairline',
      'Reduce dandruff',
      'Style hold',
      'Quick grooming'
    ];

    const femaleSpecificGoals = [
      'Heat damage repair',
      'Color protection',
      'Curl definition',
      'Length retention',
      'Smooth texture'
    ];

    if (formData.gender === 'male') {
      return [...baseGoals.slice(0, 4), ...maleSpecificGoals];
    } else if (formData.gender === 'female') {
      return [...baseGoals, ...femaleSpecificGoals.slice(0, 3)];
    }
    return baseGoals;
  };

  const getPersonalizedCopy = () => {
    if (formData.gender === 'male') {
      return {
        welcome: `What's your name, ${formData.name ? formData.name : 'sir'}?`,
        hairType: "What's your hair type?",
        goals: "What are your grooming goals?",
        routine: "Tell us about your routine",
        photos: "Upload your photos"
      };
    } else if (formData.gender === 'female') {
      return {
        welcome: `What's your name, beautiful?`,
        hairType: "What's your hair type?",
        goals: "What are your hair goals?",
        routine: "Tell us about your routine", 
        photos: "Upload your photos"
      };
    }
    return {
      welcome: "What's your name?",
      hairType: "What's your hair type?",
      goals: "What are your hair goals?",
      routine: "Tell us about your routine",
      photos: "Upload your photos"
    };
  };

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      setUserState('quiz-completed');
      navigate('/submission');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  const toggleGoal = (goal: string) => {
    const newGoals = formData.goals.includes(goal)
      ? formData.goals.filter(g => g !== goal)
      : [...formData.goals, goal];
    setFormData({ ...formData, goals: newGoals });
  };

  const copy = getPersonalizedCopy();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              How do you identify?
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              This helps us personalize your hair care journey
            </p>
            <div className="space-y-4">
              {[
                { id: 'female', label: 'Female', emoji: '👩' },
                { id: 'male', label: 'Male', emoji: '👨' },
                { id: 'non-binary', label: 'Non-binary', emoji: '🧑' },
                { id: 'prefer-not-to-say', label: 'Prefer not to say', emoji: '✨' }
              ].map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 rounded-2xl border-2 ${
                      formData.gender === option.id
                        ? 'border-primary bg-accent shadow-lg'
                        : 'border-border bg-card hover:bg-accent/30 hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, gender: option.id })}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{option.emoji}</span>
                      <span className="text-foreground font-medium text-lg">{option.label}</span>
                      {formData.gender === option.id && (
                        <div className="ml-auto w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              Let's get to know you better
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              This helps us create your personalized plan and share results
            </p>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Age
                </label>
                <Input
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="text-lg py-4 rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-lg py-4 rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Best Email to Share Results
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-lg py-4 rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm font-medium"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              {copy.welcome}
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              Let's personalize your experience
            </p>
            <Input
              placeholder="Enter your first name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-lg py-4 rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm font-medium"
            />
          </motion.div>
        );

      case 4:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              {copy.hairType}
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              This helps us recommend the right routine
            </p>
            <div className="grid grid-cols-2 gap-4">
              {hairTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className={`p-6 cursor-pointer transition-all duration-300 rounded-2xl border-2 ${
                      formData.hairType === type.id
                        ? 'border-primary bg-accent shadow-lg'
                        : 'border-border bg-card hover:shadow-md hover:scale-105'
                    }`}
                    onClick={() => setFormData({ ...formData, hairType: type.id })}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{type.emoji}</div>
                      <div className="font-semibold text-foreground">{type.label}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              {copy.goals}
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              Select all that apply
            </p>
            <div className="space-y-3">
              {getHairGoals().map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 rounded-2xl border-2 ${
                      formData.goals.includes(goal)
                        ? 'border-primary bg-accent shadow-lg'
                        : 'border-border bg-card hover:shadow-md'
                    }`}
                    onClick={() => toggleGoal(goal)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{goal}</span>
                      {formData.goals.includes(goal) && (
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              {copy.routine}
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              How often do you wash your hair?
            </p>
            <div className="space-y-4">
              {['Daily', '2-3 times a week', 'Weekly', 'Bi-weekly'].map((freq) => (
                <motion.div
                  key={freq}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 rounded-2xl border-2 ${
                      formData.washFrequency === freq
                        ? 'border-primary bg-accent shadow-lg'
                        : 'border-border bg-card hover:shadow-md'
                    }`}
                    onClick={() => setFormData({ ...formData, washFrequency: freq })}
                  >
                    <div className="text-center text-foreground font-medium">{freq}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">
                Current products you use (optional)
              </label>
              <Input
                placeholder="e.g., shampoo brand, oils, treatments..."
                value={formData.currentProducts}
                onChange={(e) => setFormData({ ...formData, currentProducts: e.target.value })}
                className="rounded-2xl border-2 border-border focus:border-primary bg-card shadow-sm font-medium"
              />
            </div>
          </motion.div>
        );

      case 7:
        return (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-foreground text-center">
              {copy.photos}
            </h2>
            <p className="text-muted-foreground text-center font-medium">
              Help our experts see your hair better
            </p>
            <div className="space-y-4">
              <PhotoUpload 
                type="hair" 
                onPhotoUpload={(file) => setFormData({ ...formData, photos: { ...formData.photos, hair: file } })}
                uploaded={!!formData.photos.hair}
              />
              <PhotoUpload 
                type="scalp" 
                onPhotoUpload={(file) => setFormData({ ...formData, photos: { ...formData.photos, scalp: file } })}
                uploaded={!!formData.photos.scalp}
              />
            </div>
            <div className="bg-accent/50 p-4 rounded-2xl border border-primary/20">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  className="mt-1 accent-primary" 
                  checked={formData.photoConsent}
                  onChange={(e) => setFormData({ ...formData, photoConsent: e.target.checked })}
                />
                <div className="text-sm text-foreground font-medium leading-relaxed">
                  I consent to have my photos reviewed by hair care experts to create my personalized plan
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-3 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span className="font-medium">Reviewed by Experts • Science + Self-Care</span>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        {/* Progress bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-muted-foreground font-medium">Step {step} of 7</span>
            <span className="text-sm text-foreground font-semibold">{Math.round((step / 7) * 100)}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500 origin-left"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 7) * 100}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Step content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation buttons */}
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            onClick={handleBack}
            variant="outline"
            className="flex-1 py-4 rounded-2xl border-2 border-border text-foreground hover:bg-accent font-medium hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            className="flex-1 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-lg font-semibold hover:scale-105 transition-all duration-300"
            disabled={step === 7 && !formData.photoConsent}
          >
            {step === 7 ? 'Submit' : 'Next'}
            {step !== 7 && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;