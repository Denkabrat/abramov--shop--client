//Global
import { FC, useEffect } from "react";
import { OrdersCards } from "@/components/OrdersCards/OrdersCards";

//Types
import { IModalRenderOrderProps } from "@/types/types";

//Styles
import "./ModalRenderOrders.scss";

//icons
import { PiCaretDoubleRightThin } from "react-icons/pi";


const ModalRenderOrders: FC<IModalRenderOrderProps> = ({
  modalRenderOrdres,
  changeModalStatus,
  setModalRenderOrdres,
  userOrder,
}) => {




  return (
    <div
      onClick={() => changeModalStatus(false, setModalRenderOrdres)}
      className={
        modalRenderOrdres
          ? "modal-render-order-wrapper active"
          : "modal-render-order-wrapper"
      }
    >
      <div
        className={
          modalRenderOrdres
            ? "modal-render-order-content active"
            : "modal-render-order-content"
        }
        onClick={(e) => e.stopPropagation()}
      >
          {/* header */}
        <div className="modal-render-order-header">
          <button
            className="close"
            onClick={() => changeModalStatus(false, setModalRenderOrdres)}
          >
            <p className="modal-render-order-title">Мои заказы</p>
            <PiCaretDoubleRightThin />
          </button>
        </div>

        {
          userOrder.length === 0 ? (
            <div className="empty-orders-block">
              <p className="empty-orders-message">Заказы отсутствуют</p>
              <p className="empty-ordes-back-to-buy">Оформи заказ прямо сейчас</p>
            </div>
          ) :(
             <OrdersCards 
              modalRenderOrdres={modalRenderOrdres}
              setModalRenderOrdres={setModalRenderOrdres}
              changeModalStatus={changeModalStatus}
              userOrder={userOrder}
            />
          )
        }
       

       
      </div>
    </div>
  );
};

export { ModalRenderOrders };
