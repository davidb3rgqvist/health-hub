import React from 'react';
import Header from '../components/Header';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">
        <h1>Welcome to HealthHub</h1>
        <p>Your community for fitness and wellness</p>
      </section>
      <section className="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Track your progress</li>
          <li>Share your workouts</li>
          <li>Get inspired by others</li>
        </ul>
      </section>
      <section className="features">
        <h2>Features</h2>
        <p>Explore our unique features designed to help you stay fit and healthy.</p>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>"HealthHub has transformed my fitness journey!" - User A</blockquote>
        <blockquote>"I love sharing my workouts and getting feedback!" - User B</blockquote>
      </section>
      <footer>
        <p>&copy; 2024 HealthHub. All rights reserved.</p>
        <a href="/community-guidelines">Community Guidelines</a>
      </footer>
    </div>
  );
}

export default LandingPage;
