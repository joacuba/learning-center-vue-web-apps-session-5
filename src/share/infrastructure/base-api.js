import axios from 'axios';

const platformAPI = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

export class BaseApi {
    #http;
    constructor() {
        this.#http = axios.create({
            baseURL: platformAPI,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    get http() {
        return this.#http;
    }
}