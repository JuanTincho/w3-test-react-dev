import axios from 'axios';

const serviceUrl = 'http://localhost:3000/api';

export function getUsers() {
  return axios.get(`${serviceUrl}/people`);
}

export function addUser(user) {
  return axios.post(`${serviceUrl}/people`, user);
}

export function editUser(user) {
  return axios.put(`${serviceUrl}/people/${user.id}`, user);
}

export function deleteUser(userId) {
  return axios.delete(`${serviceUrl}/people/${userId}`);
}

export function getCountries() {
  return axios.get('https://restcountries.eu/rest/v2/all');
}
