import { $authorizationHost } from "./index";
import { IChangeCount ,IAddToCart} from "@/types/types";



export const getCart = async () => {

    const {data} = await $authorizationHost.get('api/basket/getCart');
    
    return data;
}

export const addToCart  = async ({goodId,size}:IAddToCart) => {

    const {data} = await $authorizationHost.post('api/basket/addToCart',{goodId,size});
    
    return data;
}

export const ChangeCountAndDelete  = async ({goodId,size,action}:IChangeCount) => {

    const {data} = await $authorizationHost.put('api/basket/changeCountAndDelete',{size,goodId,action});
    
    return data;
}