import * as axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const instance: any = axios.default.create({
    baseURL: BASE_URL
});

export default instance;