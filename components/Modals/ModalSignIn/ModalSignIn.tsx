'use client';

//Global
import { FC ,useState} from "react";
import { login } from "@/services/userAPI";
import { useRouter } from "next/navigation";
import { ACCOUNT_ROUTE } from "@/utils/consts";
import { toastError,toastSuccess } from "@/app/toastsChange";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
//Types
import { IModalSignInProps,ISignIn } from "@/types/types";

//Styles
import "./ModalSignIn.scss";

//icons
import { TfiClose } from "react-icons/tfi";


const ModalSignIn: FC<IModalSignInProps> = ({
  changeModalStatus,
  modal,
  setModalSignIn,
  setModalSignUp,
  setIsActive
}) => {

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const router = useRouter();

 
  const {register, handleSubmit,formState:{errors}} = useForm<ISignIn>({defaultValues:{}});

  //react hook form

  const signInAccount:SubmitHandler<ISignIn> = async (data) => {
  
    try {
      login(email,password)
          .then(res =>{
              setEmail('');
              setPassword('');
              setIsActive(true);
              router.push(ACCOUNT_ROUTE);
              changeModalStatus(false, setModalSignIn);
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
    
    <div
      className={modal ? "modal-background active" : "modal-background"}
      onClick={() => changeModalStatus(false, setModalSignIn)}
    >

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <TfiClose
          className="close-element"
          onClick={() => changeModalStatus(false, setModalSignIn)}
        />

        <h1 className="signIn-text">Войти</h1>



        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(signInAccount ,error);}}>
          <div className="input-block">
            <p className="input-email">эл.почта</p>
            <input 
            {...register('email', {
              pattern: {
                  value:  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
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
                  value:  /^[a-zA-Z0-9]+$/,
                  message: 'Пароль должен состоять из английских символов и цифр',
              },
              
          })}
              type="password"
              autoComplete="on"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          {/* Добавить в некст обновлении */}
          {/* <p className="forgot-password">Забыли пароль ?</p> */}
          <button className="button-to-signIn" onClick={handleSubmit(signInAccount,error)} type="button">
            <p className="button-title">войти</p>
          </button>
          <button className="button-redirect-to-registration"
            onClick={() => {
              changeModalStatus(false, setModalSignIn);
              changeModalStatus(true, setModalSignUp);
            }}
            type="button"
          >
            быстрая регистрация
          </button>
        </form>
      </div>
    </div>
    
  );
};

export { ModalSignIn };
