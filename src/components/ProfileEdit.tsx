import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, Save } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  hairType: string;
  goals: string[];
  washFrequency: string;
  age: number;
  routineCompletion: number;
  totalSessions: number;
  currentStreak: number;
  longestStreak: number;
  goalsAchieved: number;
  profilePhoto: string | null;
  daysActive: number;
}

interface ProfileEditProps {
  userProfile: UserProfile;
  onSave: (profile: UserProfile) => void;
  onClose: () => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({ userProfile, onSave, onClose }) => {
  const [editedProfile, setEditedProfile] = useState({ ...userProfile });
  const [newGoal, setNewGoal] = useState('');

  const hairTypeOptions = ['Straight', 'Wavy', 'Curly', 'Coily'];
  const washFrequencyOptions = ['Daily', '2-3 times a week', 'Weekly', 'Bi-weekly'];

  const handleSave = () => {
    onSave(editedProfile);
    onClose();
  };

  const addGoal = () => {
    if (newGoal.trim() && editedProfile.goals.length < 5) {
      setEditedProfile({
        ...editedProfile,
        goals: [...editedProfile.goals, newGoal.trim()]
      });
      setNewGoal('');
    }
  };

  const removeGoal = (index: number) => {
    setEditedProfile({
      ...editedProfile,
      goals: editedProfile.goals.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-deep-mocha">Edit Profile</h2>
            <Button
              onClick={onClose}
              variant="ghost"
              className="p-2 rounded-2xl hover:bg-blush-rose"
            >
              <X className="w-5 h-5 text-deep-mocha" />
            </Button>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-deep-mocha mb-2">Name</label>
              <Input
                value={editedProfile.name}
                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                className="rounded-2xl border-blush-rose focus:border-soft-terracotta"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-deep-mocha mb-2">Age</label>
              <Input
                type="number"
                value={editedProfile.age}
                onChange={(e) => setEditedProfile({ ...editedProfile, age: parseInt(e.target.value) || 0 })}
                className="rounded-2xl border-blush-rose focus:border-soft-terracotta"
              />
            </div>

            {/* Hair Type */}
            <div>
              <label className="block text-sm font-semibold text-deep-mocha mb-2">Hair Type</label>
              <select
                value={editedProfile.hairType}
                onChange={(e) => setEditedProfile({ ...editedProfile, hairType: e.target.value })}
                className="w-full p-3 rounded-2xl border border-blush-rose focus:border-soft-terracotta focus:outline-none bg-white"
              >
                {hairTypeOptions.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Wash Frequency */}
            <div>
              <label className="block text-sm font-semibold text-deep-mocha mb-2">Wash Frequency</label>
              <select
                value={editedProfile.washFrequency}
                onChange={(e) => setEditedProfile({ ...editedProfile, washFrequency: e.target.value })}
                className="w-full p-3 rounded-2xl border border-blush-rose focus:border-soft-terracotta focus:outline-none bg-white"
              >
                {washFrequencyOptions.map((freq) => (
                  <option key={freq} value={freq}>{freq}</option>
                ))}
              </select>
            </div>

            {/* Goals */}
            <div>
              <label className="block text-sm font-semibold text-deep-mocha mb-2">Hair Goals</label>
              <div className="space-y-2 mb-3">
                {editedProfile.goals.map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-blush-rose/30 rounded-xl">
                    <span className="text-sm text-deep-mocha font-medium">{goal}</span>
                    <Button
                      onClick={() => removeGoal(index)}
                      variant="ghost"
                      size="sm"
                      className="p-1 hover:bg-soft-terracotta/20 rounded-lg"
                    >
                      <X className="w-4 h-4 text-soft-terracotta" />
                    </Button>
                  </div>
                ))}
              </div>
              
              {editedProfile.goals.length < 5 && (
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a new goal..."
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    className="flex-1 rounded-2xl border-blush-rose focus:border-soft-terracotta"
                    onKeyPress={(e) => e.key === 'Enter' && addGoal()}
                  />
                  <Button
                    onClick={addGoal}
                    size="sm"
                    className="bg-botanical-green hover:bg-botanical-green/90 text-white rounded-2xl px-4"
                  >
                    Add
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3 mt-8">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 rounded-2xl border-2 border-deep-mocha/20 hover:bg-blush-rose"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 bg-soft-terracotta hover:bg-soft-terracotta/90 text-white rounded-2xl"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileEdit;
