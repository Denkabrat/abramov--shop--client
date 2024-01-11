'use client'
import React,{useState,useEffect} from 'react';
import { TableRowProps} from '@/types/types';
import { updateOrderStatus } from '@/services/makeOrderAPI';
import { toastError, toastSuccess } from '@/app/toastsChange';

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  const { id, status, paid, amount, paymentId, products, customer } = rowData;
  
  const [selectedStatus, setSelectedStatus] = useState<string>(status);

  const conditionForPayment = paid ? 'Да' : 'Нет';

  useEffect(() => {
    setSelectedStatus(status);
  }, [status]);

  const handleStatusChange = (orderId:number,newStatus:string) => {
     updateOrderStatus({orderId,newStatus})
      .then(()=> toastSuccess(`Статус заказа ${orderId} был успешно изменен !`))
      .catch(error => toastError(error.response.data.message))
  };

  const renderOrderedProducts = () => (
    <ul>
    {products.map((product, index) => (
      <li key={index}>
        {product.name} ({product.quantity}, {product.size})
      </li>
    ))}
  </ul>
  )

  const renderCostumerInformation = () => (
    <>
    {customer.firstName} {customer.lastName} {customer.middleName}
        <br />
        {customer.phone}
        <br />
        {customer.city}, {customer.street}, {customer.region}, {customer.zip}
        <br />
        {customer.date}
    </>
  )

  const changeStatus = () => handleStatusChange(id,selectedStatus);

  return (
    <tr>
      <td>{id}</td>
      <td>{conditionForPayment}</td>
      <td>{amount}</td>
      <td>{paymentId}</td>
      <td>
       {renderOrderedProducts()}
      </td>
      <td>
        {renderCostumerInformation()}
      </td>
      <td className='order-status-td'>
        <select
          className='select-order-status'
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="В сборке">В сборке</option>
          <option value="В доставке">В доставке</option>
          <option value="Доставлен">Доставлен</option>
          <option value="Отменен">Отменен</option>
        </select>
        <button className='send-order-status' onClick={changeStatus}>
          OK
        </button>
      </td>
    </tr>
  );
};

export default TableRow;