import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0d7d497fea0f48e39c24719cb87b2350'
    }
})