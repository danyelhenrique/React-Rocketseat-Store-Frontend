import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reactrocketseatstorebackend.herokuapp.com',
});

export default api;
