
interface UserProfile {
  hairType: string;
  goals: string[];
  washFrequency: string;
  routineCompletion: number;
  daysActive: number;
}

export const calculateHairHealthScore = (profile: UserProfile): number => {
  let score = 50; // Base score
  
  // Hair type bonus (some types naturally score higher with good care)
  const hairTypeBonus = {
    'straight': 5,
    'wavy': 3,
    'curly': 2,
    'coily': 1
  };
  score += hairTypeBonus[profile.hairType as keyof typeof hairTypeBonus] || 0;
  
  // Goals alignment (more specific goals = higher potential)
  score += Math.min(profile.goals.length * 3, 15);
  
  // Wash frequency optimization
  const washFreqBonus = {
    'Daily': -5, // Too frequent can be damaging
    '2-3 times a week': 10, // Optimal for most
    'Weekly': 5,
    'Bi-weekly': 0
  };
  score += washFreqBonus[profile.washFrequency as keyof typeof washFreqBonus] || 0;
  
  // Routine completion (most important factor)
  score += profile.routineCompletion * 30;
  
  // Consistency bonus
  if (profile.daysActive >= 7) score += 10;
  if (profile.daysActive >= 14) score += 5;
  if (profile.daysActive >= 30) score += 10;
  
  return Math.min(Math.max(score, 0), 100);
};

export const getScoreCategory = (score: number): { label: string; color: string; emoji: string } => {
  if (score >= 85) return { label: 'Excellent', color: 'text-botanical-green', emoji: '🌟' };
  if (score >= 70) return { label: 'Good', color: 'text-honey-gold', emoji: '✨' };
  if (score >= 55) return { label: 'Fair', color: 'text-soft-terracotta', emoji: '🌱' };
  return { label: 'Needs Work', color: 'text-deep-mocha', emoji: '💪' };
};
