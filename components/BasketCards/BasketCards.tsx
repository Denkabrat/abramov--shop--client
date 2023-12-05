//GLobal
import Image from "next/image";
import { FC } from "react";
import { ChangeCountAndDelete } from "@/services/basketAPI";
import { toastWarning } from "@/app/toastsChange";

//Types
import { IBasketCardProps } from "@/types/types";

//Styles
import "./BasketCards.scss";


  const BasketCards: FC<IBasketCardProps> = ({counter,id,name,price,img,size,getUserCartFromBackEnd,goodId}) => {

    let numericPrice = parseFloat(price.replace(/\s/g, ""));
    let result = numericPrice * counter;

  const changeGoodCountAndDelete = (goodId:number,size:string,action:string) => {
    try {
      ChangeCountAndDelete(goodId,size,action)
      .then(() => getUserCartFromBackEnd())
      .catch(error => toastWarning(error.response.data.message.message));
    } catch (error) {
        console.error(error)
    };
 };

 
  return (
    <div key={id} id={id} className="purchase-item">
        <Image
          className="item-image"
          width={130}
          height={130}
          src={img}
          alt="clothes"
        />

      <div className="item-content">
        <p className="item-title">{name}</p>
        <div className="block-sizes">
          <p className="item-size">Размер: <span className="item-size-color">{size}</span></p>
        </div>


        <div className="block-quantity">
          <p className="item-quantity">Количество:</p>
          <div className="block-counter">
            <button
              onClick={() => changeGoodCountAndDelete(goodId,size,'dec')}
            >
              -
            </button>
            <span>{counter}</span>
            <button
            onClick={() => changeGoodCountAndDelete(goodId,size,'inc')}
             >+</button>
          </div>
        </div>
        <div className="item-price">
          <p>
            <span>Цена: </span>
            {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}  ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export { BasketCards };
