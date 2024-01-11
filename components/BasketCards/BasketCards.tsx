//GLobal
import Image from "next/image";
import { FC } from "react";
import { ChangeCountAndDelete } from "@/services/basketAPI";
import { toastWarning } from "@/app/toastsChange";

//Types
import { IBasketCardProps ,IChangeCount} from "@/types/types";

//Styles
import "./BasketCards.scss";


  const BasketCards: FC<IBasketCardProps> = ({counter,id,name,price,img,size,getUserCartFromBackEnd,goodId}) => {

  let numericPrice = parseFloat(price.replace(/\s/g, ""));
  let resultPrice = (numericPrice * counter).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const changeGoodCountAndDelete = ({goodId,size,action}: IChangeCount) => {
    try {
      ChangeCountAndDelete({goodId,size,action})
      .then(() => getUserCartFromBackEnd())
      .catch(error => toastWarning(error.response.data.message.message));
    } catch (error) {
        console.error(error);
    };
 };

 
 const incrementClick = () => changeGoodCountAndDelete({goodId,size,action: 'inc'});
 const decrementClick = () => changeGoodCountAndDelete({goodId,size,action: 'dec'});


 
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
            className="button-action"
              onClick={decrementClick}
            >
              -
            </button>
            <span>{counter}</span>
            <button
            className="button-action"
            onClick={incrementClick}
             >+</button>
          </div>
        </div>
        <div className="item-price">
          <p>
            <span>Цена: </span>
            {resultPrice}  ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export { BasketCards };
