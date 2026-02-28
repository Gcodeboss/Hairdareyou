import { useUser } from '@/contexts/UserContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireOnboarded?: boolean;
}

const ProtectedRoute = ({ children, requireOnboarded = false }: ProtectedRouteProps) => {
  const { userState, isOnboarded } = useUser();

  // For routes that require completed onboarding
  if (requireOnboarded && !isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  // For routes that require at least quiz started
  if (userState === 'anonymous') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;