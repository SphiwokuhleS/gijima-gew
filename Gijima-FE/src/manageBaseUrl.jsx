import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:8181',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;