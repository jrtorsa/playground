import React from 'react';
import PropTypes from 'prop-types';

function Movies({ movies = {} }) {
  return (
    <div>
      {movies.map((movie) => {
        const { _id, name, rottenTomatoesScore } = movie;
        return (
          <div key={_id}>
            <div>
              <span>{name}</span>
            </div>
            <div>
              <span>{Math.floor(rottenTomatoesScore)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    rottenTomatoesScore: PropTypes.number,
  }).isRequired,
};

export default Movies;
