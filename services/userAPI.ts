import { $authorizationHost,$host } from "./index";
import jwt_decode from 'jwt-decode';
import { setCookie } from 'cookies-next';


export const registration  = async (email:string,password:string,secondPassword:string) => {

    const {data} = await $host.post('api/user/registration',{email,password,secondPassword,role:'aedizkddlnrjmixsbo'});
        setCookie('token', data);

    return jwt_decode(data);

}


export const login  = async (email:string,password:string) => {

    const {data} = await $host.post('api/user/login',{email,password});
        setCookie('token', data.token);

    return jwt_decode(data.token);

}

export const checkAuthorization  = async () => {

    const {data} = await $authorizationHost.get('api/user/auth');
        setCookie('token', data);

    return jwt_decode(data);

}

export const getAllUsers  = async () => {

    const {data} = await $authorizationHost.get('api/user/getAllUsers');

    return data;

}
