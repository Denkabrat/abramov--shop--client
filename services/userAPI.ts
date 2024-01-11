import { $authorizationHost,$host } from "./index";
import jwt_decode from 'jwt-decode';

interface IRegistrationAPI {
    email:string;
    password:string;
    secondPassword:string;
}

interface ILoginAPI {
    email:string;
    password:string;
}

export const registration  = async ({email,password,secondPassword}: IRegistrationAPI) => {

    const {data} = await $host.post('api/user/registration',{email,password,secondPassword,role:'aedizkddlnrjmixsbo'});
        localStorage.setItem('token', data);

    return jwt_decode(data);

}


export const login  = async ({email,password}: ILoginAPI) => {

    const {data} = await $host.post('api/user/login',{email,password});
    localStorage.setItem('token', data.token);

    return jwt_decode(data.token);

}

export const checkAuthorization  = async () => {

    const {data} = await $authorizationHost.get('api/user/auth');
    localStorage.setItem('token', data);

    return jwt_decode(data);

}

export const getAllUsers  = async () => {

    const {data} = await $authorizationHost.get('api/user/getAllUsers');

    return data;

}
