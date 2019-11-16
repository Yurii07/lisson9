import axios from 'axios';
import config from '../config';
import store from '../redux/store';

const axios_instance = axios.create({
    baseURL: config.url,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

axios_instance.interceptors.request.use(
    ( config ) => {
        console.log('axios instance req', config);
        return config;
    }
);

axios_instance.interceptors.response.use(
    ( config ) => {
        console.log('axios instance res', config);
        store.dispatch({ type: 'LOGOUT' });
        return config;
    }
)

export default axios_instance;