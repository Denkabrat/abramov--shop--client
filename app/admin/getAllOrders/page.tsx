'use client';
//Global
import React,{useEffect, useState} from 'react';
import { toastError } from '@/app/toastsChange';
import { getAllOrders } from '@/services/makeOrderAPI';
import Table from '@/components/OrdersTable/Table';
//Style
import './getAllOrders.scss';




const getAndManageAllOrders = () => {
  const tableHeaders = [
    'ID',
    'Оплачен',
    'Сумма',
    'PaymentID',
    'Товары',
    'Информация о заказчике',
    'Управление статусом'
  ];
  
  const [allOrders,setAllOrders] = useState([]);

  useEffect(()=>{
    getAllOrders()
      .then(orders => setAllOrders(orders))
      .catch(error => console.error(error));
  },[])




  

  
  return (
    <div className="table-container">
        <h1 className='manage-name-title'>Управление заказами</h1>
        <Table headers={tableHeaders} data={allOrders} />
    </div>
  );
};

export default getAndManageAllOrders
