/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  responseType: 'json',
  headers: {
    // prettier-ignore
    'contentType': 'application/json',
    // prettier-ignore
    'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

export function getMovie() {
  return API.get('/movie');
}

export function getCharacter() {
  return API.get('/character');
}

export function getQuote() {
  return API.get('/quote');
}
