import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d3460-default-rtdb.firebaseio.com/'
});

export default instance;