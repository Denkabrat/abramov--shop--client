import { $authorizationHost} from "./index";

export const getInformation  = async () => {

    const {data} = await $authorizationHost.get('api/information/getInfo');
    
    return data;
}

//Прописать типы для функции

export const changeInformation = async (name: string,surname: string,patronymic: string,phone:  undefined | string) => {

    const {data} = await $authorizationHost.put('api/information/changeInfo',{name,surname,patronymic,phone});


    return data;    
}

//Адрес мб перенсти в другой компонент


export const getAddress  = async () => {

    const {data} = await $authorizationHost.get('api/address/getAddress');
    
    return data;
}

//Прописать типы для функции

export const changeAddress = async (city: string,street: string,region: string,index: number | undefined) => {

    const {data} = await $authorizationHost.put('api/address/changeAddress',{city,street,region,index});


    return data;    
}