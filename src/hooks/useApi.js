import { useState, useEffect } from 'react';

import { getMovie, getCharacter, getQuote } from '../api/api';

const useApi = () => {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getMovie().then((movieResponse) => setMovies(movieResponse.data.docs));
    // getCharacter().then((characterResponse) => setCharacters(characterResponse.data.docs));
    // getQuote().then((quoteResponse) => setQuotes(quoteResponse.data.docs));
  }, []);

  return {
    movies,
    characters,
    quotes,
  };
};

export default useApi;
