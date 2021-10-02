import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, idx) => (
          <div key={idx}>
            <h2>{movie.title}</h2>
            <p>{movie.time}</p>
            <ul>{movie.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}</ul>
            </div>
        ))}
    </div>
  );
};

export default Movies;
