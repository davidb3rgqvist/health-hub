import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import workoutService from '../services/workoutService';
import '../styles/styles.css';
import NavBar from '../components/NavBar';

function WorkoutProgramDetailPage() {
  const { id } = useParams();
  const [workoutProgram, setWorkoutProgram] = useState(null);

  useEffect(() => {
    const fetchWorkoutProgram = async () => {
      const data = await workoutService.getWorkoutProgramById(id);
      setWorkoutProgram(data);
    };
    fetchWorkoutProgram();
  }, [id]);

  if (!workoutProgram) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="workout-detail-container">
        <h2>{workoutProgram.title}</h2>
        <div className="video-container">
          <video src={workoutProgram.videoUrl} controls />
        </div>
        <p>{workoutProgram.description}</p>
        <div className="exercise-details">
          <h3>Exercise Details</h3>
          <ul>
            {workoutProgram.exercises.map((exercise, index) => (
              <li key={index}>
                <h4>{exercise.name}</h4>
                <p>Sets: {exercise.sets}, Reps: {exercise.reps}</p>
                <p>{exercise.tips}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="interaction-section">
          <button className="btn-like">Like</button>
          <button className="btn-comment">Comment</button>
          <button className="btn-rate">Rate</button>
        </div>
        <div className="comment-section">
          <h3>Comments</h3>
          <p>Comment section for user feedback...</p>
        </div>
        <div className="trainer-info">
          <h3>About the Trainer</h3>
          <img src={workoutProgram.trainer.profileImage} alt="Trainer" />
          <p>{workoutProgram.trainer.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkoutProgramDetailPage;
