import { $authorizationHost } from "./index";

export const makeOrder = async () => {

    const {data} = await $authorizationHost.post('api/payment/payment-order');
    
    return data;
}


export const checkPaidOrder  = async () => {

    const {data} = await $authorizationHost.get('api/payment/payment-success');
    
    return data;

}

export const getOrdersPaid  = async () => {

    const {data} = await $authorizationHost.get('api/payment/payment-get-order');
    
    return data;

}

export const getAllOrders  = async () => {

    const {data} = await $authorizationHost.get('api/payment/getAllOrders');
    
    return data;

}


export const updateOrderStatus  = async (orderId:number,newStatus:string) => {

    const {data} = await $authorizationHost.put('api/payment/update-order-status',{orderId,newStatus});
    
    return data;

}

