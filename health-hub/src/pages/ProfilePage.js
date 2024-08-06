import Header from '../components/Header';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <Header />
      <div className="sidebar">
        <div className="profile-info">
          <img src="profile-pic-url" alt="Profile" />
          <h2>Username</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#subscribed-programs">Subscribed Programs</a></li>
            <li><a href="#personal-notes">Personal Notes</a></li>
            <li><a href="#progress-tracking">Progress Tracking</a></li>
          </ul>
        </nav>
      </div>
     ```jsx
      <div className="main-content">
        <section className="profile-overview">
          <h2>Recent Activities</h2>
          <p>List of recent activities and achievements...</p>
        </section>
        <section className="feed">
          <h2>Feed</h2>
          <div className="feed-item">
            <p>Latest posts from followed users and suggested programs...</p>
            <div className="interaction-buttons">
              <button className="btn-like">Like</button>
              <button className="btn-comment">Comment</button>
              <button className="btn-share">Share</button>
            </div>
          </div>
        </section>
        <section className="subscribed-programs">
          <h2>Subscribed Programs</h2>
          <p>List of subscribed programs...</p>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
