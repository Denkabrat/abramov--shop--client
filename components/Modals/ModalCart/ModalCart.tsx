'use client'
//Global
import { FC } from "react";
import { BasketCards } from "../../BasketCards/BasketCards";
import { getAddress, getInformation } from "@/services/userInfoAPI";
import { toastWarning } from "@/app/toastsChange";
import { makeOrder } from "@/services/makeOrderAPI";
import { useRouter } from "next/navigation";
//Types
import { IModalCartProps } from "@/types/types";

//Styles
import "./ModalCart.scss";

//icons
import { PiCaretDoubleLeftThin } from "react-icons/pi";



const ModalCart: FC<IModalCartProps> = ({changeModalStatus,modal,setModalCart,goodsCart,totalSum,getUserCartFromBackEnd}) => {

  const router = useRouter();



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
  
  return (
    <div
      className={modal ? "cart-wrapper active" : "cart-wrapper"}
      onClick={() => changeModalStatus(false, setModalCart)}
    >
      <div
        className={modal ? "cart-content active" : "cart-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <button
            className="close"
            onClick={() => changeModalStatus(false, setModalCart)}
          >
            <PiCaretDoubleLeftThin />
            <p className="purchases-title">Корзина</p>
          </button>
        </div>

        <div className="purchases-block">
            {
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
            }
        {
          goodsCart.length === 0 ? (
            <div className="empty-cart-block">
              <p className="empty-cart-message">Корзина пуста</p>
              <p className="empty-cart-back-to-buy">Начните покупки прямо сейчас</p>
            </div>
          ) : (
            <div className="total-price-cart">
                <div className="price-block">
                  <p>итого: {totalSum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
                </div>

                <button 
                  className="order-button"
                  type="submit"
                  onClick={()=> makeOrderAndCheckUserInformation()}
                >
                  оформить заказ
                </button>
            </div>
          )
        }
        </div>
      </div>
    </div>
  );
};

export { ModalCart };
