import axios from 'axios';
import config from 'configuration';

const baseURL = config.baseURL;
const timeout = config.timeout;

const http = axios.create({
    baseURL: baseURL,

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },

    timeout: timeout,

    withCredentials: false
});

http.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        console.log('Ops');
        console.log(response);
        const res = response.data;
        //TODO:Add the code to handle the response body carrying all sort of status codes.
        return res;
    },
    (error) => {
        console.log(error);
    }
);

export default http;
