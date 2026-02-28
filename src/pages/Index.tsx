
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Welcome page automatically
    navigate('/');
  }, [navigate]);

  return null;
};

export default Index;
