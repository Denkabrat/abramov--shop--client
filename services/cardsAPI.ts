import { $host,$authorizationHost} from "./index";


export const getCardsByTypeId  = async (typeId: number) => {

    const {data} = await $host.get(`api/good?typeId=${typeId}`);
    
    return data;
}

export const createNewGood  = async (formData:FormData) => {

    const {data} = await $authorizationHost.post('api/good/createGood', formData);
    
    return data;
}

export const deleteOneGoodByName  = async (name: string) => {

    const {data} = await $authorizationHost.delete('api/good/deleteGood', { data: { name }} );
    
    return data;
}



export const getOneCardById  = async (id: string | string[]) => {

    const {data} = await $host.get('api/good/' + id);
    
    return data;
}

