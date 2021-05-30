import axios from 'axios';
import type {
    AxiosError,
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig
} from 'axios';

// TODO move to config
const BASE_URL = 'https://yalantis-react-school-api.yalantis.com/api/';

const CONFIG = {
    baseURL: BASE_URL
};

class Api {
    private instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.instance.interceptors.response.use(Api.onResponse, Api.onRejected);
        this.instance.interceptors.request.use(Api.onRequest);
    }

    private static onRequest(params: any) {
        const localParams = params;

        return localParams;
    }

    private static onResponse(response: AxiosResponse) {
        return response.data;
    }

    private static onRejected(error: AxiosError) {
        return Promise.reject(error);
    }

    public get(url: string, data?: any) {
        return this.instance.get(url, { params: data });
    }

    public post(url: string, data?: any, config?: object) {
        return this.instance({
            method: 'post',
            url: url,
            data,
            ...config
        });
    }

    public put(url: string, data: any) {
        return this.instance({
            method: 'put',
            url: url,
            data
        });
    }

    public delete(url: string, data?: any) {
        return this.instance({
            method: 'delete',
            url: url,
            data
        });
    }
}

const api = new Api(CONFIG);

export default api;
