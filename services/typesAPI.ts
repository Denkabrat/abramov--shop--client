import { $host ,$authorizationHost} from ".";

export const getTypes  = async () => {

    const {data} = await $host.get('api/type/getAllTypes');
    
    return data;
}



export const createType = async (name:string, route:string) => {

    const {data} = await $authorizationHost.post('api/type/createType',{name,route});
    
    return data;
}


export const getOneTypeById  = async (route: string | string[]) => {

    const {data} = await $host.get('api/type/' + route);
    
    return data;
}

export const deleteTypeByName  = async (typeName:string) => {

    const {data} = await $authorizationHost.delete('api/type/delete', { data: { typeName } });
    
    return data;
}