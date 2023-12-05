import axios from "axios";
import { getCookie } from 'cookies-next';

const $host = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL
});

const $authorizationHost = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL
});

const authorizationInterceptor = (config:any) => {

    config.headers.authorization = `Bearer ${getCookie('token')}`

    return config;
}

$authorizationHost.interceptors.request.use(authorizationInterceptor);


export {
    $host,
    $authorizationHost
}
