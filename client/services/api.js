import axios from 'axios';

const serviceUrl = 'http://localhost:3000/api';

export function getUsers() {
  return axios.get(`${serviceUrl}/people`);
}

export function getCountries() {
  return axios.get('https://restcountries.eu/rest/v2/all');
}
