'use client';
//Global
import React,{useEffect, useState} from 'react';
import { toastError, toastSuccess } from '@/app/toastsChange';
import { getTypes } from '@/services/typesAPI';
import { getCardsByTypeId } from '@/services/cardsAPI';
import { deleteOneGoodByName } from '@/services/cardsAPI';
//Types

//Style
import './deleteGood.scss';


const deleteGoodPage = () => {

  const [allTypes,setAllTypes] = useState([]);
  const [selectedType,setSelectedType] = useState('');

  const [allGoods,setAllGoods] = useState([]);
  const [goodToDelete,setGoodToDelete] = useState('');

  useEffect(()=>{
      getTypes()
        .then(types => setAllTypes(types))
        .catch(error => console.error(error));

        
  },[]);

  useEffect(()=>{
    (async()=>{
        
      if(selectedType){
    
        const {rows} = await getCardsByTypeId(Number(selectedType))
         
        if(rows && selectedType){
          setAllGoods(rows)
        }
      }
  
    })();
   
  },[selectedType])

  const deleteGood = (goodName:string) => {
    deleteOneGoodByName(goodName)
      .then(() => {
        toastSuccess(`${goodName} успешно удален`);
        setAllGoods(currentGoods => currentGoods.filter(({name}) => name !== goodName));
        setSelectedType('0');
      })
      .catch(error => toastError(error.response.data.message.message));
  }


  return (
    <div className='delete-good-wrapper'>
        <h1 className='manage-name-title'>Удалить товар</h1>
            <label className="delete-good-blocks">
                <p className='good-name'>
                  Выберите тип
                </p>
                <select 
                  className='select-wrapper' 
                  onChange={(e) => setSelectedType(e.target.value)}
                  value={selectedType}
                  >
                  <option value="0">Выберите...</option>
                  {
                    allTypes?.map(({name,id},index)=>(
                      <option key={index} value={id}>{name}</option>
                    ))
                  }

                </select>
             
            </label>

            <label className="delete-good-blocks">
                <p className='good-name'>
                  Выберите товар
                </p>
                <select 
                  className='select-wrapper' 
                  onChange={(e) => setGoodToDelete(e.target.value)}>

                  <option value="">Выберите...</option>
                  {
                  allGoods?.length > 0 && allGoods.map(({name},index)=>(
                      <option key={index} value={name}>{name}</option>
                    ))
                  }

                </select>
             
            </label>

          <button 
           type="button"
           className='button-to-delete'
           onClick={(e)=> {e.preventDefault();deleteGood(goodToDelete)}}
          >
            Удалить
          </button>
    </div>
  )
}

export default deleteGoodPage

