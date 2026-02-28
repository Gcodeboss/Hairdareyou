
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NewLandingPage from "./components/NewLandingPage";
import Onboarding from "./pages/Onboarding";
import Submission from "./pages/Submission";
import ReviewWaiting from "./pages/ReviewWaiting";
import DashboardPreview from "./pages/DashboardPreview";
import PlanReady from "./pages/PlanReady";
import HairPlan from "./pages/HairPlan";
import Dashboard from "./pages/Dashboard";
import ContentHub from "./pages/ContentHub";
import Journal from "./pages/Journal";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Club from "./pages/Club";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NewLandingPage />} />
            <Route path="/club" element={<Club />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/submission" element={
              <ProtectedRoute>
                <Submission />
              </ProtectedRoute>
            } />
            <Route path="/review-waiting" element={
              <ProtectedRoute>
                <ReviewWaiting />
              </ProtectedRoute>
            } />
            <Route path="/dashboard-preview" element={
              <ProtectedRoute>
                <DashboardPreview />
              </ProtectedRoute>
            } />
            <Route path="/plan-ready" element={
              <ProtectedRoute>
                <PlanReady />
              </ProtectedRoute>
            } />
            <Route path="/hair-plan" element={
              <ProtectedRoute>
                <HairPlan />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute requireOnboarded>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/content-hub" element={
              <ProtectedRoute requireOnboarded>
                <ContentHub />
              </ProtectedRoute>
            } />
            <Route path="/journal" element={
              <ProtectedRoute requireOnboarded>
                <Journal />
              </ProtectedRoute>
            } />
            <Route path="/progress" element={
              <ProtectedRoute requireOnboarded>
                <Progress />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute requireOnboarded>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute requireOnboarded>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
