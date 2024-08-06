import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import CreateWorkoutPage from './pages/CreateWorkoutPage';
import WorkoutProgramsPage from './pages/WorkoutProgramsPage';
import WorkoutProgramDetailPage from './pages/WorkoutProgramDetailPage';
import SearchBrowsePage from './pages/SearchBrowsePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <ProtectedRoute path="/profile" element={<ProfilePage />} />
        <ProtectedRoute path="/create-workout" element={<CreateWorkoutPage />} />
        <ProtectedRoute path="/workouts" element={<WorkoutProgramsPage />} />
        <ProtectedRoute path="/workout/:id" element={<WorkoutProgramDetailPage />} />
        <Route path="/search" element={<SearchBrowsePage />} />
      </Routes>
    </Router>
  );
}

export default App;
