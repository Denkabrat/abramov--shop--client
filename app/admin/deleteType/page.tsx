'use client';
//Global
import React,{useEffect, useState,FormEvent,MouseEvent} from 'react';
import { toastError, toastSuccess } from '@/app/toastsChange';
import { getTypes,deleteTypeByName } from '@/services/typesAPI';
//Types

//Style
import './deleteType.scss';




const deleteTypePage = () => {

  const [allTypes,setAllTypes] = useState([]);
  const [candidateToDelete,setCandidateToDelete] = useState('');


  useEffect(()=>{
      getTypes()
        .then(types => setAllTypes(types))
        .catch(error => console.error(error));
  },[]);

  const deleteType = (typeName:string) => {
    deleteTypeByName(typeName)
      .then(() => {
        toastSuccess(`Тип ${typeName} успешно удален`);
        setAllTypes(allTypes => allTypes.filter(({name}) => name !== typeName));
      })
      .catch(error => toastError(error.response.data.message.message));
  }
  const renderAllTypes = () => (
      allTypes.map(({name},index)=>(
        <option key={index} value={name}>{name}</option>
      ))
  )
  const handleSubmit = (event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    deleteType(candidateToDelete);
  }

  return (

    <form onSubmit={handleSubmit} className='delete-type-wrapper'>
        <h1 className='manage-name-title'>Удалить тип</h1>
            <label className="delete-type-blocks">
                <p className='type-name'>
                  Выберите тип для удаления
                </p>
                <select 
                  className='select-type-wrapper' 
                  value={candidateToDelete} 
                  onChange={(e) => setCandidateToDelete(e.target.value)}>

                  <option value="">Выберите...</option>

                  {
                    renderAllTypes()
                  }

                </select>
             
            </label>


        

            <button 
              onClick={handleSubmit}
              type="submit"
              className='button-to-delete'
            >
              Удалить
            </button>
    </form>
  )
}

export default deleteTypePage

