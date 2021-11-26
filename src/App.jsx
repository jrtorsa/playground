import React from 'react';
import Movies from './components/Movies';
import useApi from './hooks/useApi';

function App() {
  const { movies, characters, quotes } = useApi();

  console.log('movies', movies);

  return (
    <div className="App">
      <Movies movies={movies} />
    </div>
  );
}

export default App;
