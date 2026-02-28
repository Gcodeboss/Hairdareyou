import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HairQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HairQuizModal = ({ isOpen, onClose }: HairQuizModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Close the modal and navigate to onboarding
      onClose();
      navigate('/onboarding');
    }
  }, [isOpen, onClose, navigate]);

  // This component no longer renders a modal, it just handles navigation
  return null;
};

export default HairQuizModal;