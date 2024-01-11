'use client';
//Global
import { FC,useState } from "react";
import { registration } from "@/services/userAPI";
import { toastError,toastSuccess } from "@/app/toastsChange";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { ACCOUNT_ROUTE, emailRegular, passwordRegular } from "@/utils/consts";
import { stopPropagation } from "@/app/layout";

//Types
import { IModalSignUpProps,ISignUp } from "@/types/types";

//Styles
import "./ModalSignUp.scss";

//icons
import { TfiClose } from "react-icons/tfi";




const ModalSignUp: FC<IModalSignUpProps> = ({
  modalSignUp,
  setModalSignUp,
  setModalSignIn,
  setIsActive,
}) => {
  
  const router = useRouter();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [secondPassword,setSecondPassword] = useState('');

  //classNames

  const modalSignInWrapper = modalSignUp ? "modal-sigh-up-wrapper active" : "modal-sigh-up-wrapper";

  //functions
  const changeModalStatus = () => setModalSignUp(false);
  const changeModal = () => {setModalSignIn(true); setModalSignUp(false)};

  //formik
  const {register, handleSubmit,formState:{errors}} = useForm<ISignUp>({defaultValues:{}});

  const createAccount:SubmitHandler<ISignUp> = async (data) => {
  
    try {
      registration({email,password,secondPassword})
        .then(res => {
            setEmail('');
            setPassword('');
            setSecondPassword('');
            setIsActive(true);
            router.push(ACCOUNT_ROUTE);
            toastSuccess('Вы зарегистрировались');
            toastSuccess('Вы успешно авторизовались');
            changeModalStatus();
        })
        .catch(
          error => toastError(error.response.data.message.message)
        )
    } catch (error) {
          console.log(error)
    }
  }
  const error: SubmitErrorHandler<ISignUp> = data => {
    errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));
  }
 


  return (
    <div onClick={changeModalStatus} className={modalSignInWrapper}>
      <div onClick={stopPropagation} className="modal-sign-up-content">

        <TfiClose className="close-element" onClick={changeModalStatus}/>
        <h1 className="signUp-text">Регистрация</h1>

        <form onSubmit={handleSubmit(createAccount,error)}>

          

          <div className="input-block">
            <p className="input-email">эл.почта</p>
            <input
            {...register('email', {
              minLength:{
                value:12,
                message:'Почта слишком короткая'
              },
              maxLength:{
                value:50,
                message:"Пароль слишком длинный"
              },
              pattern: {
                  value:  emailRegular,
                  message: 'Адрес электронной почты должен содержать @ и быть на латинице',
              },
          })}
             type="text" 
             value={email} 
             onChange={e => setEmail(e.target.value)} />
          </div>


          <div className="input-block">
            <p className="input-password">пароль</p>
           <input
            {...register('password', {
              minLength:{
                value:8,
                message:'Пароль слишком короткий'
              },
              maxLength:{
                value:16,
                message:"Пароль слишком длинный"
              },
              pattern: {
                  value:  passwordRegular,
                  message: 'Пароль должен состоять из английских символов и цифр',
              },
              
          })}
              type="password"
              autoComplete="on"
              value={password} 
              onChange={e => setPassword(e.target.value)}
            />
          </div>


          <div className="input-block">
            <p className="input-password">подтвердите пароль</p>
            <input
            {...register('secondPassword', {
              minLength:{
                value:8,
                message:'Пароль слишком короткий'
              },
              maxLength:{
                value:16,
                message:"Пароль слишком длинный"
              },
              pattern: {
                  value:  passwordRegular,
                  message: 'Пароль должен состоять из английских символов и цифр',
              },            
          })}
              type="password"
              autoComplete="on"
              value={secondPassword} 
              onChange={e => setSecondPassword(e.target.value)}
            />
          </div>



          <button className="button-to-signUp" onClick={handleSubmit(createAccount,error)} type="submit" >
            Зарегистрироваться
          </button>

          <button className="button-redirect-to-signIn"
            onClick={changeModal}
            type="button"
          >
            войти
          </button>
        </form>
      </div>
    </div>
  );
};

export { ModalSignUp };
