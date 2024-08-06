import React, { useEffect, useState } from 'react';
import workoutService from '../services/workoutService';
import Header from '../components/Header';
import './WorkoutProgramsPage.css';

function WorkoutProgramsPage() {
  const [workoutPrograms, setWorkoutPrograms] = useState([]);

  useEffect(() => {
    const fetchWorkoutPrograms = async () => {
      const response = await workoutService.getWorkoutPrograms();
      setWorkoutPrograms(response);
    };
    fetchWorkoutPrograms();
  }, []);

  return (
    <div>
      <Header />
      <div className="workout-programs-container">
        <h2>Workout Programs</h2>
        <ul>
          {workoutPrograms.map((program) => (
            <li key={program.id} className="workout-program-item">
              <h3>{program.name}</h3>
              <p>{program.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WorkoutProgramsPage;
