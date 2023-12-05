'use client';
//Global
import React,{useEffect, useState} from 'react';
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

  return (
    <div className='delete-type-wrapper'>
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
                    allTypes.map(({name},index)=>(
                      <option key={index} value={name}>{name}</option>
                    ))
                  }

                </select>
             
            </label>


        

          <button 
           onClick={(e)=> {e.preventDefault();deleteType(candidateToDelete)}}
           type="button"
           className='button-to-delete'
          
          >
            Удалить
          </button>
    </div>
  )
}

export default deleteTypePage

