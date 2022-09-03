import axios from 'axios';
import { baseURL, timeout } from 'config';

const Interceptor = axios.create({
    baseURL: baseURL,

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },

    timeout: timeout,

    withCredentials: true
});

Interceptor.interceptors.request.use((config) => {
    config.headers.token = config;
    return config;
});

Interceptor.interceptors.response.use(
    (response) => {
        const res = response.data;
        //TODO:Add the code to handle the response body carrying all sort of status codes.
        return res;
    },
    (error) => {
        return Promise.error(error);
    }
);

export default Interceptor;
