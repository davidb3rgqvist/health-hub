import React, { useState } from 'react';
import workoutService from '../services/workoutService';
import '../styles/styles.css';
import NavBar from '../components/NavBar';

function CreateWorkoutPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleCreateWorkout = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    if (video) {
      formData.append('video', video);
    }
    try {
      await workoutService.createWorkoutProgram(formData);
      setMessage('Workout program created successfully.');
    } catch (error) {
      setMessage('Failed to create workout program.');
    }
  };

  return (
    <div>
      <NavBar />
      <div className="create-workout-container">
        <h2>Create Workout Program</h2>
        <form onSubmit={handleCreateWorkout}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Video:</label>
            <input
              type="file"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn-gradient">Create</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default CreateWorkoutPage;
