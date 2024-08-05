import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <ProtectedRoute path="/create-workout" component={CreateWorkoutPage} />
        <ProtectedRoute path="/workouts" component={WorkoutProgramsPage} />
        <ProtectedRoute path="/workout/:id" component={WorkoutProgramDetailPage} />
        <Route path="/search" component={SearchBrowsePage} />
      </Switch>
    </Router>
  );
}

export default App;