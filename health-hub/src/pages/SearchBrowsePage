import React, { useState } from 'react';
import workoutService from '../services/workoutService';
import Header from '../components/Header';
import './SearchBrowsePage.css';

function SearchBrowsePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await workoutService.searchWorkoutPrograms(searchTerm);
    setResults(data);
  };

  return (
    <div>
      <Header />
      <div className="search-browse-container">
        <h2>Search Workout Programs</h2>
        <form onSubmit={handleSearch}>
          <div>
            <label>Search:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-gradient">Search</button>
        </form>
        <div className="results">
          {results.map((program) => (
            <div key={program.id} className="result-item">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href={`/workout/${program.id}`}>View Program</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBrowsePage;
