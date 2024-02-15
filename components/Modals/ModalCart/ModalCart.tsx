'use client'
//Global
import { FC ,useMemo} from "react";
import { BasketCards } from "../../BasketCards/BasketCards";
import { getAddress, getInformation } from "@/services/userInfoAPI";
import { toastWarning } from "@/app/toastsChange";
import { makeOrder } from "@/services/makeOrderAPI";
import { useRouter } from "next/navigation";
import { stopPropagation } from "@/app/layout";
//Types
import { IModalCartProps } from "@/types/types";

//Styles
import "./ModalCart.scss";

//icons
import { PiCaretDoubleLeftThin } from "react-icons/pi";



const ModalCart: FC<IModalCartProps> = ({modal,setModalCart,goodsCart,totalSum,getUserCartFromBackEnd}) => {

  const router = useRouter();

  const cartWrapperClassName = modal ? "cart-wrapper active" : "cart-wrapper";
  const cartContentClassName = modal ? "cart-content active" : "cart-content";

  const changeModalStatus = () => setModalCart(false);


  const checkEmptyFields = (obj: {[key: string]: any}): boolean => {
    for(let key in obj) {
        if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
            return true;
        }
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            if (checkEmptyFields(obj[key])) {
                return true;
            }
        }
    }
    return false;
};
  
  const makeOrderAndCheckUserInformation = () => {

      Promise.all([getAddress(), getInformation()])
        .then(([address, information]) => {

            const userAddressAndInformation = {
              address: address,
              information: information
            };

            if (checkEmptyFields(userAddressAndInformation)) {
              toastWarning('Персональные данные указаны не полностью или с ошибками');
            } else {
                makeOrder()
                .then(payLink => {
                  let orderId = new URL(payLink).searchParams.get('orderId') as string;
                  sessionStorage.setItem('payId',orderId)
                  router.push(payLink);
                })
            }
        })
        .catch(error => console.error(error));
    }

  const getAllCardsInBasket = useMemo(()=>{
    return () => (
      goodsCart.map(({id,count,img,name,price,size,goodId},index:number)=>(
          <BasketCards
            key={index}
            id={`${id}`}
            counter={count}
            img={`${process.env.NEXT_PUBLIC_API_URL}/` + img[0]}
            name={name}
            price={price}
            size={size}
            goodId={goodId}
            getUserCartFromBackEnd={getUserCartFromBackEnd}
        />
      ))
  )
  },[goodsCart])

  const checkGoodsInBasket = () => {

    if(goodsCart.length === 0){
      return(
        <div className="empty-cart-block">
           <p className="empty-cart-message">Корзина пуста</p>
           <p className="empty-cart-back-to-buy">Начните покупки прямо сейчас</p>
        </div>
      )
    }

      return (
        <div className="total-price-cart">

            <div className="price-block">
              <p>итого: {totalSum} ₽</p>
            </div>
  
            <button 
              className="order-button"
              type="submit"
              onClick={makeOrderAndCheckUserInformation}>
              оформить заказ
            </button>
        </div>
      )
  }
  
  
  return (
    <div className={cartWrapperClassName} onClick={changeModalStatus}>

      <div className={cartContentClassName} onClick={stopPropagation}>

        <div className="cart-header">
            <button
              className="close"
              onClick={changeModalStatus}>
              <PiCaretDoubleLeftThin  />
              <p className="purchases-title">Корзина</p>
            </button>
        </div>

        <div className="purchases-block">
            {getAllCardsInBasket()}
            {checkGoodsInBasket()}
        </div>

      </div>
    </div>
  );
};

export { ModalCart };
