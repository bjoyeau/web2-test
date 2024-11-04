import React, { useState } from 'react';

interface MovieProps {
  movie: MovieInterface;
}

interface MovieInterface {
  title: string;
  director: string;
  description: string;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  // Initialize showDescription state to false
  const [showDescription, setShowDescription] = useState(false);

  // Toggle function for description display
  const handleToggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div onClick={handleToggleDescription} style={{ cursor: 'pointer', marginBottom: '10px' }}>
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      {showDescription && <p>{movie.description}</p>}
    </div>
  );
};

export default Movie;
