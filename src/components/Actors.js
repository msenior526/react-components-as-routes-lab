import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, idx) => (
        <div key={idx} className='actor'>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
