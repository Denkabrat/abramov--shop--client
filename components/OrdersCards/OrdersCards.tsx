//GLobal
'use client'
import Image from "next/image";
import {useState} from "react";
//Types
import { OrderDetail,Order,IModalRenderOrderProps } from "@/types/types";

//Styles
import "./OrdersCards.scss";



const OrdersCards = ({userOrder}:IModalRenderOrderProps) => {

    const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

    //отключить авто-обновление
      const handleOrderClick = (orderId: number) => {
        if (selectedOrder === orderId) {
          setSelectedOrder(null);
        } else {
          setSelectedOrder(orderId);
        }
      };
//изменение цвета статуса в зависимости от значения
      const getStatusColorClassName = (status:string) => {
        switch (status) {
            case 'В сборке':
                return 'footer-order-status-waiting'; 
            case 'В доставке':
                return 'footer-order-status-delivering'; 
            case 'Доставлен':
                return 'footer-order-status-delivered'; 
            case 'Отменен':
                return 'footer-order-status-cancelled'; 
            default:

                return 'footer-order-status-default';
        }
    };
      

  return (
    <nav className="main-order-block">
    {
      
    userOrder?.map(({id, date, price, status, order, information}:Order) => (
        <div className="main-wrapper" key={id}>
            <button 
            className="header-order-block" 
            onClick={()=> handleOrderClick(id)}
            >
                <p className="header-order-name">
                    Заказ №{id}
                </p>
            </button>
            {
                selectedOrder === id && (
                    <div className ={`card-wrapper ${selectedOrder === id ? "open" : ""}`}>
                    <nav>
                    {
                        
                order.map(({quantity, id, name, image, size}: OrderDetail) => (
                        
                        <div key={id} className="main-order-card">
                             <Image
                                className="order-image"
                                width={75}
                                height={75}
                                src={`${process.env.NEXT_PUBLIC_API_URL}/` + image[0]}
                                alt="clothes"
                            />
                            

                            <div className="main-order-left-descripton">
                                <p className="main-product-name">
                                    {name}
                                </p>
                                <p className="main-product-size">
                                    Размер: <span className="main-product-chosen">{size}</span>
                                </p>
                                <p className="main-product-quantity">
                                    Кол-во: <span className="main-product-chosen">{quantity}</span>
                                </p>
                          </div>
                        </div>
                        
                       ))
                    }
                        
                    </nav>

                <footer className="footer-order-block">

                    <div className="footer-order-top">
                        <div className="order-left-information">
                            <p className="footer-order-information">Имя: <span className="footer-order-chosen">{information.name}</span>
                                </p>

                                <p className="footer-order-information">Фамилия: <span className="footer-order-chosen">{information.surname}</span>
                                </p>

                                <p className="footer-order-information">Отчество: <span className="footer-order-status-chosen">{information.patronymic}</span>
                                </p>
                                <p className="footer-order-information">Телефон: <span className="footer-order-status-chosen">{information.phone}</span>
                                </p>
                    </div>
                        
                    <div className="order-right-information">
                            <p className="footer-order-information">Город: <span className="footer-order-chosen">{information.city}</span>
                                </p>

                                <p className="footer-order-information">Улица: <span className="footer-order-chosen">{information.street}</span>
                                </p>

                                <p className="footer-order-information">Область: <span className="footer-order-status-chosen">{information.region}</span>
                                </p>
                                <p className="footer-order-information">Индекс: <span className="footer-order-status-chosen">{information.index}</span>
                                </p>
                        </div>
                    </div>

                    <div className="order-bottom-information">
                        <p className="footer-order-information">Дата: <span className="footer-order-chosen">{date.split('T')[0]}</span>
                            </p>

                            <p className="footer-order-information">Сумма: <span className="footer-order-chosen">{price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</span>
                            </p>

                            <p className="footer-order-information">Статус: <span className={getStatusColorClassName(status)}>{status}</span>
                            </p>
                    </div>


                </footer>
            </div>
                )
            }
        </div>
            ))   
    }
    </nav>
  );
};

export { OrdersCards };
