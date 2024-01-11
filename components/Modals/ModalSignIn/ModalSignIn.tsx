'use client';

//Global
import { FC ,useState} from "react";
import { login } from "@/services/userAPI";
import { useRouter } from "next/navigation";
import { ACCOUNT_ROUTE ,emailRegular,passwordRegular} from "@/utils/consts";
import { toastError,toastSuccess } from "@/app/toastsChange";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { stopPropagation } from "@/app/layout";
//Types
import { IModalSignInProps,ISignIn } from "@/types/types";

//Styles
import "./ModalSignIn.scss";

//icons
import { TfiClose } from "react-icons/tfi";


const ModalSignIn: FC<IModalSignInProps> = ({
  modal,
  setModalSignIn,
  setModalSignUp,
  setIsActive
}) => {

  

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const router = useRouter();

  //classNames | static
  const modalSignInBackgroundClassName = modal ? "modal-background active" : "modal-background";

  //functions
  const changeModalStatus = () => setModalSignIn(false);
  const changeModal = () => {setModalSignIn(false); setModalSignUp(true)};

  //formik
  const {register,handleSubmit,formState:{errors}} = useForm<ISignIn>({defaultValues:{}});

  
  
  const signInAccount: SubmitHandler<ISignIn> = async (data) => {

    try {
      login({email,password})
          .then(res =>{
              setEmail('');
              setPassword('');
              setIsActive(true);
              router.push(ACCOUNT_ROUTE);
              changeModalStatus();
              toastSuccess('Вы успешно авторизовались');
          })
          .catch(
              error => toastError(error.response.data.message.message)
          )
    } catch (error) {
        console.log(error)
    } 
}
  const error: SubmitErrorHandler<ISignIn> = data => {
    errors && Object.keys(data).forEach((key) => toastError(data[key as keyof typeof data]?.message));
  }
 
  return (
    
    <div className={modalSignInBackgroundClassName} onClick={changeModalStatus}>
      <div className="modal-content" onClick={stopPropagation}>

        <TfiClose
          className="close-element"
          onClick={changeModalStatus}
        />

        <h1 className="signIn-text">Войти</h1>



        <form onSubmit={handleSubmit(signInAccount ,error)}>

          <div className="input-block">
            <p className="input-email">эл.почта</p>
            <input 
            {...register('email', {
              pattern: {
                  value:  emailRegular,
                  message: 'Адрес электронной почты должен содержать @ и быть на латинице',
              },
              })}
              type="text" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
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
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          <button className="button-to-signIn" onClick={handleSubmit(signInAccount ,error)} type="submit">
            войти
          </button>

          <button className="button-redirect-to-registration"
            onClick={changeModal}
            type="button">
            быстрая регистрация
          </button>
          
        </form>
      </div>
    </div>
    
  );
};

export { ModalSignIn };
