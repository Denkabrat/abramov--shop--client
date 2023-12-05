import { $authorizationHost } from "./index";

export const getCart = async () => {

    const {data} = await $authorizationHost.get('api/basket/getCart');
    
    return data;
}


export const addToCart  = async (goodId:string[], size:string | undefined) => {

    const {data} = await $authorizationHost.post('api/basket/addToCart',{goodId,size});
    
    return data;

}

export const ChangeCountAndDelete  = async (goodId:number,size:string,action:string) => {

    const {data} = await $authorizationHost.put('api/basket/changeCountAndDelete',{size,goodId,action});
    
    return data;
    
}