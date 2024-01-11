//Global
import { FC } from "react";
import { OrdersCards } from "@/components/OrdersCards/OrdersCards";
import { stopPropagation } from "@/app/layout";

//Types
import { IModalRenderOrderProps } from "@/types/types";

//Styles
import "./ModalRenderOrders.scss";

//icons
import { PiCaretDoubleRightThin } from "react-icons/pi";


const ModalRenderOrders: FC<IModalRenderOrderProps> = ({
  modalRenderOrders,
  setModalRenderOrders,
  userOrder,
}) => {


const orderWrapperClassName = modalRenderOrders ? "modal-render-order-wrapper active" : "modal-render-order-wrapper";
const orderContentClassName = modalRenderOrders ? "modal-render-order-content active" : "modal-render-order-content";


const changeModalStatus = () => setModalRenderOrders(false);

const renderOrders = () => {

  if(userOrder.length === 0){
    return(
      <div className="empty-orders-block">
        <p className="empty-orders-message">Заказы отсутствуют</p>
        <p className="empty-ordes-back-to-buy">Оформи заказ прямо сейчас</p>
      </div>
    )
  }
  
  return(
      <OrdersCards 
       modalRenderOrders={modalRenderOrders}
       setModalRenderOrders={setModalRenderOrders}
       userOrder={userOrder}
     />
  )
}

  return (
    <div onClick={changeModalStatus} className={orderWrapperClassName}>
      <div className={orderContentClassName} onClick={stopPropagation}>

        <div className="modal-render-order-header">
          <button
            className="close"
            onClick={changeModalStatus}
          >
            <p className="modal-render-order-title">Мои заказы</p>
            <PiCaretDoubleRightThin />
          </button>
        </div>
        
        {
          renderOrders()
        }
       
      </div>
    </div>
  );
};

export { ModalRenderOrders };
