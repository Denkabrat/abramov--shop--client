'use client';
//Global
import React,{useState,ChangeEvent,Dispatch,SetStateAction, useEffect} from 'react';
import { toastError, toastSuccess } from '@/app/toastsChange';
import { getTypes } from '@/services/typesAPI';
import { createNewGood } from '@/services/cardsAPI';
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
//Types
import { adminPanelAddGood } from '@/types/types';
//Style
import './addGood.scss';
import { priceRegular } from '@/utils/consts';

const addGoodPage = () => {


  const [selectedFile, setSelectedFile] = useState<FileList | []>([]);
  const [allTypesRender,setAllTypesRender] = useState<[]>([]);

  const [goodInformation,setGoodInformation] = useState({
      goodName:"",
      goodPrice:"",
      goodType:"",
      goodDescription:"",
  })
  const {goodName,goodPrice,goodType,goodDescription} = goodInformation;

  const {register, handleSubmit,formState:{errors}} = useForm<adminPanelAddGood>({defaultValues:{}});

  const headerForPhoto = selectedFile.length > 0 ? `${selectedFile.length} фото выбрано` : 'Нажми чтобы загрузить фото';

  useEffect(()=>{
      getTypes()
      .then(types => setAllTypesRender(types))
      .catch(error => console.error(error));
  },[])
  
  const createGoodInformation = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,setGoodInformation:Dispatch<SetStateAction<any>>,goodInformation:adminPanelAddGood) => {

    e.preventDefault();

    setGoodInformation({
      ...goodInformation,
      [e.target.name]: e.target.value 
    });

  }

  const error: SubmitErrorHandler<adminPanelAddGood> = data => {
    errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = event.target.files;
  
    if (files) {
      setSelectedFile(files);
    }
  };

  const postNewGood:SubmitHandler<adminPanelAddGood> = () => {

    const formData = new FormData();

      if (selectedFile) {
        for (let i = 0; i < selectedFile.length; i++) {
          formData.append('img', selectedFile[i]);
        }
      }

      formData.append('name', goodName);
      formData.append('price', String(goodPrice));
      formData.append('typeId', goodType);
      formData.append('information', goodDescription);

      

      createNewGood(formData)
        .then(() => {
          setGoodInformation({
            goodDescription:'',
            goodName:'',
            goodType:'',
            goodPrice:''
          });
        setSelectedFile([]);
          toastSuccess('Новый товар успешно добавлен!');
        })
        .catch(error => toastError(error.response.data.message.message));
};

  const renderAllTypes = () => (
    allTypesRender.map(({name,id},index)=>(
      <option key={index} value={id}>{name}</option>
    ))
  )
  
  const renderFileNames = () => (
    Array.from(selectedFile).map((file:File, index) => (
      <li className='choosen-files-name' key={index}>{file.name}</li>
    ))
  )

  const renderChoosenFiles = () => {

    if(selectedFile){
      return(
        <div className='choosen-file-wrapper'>
          <p className='choosen-file-title'>Выбранные файлы:</p>
              <ul className='choosen-files'>
                {
                  renderFileNames()
                }
              </ul>
        </div>
      )
  }
}

return (
  <form onSubmit={handleSubmit(postNewGood,error)} className='create-good-wrapper'>
      <h1 className='manage-name-title'>Добавить новый товар</h1>

        <div className="create-good-blocks">

          <p className='good-name'>
            Введите название товара
          </p>

          <input 
            className='good-input'
            placeholder='Название'
              {...register('goodName', {
                required: 'Введите название товара',
                minLength:{
                  value:4,
                  message:'Название слишком короткое'
                },
                maxLength:{
                  value:50,
                  message:"Название слишком длинное"
                },
                pattern: {
                    value:  /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё0-9\s]*$/,
                    message: 'Название должно начинаться с заглавной буквы и быть написанным на кириллице',
                },
              })}
            type="text" 
            value={goodName}
            onChange={(e)=> {createGoodInformation(e,setGoodInformation,goodInformation)}}
            />
            </div>

            <div className="create-good-blocks">
                <p className='good-name'>
                  Введите цену товара
                </p>

                <input 
                  className='good-input'
                  placeholder='100 000'
                    {...register('goodPrice', {
                      required: 'Введите цену товара',
                      minLength:{
                        value:5,
                        message:'Цена слишком маленькая'
                      },
                      maxLength:{
                        value:7,
                        message:"Цена слишком большая"
                      },
                      pattern: {
                          value:  priceRegular,
                          message: 'Цена не должна содержать буквы и пробелы',
                      },
                    })}
                  type="text" 
                  value={goodPrice}
                  onChange={(e)=> {createGoodInformation(e,setGoodInformation,goodInformation)}}
                  />
            </div>

            <label className="create-good-blocks">
                <p className='good-name'>
                  Выберите тип
                </p>

                <select 
                  {...register("goodType",
                    { required: 'Выберите тип товара' })
                  }
                  required
                  className='select-good-wrapper' 
                  value={goodType} 
                  onChange={(e)=> {createGoodInformation(e,setGoodInformation,goodInformation)}}
                  >

                  <option value="">Выберите...</option>
                  {
                    renderAllTypes()
                  }

                </select>
            </label>
          
            <div className="create-good-blocks">
                <p className='good-name'>
                  Введите описание товара
                </p>

                <textarea 
                  className='good-textarea'
                    {...register('goodDescription', {
                      required: 'Введите описание товара',
                      minLength:{
                        value:50,
                        message:'Описание должно содержать минимум 50 символов'
                      },
                      maxLength:{
                        value:1000,
                        message:"Описание может содержать максимум 1000 символов"
                      },
                    })}
                  
                  value={goodDescription}
                  onChange={(e)=> {createGoodInformation(e,setGoodInformation,goodInformation)}}
                  />
            </div>

            <div className="create-good-blocks">
                <p className='good-name'>
                  Добавьте фотографию
                </p>

                <div className="file-upload">
                  <h3>{headerForPhoto}</h3>
                  <input
                  {...register("goodFile",
                  { required: 'Добавьте фотографию' })
                  }
                    type="file" 
                    multiple
                    required
                    onChange={handleFileChange}
                  />
                </div>

                {
                  renderChoosenFiles()
                }

            </div>

        <button 
          type="submit"
          className='button-to-create'
          onClick={handleSubmit(postNewGood,error)}
        >
          Создать
        </button>
  </form>
)
}

export default addGoodPage
