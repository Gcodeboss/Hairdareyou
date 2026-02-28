import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserContextType {
  userState: 'anonymous' | 'quiz-started' | 'quiz-completed' | 'onboarded';
  setUserState: (state: 'anonymous' | 'quiz-started' | 'quiz-completed' | 'onboarded') => void;
  isOnboarded: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserStateInternal] = useState<'anonymous' | 'quiz-started' | 'quiz-completed' | 'onboarded'>('anonymous');

  const setUserState = (state: 'anonymous' | 'quiz-started' | 'quiz-completed' | 'onboarded') => {
    setUserStateInternal(state);
    localStorage.setItem('userState', state);
  };

  useEffect(() => {
    const savedState = localStorage.getItem('userState') as 'anonymous' | 'quiz-started' | 'quiz-completed' | 'onboarded' | null;
    if (savedState) {
      setUserStateInternal(savedState);
    }
  }, []);

  const isOnboarded = userState === 'onboarded' || userState === 'quiz-completed';

  return (
    <UserContext.Provider value={{ userState, setUserState, isOnboarded }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};