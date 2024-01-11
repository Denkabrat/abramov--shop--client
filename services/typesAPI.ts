import { $host ,$authorizationHost} from ".";
import { IGetOneType } from "@/types/types";

interface ICreateType {
    name:string;
    route:string;
}


export const getTypes  = async () => {

    const {data} = await $host.get('api/type/getAllTypes');
    
    return data;
}

export const createType = async ({name, route}: ICreateType) => {

    const {data} = await $authorizationHost.post('api/type/createType',{name,route});
    
    return data;
}

export const getOneTypeById  = async (route: IGetOneType) => {

    const {data} = await $host.get('api/type/' + route);
    
    return data;
}

export const deleteTypeByName  = async (typeName:string) => {

    const {data} = await $authorizationHost.delete('api/type/delete', { data: { typeName } });
    
    return data;
}