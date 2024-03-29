'use client';
//Global
import React,{useEffect, useState} from 'react';
import { toastError } from '@/app/toastsChange';
import { getAllUsers } from '@/services/userAPI';

//Style
import './getAllUsers.scss';




const getAllUsersPage = () => {

  const [allUsers,setAllUsers] = useState<[]>([]);

  useEffect(()=>{
      getAllUsers()
        .then(users => setAllUsers(users))
        .catch(error => toastError(error.response.data.message));
  },[])

  const renderAllLoginedUsers = () => (
    allUsers.map(({id,name,surname,patronymic,phone,email}) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{surname !== null ? surname : 'Не указано'}</td>
        <td>{name !== null ? name : 'Не указано'}</td>
        <td>{patronymic !== null ? patronymic : 'Не указано'}</td>
        <td>{phone !== null ? phone : 'Не указано'}</td>
        <td>{email}</td>
      </tr>
    ))
  )
  const checkUsers = () => {
    if(allUsers.length === 0){
      return(
          <h1 className='users-alert'>Пользователей нет</h1>
      )
    }
  }
 
  return (
    <div className="table-container">
    <h1 className='manage-name-title-users'>Все пользователи</h1>

            {
              checkUsers()
            }

        <table className="user-table">
        <thead>
          <tr className='table-information'>
            <th>ID</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Телефон</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            renderAllLoginedUsers()
          }
        </tbody>
        </table>
</div>
  );
};

export default getAllUsersPage
