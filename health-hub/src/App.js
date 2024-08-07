import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import CreateWorkoutPage from './pages/CreateWorkoutPage';
import WorkoutProgramsPage from './pages/WorkoutProgramsPage';
import WorkoutProgramDetailPage from './pages/WorkoutProgramDetailPage';
import SearchBrowsePage from './pages/SearchBrowsePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import SignInForm from './pages/SignInForm';
import SignUpForm from './pages/SignUpForm';
import CommunityGuidelines from './pages/CommunityGuidelines';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-workout" element={<CreateWorkoutPage />} />
            <Route path="/workouts" element={<WorkoutProgramsPage />} />
            <Route path="/workout/:id" element={<WorkoutProgramDetailPage />} />
          </Route>
          <Route path="/search" element={<SearchBrowsePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
