'use client';
//Global
import React,{useState} from 'react';
import { createType } from '@/services/typesAPI';
import { toastError, toastSuccess } from '@/app/toastsChange';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
//Types
import { adminPanelAddTypes } from '@/types/types';
//Style
import './addType.scss';
import { nameRegular, routeRegular } from '@/utils/consts';

const addTypePage = () => {

  const [typeName,setTypeName] = useState('');
  const [typeRoute,setTypeRoute] = useState('');

  const {register, handleSubmit,formState:{errors}} = useForm<adminPanelAddTypes>({defaultValues:{}});

  const error: SubmitErrorHandler<adminPanelAddTypes> = data => {
    errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));   
  }

  const postNewTypes:SubmitHandler<adminPanelAddTypes> = () => {
      createType({name: typeName,route: typeRoute})
        .then(()=>{
          setTypeName('');
          setTypeRoute('');
          toastSuccess('Новый тип успешно добавлен !');
        })
        .catch(error => toastError(error.response.data.message.message));
  }


  return (
    <form onSubmit={handleSubmit(postNewTypes,error)} className='create-type-wrapper'>
        <h1 className='manage-name-title'>Создать тип</h1>
            <div className="create-type-blocks">
                <p className='type-name'>
                  Введите название
                </p>

                <input 
                  className='type-input'
                  placeholder='Название'
                    {...register('typeName', {
                      required:'Введите название',
                      minLength:{
                        value:4,
                        message:'Название слишком короткое'
                      },
                      maxLength:{
                        value:25,
                        message:"Название слишком длинное"
                      },
                      pattern: {
                          value:  nameRegular,
                          message: 'Название должно начинаться с заглавной буквы и быть написанным на кириллице',
                      },
                    })}
                  type="text" 
                  value={typeName}
                  onChange={(e)=> setTypeName(e.target.value)}/>
            </div>

            <div className="create-type-blocks">
                <p className='type-name'>
                  Введите путь - /route
                </p>

                <input 
                  className='type-input'
                  placeholder='route'
                    {...register('typeRoute', {
                      required:'Введите путь',
                      minLength:{
                        value:4,
                        message:'Путь слишком короткий'
                      },
                      maxLength:{
                        value:35,
                        message:"Путь слишком длинный"
                      },
                      pattern: {
                          value:  routeRegular,
                          message: 'Путь должно быть написан нижним регистром на английском без использования - /',
                      },
                    })}
                  type="text" 
                  value={typeRoute}
                  onChange={(e)=> setTypeRoute(e.target.value)}
                  />
            </div>
        

            <button 
            type="submit"
            className='button-to-create'
            onClick={handleSubmit(postNewTypes,error)}
            >
              Создать
            </button>
    </form>
  )
}

export default addTypePage




