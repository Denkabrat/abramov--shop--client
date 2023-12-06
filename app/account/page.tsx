//glogal
'use client'
import React ,{ ChangeEvent, useContext,useEffect,useState,Dispatch,SetStateAction  } from "react";
import { useRouter } from "next/navigation";
import { SHOP_ROUTE } from "@/utils/consts";
import { SidebarContext } from "@/app/layout";
import { toastError,toastSuccess } from "@/app/toastsChange";
import { getInformation,getAddress,changeInformation, changeAddress } from "@/services/userInfoAPI";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
//types
import { Information,IAddress } from "@/types/types";
//styles
import "./accountpage.scss";

import { getUser } from "@/app/layout";
import { Icons } from "@/components/Icons/Icons";

const UserPage = () => {

    const router = useRouter();

    const [userInformation,setUserInformation] = useState({
        name:"",
        surname:"",
        patronymic:"",
        phone:"",
        email:"",
    });

    const [userAddress,setUserAddress] = useState({
      city:"",
      region:"",
      street:"",
      index:0
    })

    const {name,surname,patronymic,phone,email} = userInformation;
    const {city,region,street,index} = userAddress;

    const [isActiveFormPersonal, setIsActiveFormPersonal] = useState<boolean>(true);
    const [isActiveFormAddress, setIsActiveFormAddress] = useState<boolean>(true);

    const { setIsAdmin,isActive,setIsActive,setModalRenderOrdres,modalRenderOrdres} = useContext(SidebarContext);
    const {register, handleSubmit,formState:{errors}} = useForm<Information | IAddress>({defaultValues:{}});


  
  

function logOut(){

 if(isActive) {
      setIsActive(false);
      setIsAdmin(false);
      router.push(SHOP_ROUTE);
      localStorage.removeItem('token');
      toastSuccess('Вы вышли из аккаунта');
  }else{
      toastError('Неизвестная ошибка');
  }
}

const changeUserInformation = (e: ChangeEvent<HTMLInputElement>,setInformation:Dispatch<SetStateAction<any>>,information:Information | IAddress) => {

  e.preventDefault();

  setInformation({
    ...information,
    [e.target.name]: e.target.value 
  });

}

const submitInformation: SubmitHandler<Information | IAddress> = () => {
  try {
    changeInformation(name,surname,patronymic,phone).
      then(()=>{
        toastSuccess('Данные успешно изменены');
        setIsActiveFormPersonal(!isActiveFormPersonal);
      })
      .catch(error => toastError(error.response.data.message.message))
  } catch (error) {
      console.log(error)
  }
}

const submitAddress: SubmitHandler<IAddress | Information> = () => {
  try {
    changeAddress(city,street,region,index) 
      .then(()=>{
        toastSuccess('Данные успешно изменены');
        setIsActiveFormAddress(!isActiveFormAddress);
      })
      .catch(error => toastError(error.response.data.message.message));

  } catch (error) {
      console.log(error);
  }
}

const error: SubmitErrorHandler<Information | IAddress> = data => {
  Object.keys(data).forEach((key) => {
    switch (data[key as keyof typeof data]?.type) {
      case 'required':
        toastError("Поле обязательно к заполнению !");
        break;

      default:
          toastError(data[key as keyof typeof data]?.message);
        break;
    }
  });
}



useEffect(()=>{
  Promise.all([getInformation(), getAddress()])
    .then((values) => {
      const [{ name, surname, patronymic, phone, email }, { city, street, region, index }] = values;

      setUserInformation((prevInformation)=> ({
        ...prevInformation,
        name,
        surname,
        patronymic,
        phone,
        email,
      }));

      setUserAddress((prevAddress)=> ({
        ...prevAddress,
        city,
        street,
        region,
        index,
      }));
    })
    .catch((error) => console.error(error.response.data.message));
}, []);


//проверка авторизации
    useEffect(()=>{
        (async()=>{
          const {user,error} = await getUser();

            if(error){
                router.push(SHOP_ROUTE);
                return;
            }
            
            setIsActive(true);

        })();
    },[router])

  if(!isActive){
      return <Icons id="spiner" />;
  }

  return (
    <div className="account-page-wrapper">
      <h1 className="account-page-title">Мой аккаунт</h1>
        <div className="account-page-content">
          
          <div className="account-page-content-left">
                <button onClick={()=> setModalRenderOrdres(!modalRenderOrdres)} className="my-orders-button">Мои заказы</button>
                <button onClick={logOut} className="log-out">Выйти из аккаунта</button>
          </div>

        <div className="account-page-content-right">
          <div className="personal-information">

                 <div className="personal-information-header">
                    <h2 className="main-data-header">Персональные данные</h2>
                    <button onClick={()=> {setIsActiveFormPersonal(!isActiveFormPersonal)}} className="button-change-data">Изменить</button>
                  </div>

        <form onSubmit={handleSubmit(submitInformation ,error)}  className="personal-information-inputs">

                <div className="personal-information-block">
                  <p className="data-header">имя</p>
                  <input {...register('name', {
                        minLength:{
                          value:2,
                          message:'Имя слишком короткое'
                        },
                        maxLength:{
                          value:16,
                          message:"Имя слишком длинное"
                        },
                        pattern: {
                            value:  /^[А-Я][а-яё]*$/,
                            message: 'Имя должно начинаться с заглавной буквы и быть написанным на кириллице',
                        },
                    })}
                      className={isActiveFormPersonal ? 
                      'user-information-input' : 
                      'user-information-input active'}  
                      readOnly={isActiveFormPersonal} 
                      value={name === null ? "" : name} 
                      onChange={(e)=>{changeUserInformation(e,setUserInformation,userInformation)}} 
                      type="text" />
                </div>
          
                <div className="personal-information-block">
                  <p className="data-header">фамилия</p>
                  <input
                  {...register('surname', {
                    minLength:{
                      value:2,
                      message:'Фамилия слишком короткая'
                    },
                    maxLength:{
                      value:20,
                      message:"Фамилия слишком длинная"
                    },
                    pattern: {
                        value:  /^[А-Я][а-яё]*$/,
                        message: 'Фамилия должно начинаться с заглавной буквы и быть написана на кириллице',
                    },
                })}
                  className={isActiveFormPersonal 
                  ? 'user-information-input' 
                  : 'user-information-input active'} 
                  readOnly={isActiveFormPersonal} 
                  value={surname === null ? "" : surname} 
                  onChange={(e)=>{changeUserInformation(e,setUserInformation,userInformation)}} 
                  type="text" />
                </div>

                <div className="personal-information-block">
                  <p className="data-header">отчество</p>
                  <input
                  {...register('patronymic', {
                    minLength:{
                      value:2,
                      message:'Отчество слишком короткое'
                    },
                    maxLength:{
                      value:25,
                      message:"Отчество слишком длинное"
                    },
                    pattern: {
                        value:  /^[А-Я][а-яё]*$/,
                        message: 'Отчество должно начинаться с заглавной буквы и быть написано на кириллице',
                    },

                })}
                  className={isActiveFormPersonal 
                  ? 'user-information-input' 
                  : 'user-information-input active'}
                    readOnly={isActiveFormPersonal} 
                    value={patronymic === null ? "" : patronymic} 
                    onChange={(e)=>{changeUserInformation(e,setUserInformation,userInformation)}} 
                    type="text" />
                </div>

                <div className="personal-information-block">
                  <p className="data-header">телефон</p>
                  <InputMask
                    className={isActiveFormPersonal 
                      ? 'user-information-input' 
                      : 'user-information-input active'} 
                      readOnly={isActiveFormPersonal} 
                      value = {undefined || phone}
                      onChange={(e)=>{changeUserInformation(e,setUserInformation,userInformation)}}   
                      type="tel" 
                      mask="+7 (999) 999-99-99"
                      alwaysShowMask={true}
                      name="phone"
                      
                />
                </div>    
              
                <div className="personal-information-block">
                  <p className="data-header">почта</p>
                  <input name="mail" className='user-information-input' readOnly={true} value={email === null ? "" : email} type="email" />
                </div>

                <button type="button" onClick={handleSubmit(submitInformation ,error)} className={isActiveFormPersonal ? "button-save-information-hidden" : "button-save-information"}>Сохранить</button>
            </form>
          </div>


          <div className="address-information">
            <div className="address-information-header">
              <h2 className="main-data-header">Адрес доставки</h2>

              <button onClick={()=> {setIsActiveFormAddress(!isActiveFormAddress)}} className="button-change-data">Изменить</button>

            </div>
            
            <form onSubmit={handleSubmit(submitAddress,error)} className="address-information-inputs">

                  <div className="address-information-block">
                    <p className="data-header">город</p>
                    <input 
                    {...register('city', {
                      minLength:{
                        value:2,
                        message:'Название слишком короткое'
                      },
                      maxLength:{
                        value:30,
                        message:"Название слишком длинное"
                      },
                      pattern: {
                          value:  /^[А-Яа-яЁё\s-]+$/,
                          message: 'Название города должно начинаться с заглавной буквы и быть написано на кириллице',
                      },

                  })}
                    className={isActiveFormAddress 
                    ? 'user-information-input' 
                    : 'user-information-input active'} 
                    readOnly={isActiveFormAddress} 
                    value={city === null ? "" : city} 
                    onChange={(e)=>{changeUserInformation(e,setUserAddress,userAddress)}} 
                    type="text" />
                  </div>

                  <div className="address-information-block">
                    <p className="data-header" >край/область/регион</p>
                    <input 
                    {...register('region', {
                      minLength:{
                        value:2,
                        message:'Название слишком короткое'
                      },
                      maxLength:{
                        value:55,
                        message:"Название слишком длинное"
                      },
                      pattern: {
                          value:  /^[А-Яа-яЁё\s-]+$/,
                          message: 'Название региона должно начинаться с заглавной буквы и быть написано на кириллице',
                      },

                  })}
                    className={isActiveFormAddress 
                    ? 'user-information-input' 
                    : 'user-information-input active'}
                    readOnly={isActiveFormAddress}
                    value={region === null ? "" : region}
                    onChange={(e)=>{changeUserInformation(e,setUserAddress,userAddress)}} 
                    type="text" />
                  </div>

                  <div className="address-information-block">
                    <p className="data-header">улица/дом/квартира</p>
                    <input  
                    {...register('street', {
                      minLength:{
                        value:2,
                        message:'Название слишком короткое'
                      },
                      maxLength:{
                        value:100,
                        message:"Название слишком длинное"
                      },

                  })}
                      className={isActiveFormAddress 
                      ? 'user-information-input' 
                      : 'user-information-input active'} 
                      readOnly={isActiveFormAddress} 
                      value={street === null ? "" : street} 
                      onChange={(e)=>{changeUserInformation(e,setUserAddress,userAddress)}} 
                      type="text" />
                  </div>

                  <div className="address-information-block">
                    <p className="data-header">почтовый индекс</p>
                    <input  
                    {...register('index', {
                      minLength:{
                        value:6,
                        message:'Индекс слишком короткий'
                      },
                      maxLength:{
                        value:6,
                        message:"Индекс слишком длинный"
                      },
                      pattern: {
                          value: /[0-9\\.,:]/,
                          message: 'Индекс должен содержать только цифры',
                      },

                  })}
                    className={isActiveFormAddress 
                    ? 'user-information-input' 
                    : 'user-information-input active'} 
                    readOnly={isActiveFormAddress} 
                    value={index === null ? "" : index || ''} 
                    onChange={(e)=>{changeUserInformation(e,setUserAddress,userAddress)}} 
                    type="tel" />
                  </div>

                 <button type="button" onClick={handleSubmit(submitAddress,error)} className={isActiveFormAddress ? "button-save-information-hidden" : "button-save-information"}>Сохранить</button>
             </form>   
           </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
