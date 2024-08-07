import React from 'react';
import '../styles/styles.css';
import NavBar from '../components/NavBar';

function CommunityGuidelines() {
  return (
    <div className="Community-Guidelines">
      <NavBar />
      <section className="hero">
        <h1>Community Guidelines</h1>
        <p>Your community for fitness and wellness</p>
      </section>
      <section className="bullets">
        <h2>Important</h2>
        <ul>
          <li>Be nice</li>
          <li>Help others</li>
          <li>Inspire</li>
        </ul>
        </section>
      <footer>
        <p>&copy; 2024 HealthHub. All rights reserved.</p>
        <a href="/community-guidelines">Community Guidelines</a>
      </footer>
    </div>
  );
}

export default CommunityGuidelines;
