import axios, {AxiosRequestConfig} from "axios";


export interface FetchResponse<T>{
    count: number;
    next: string | null,
    results: T[];

}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0d7d497fea0f48e39c24719cb87b2350'
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll =(config?: AxiosRequestConfig<T[]>) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data)

}

}

export default APIClient;