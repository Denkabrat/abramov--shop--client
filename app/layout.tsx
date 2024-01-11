"use client";

//Global
import { useEffect,createContext,useState,MouseEvent} from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
//services
import { AxiosError } from "axios";
import { getCart } from "@/services/basketAPI";
import { checkAuthorization } from "@/services/userAPI";
import { getTypes } from "@/services/typesAPI";
import { getOrdersPaid ,checkPaidOrder} from "@/services/makeOrderAPI";
//Components
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ModalSignIn } from "@/components/Modals/ModalSignIn/ModalSignIn";
import { ModalRenderOrders } from "@/components/Modals/ModalRenderOrders/ModalRenderOrders";
import { ModalCart } from "@/components/Modals/ModalCart/ModalCart";
import { ModalSignUp } from "@/components/Modals/ModalSignUp/ModalSignUp";
import { ModalMenu } from "@/components/Modals/ModalMenu/ModalMenu";
//libraries
import { ToastContainer } from "react-toastify";

//types
import { IContext,IUserResponse,Order,IUserData } from "@/types/types";

//Styles
import "./globals.scss";

export const stopPropagation = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

export const SidebarContext = createContext<IContext>({
  setIsAdmin:()=>{},
  isActive:false,
  setIsActive:()=>{},
  allTypes:[],
  getUserCartFromBackEnd:()=>{},
  setModalRenderOrders:()=>{},
  modalRenderOrders:false});

export async function getUser(): Promise<IUserResponse> {

    try {
      const data = await checkAuthorization();
  
        return {
          user: data as IUserData,
          error: null
        }
  
    } catch (e) {
        const error = e  as AxiosError;
  
        return {
          user:null,
          error
        }
    }
  }

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  const [modalSignIn, setModalSignIn] = useState<boolean>(false);
  const [modalRenderOrders, setModalRenderOrders] = useState<boolean>(false);
  const [modalCart, setModalCart] = useState<boolean>(false);
  const [modalSignUp, setModalSignUp] = useState<boolean>(false);
  const [modalMenu, setModalMenu] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [goodsCart, setGoodsCart] = useState<[]>([]);
  const [totalSum, setTotalSum] = useState<number>(0);
  const [allTypes,setAllTypes] = useState<[]>([]);
  const [userOrder,setUserOrders] = useState<Order[]>([]);
  const [isAdmin,setIsAdmin] = useState<boolean>(false);
    

  //hideScroll
  const isActiveModals = modalCart || modalSignIn || modalRenderOrders || modalSignUp || modalMenu;

  const manageToOverFlow = isActiveModals ? "hidden" : "auto";

  const getUserCartFromBackEnd = async () => {
    getCart()
      .then(({userCart, totalPrice})=>{
        setGoodsCart(userCart);
        setTotalSum(totalPrice?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " "));
      })
    .catch(error =>console.error(error.response.data.message));
  }


  useEffect(()=>{
    getTypes()
      .then( AllTypes => setAllTypes(AllTypes))
      .catch(error => console.error(error.response.data.message))
  },[getTypes])

  useEffect(()=>{ 
    (async()=>{
      try {
        const {error,user} = await getUser();
  
        if(user){
          setIsActive(true);
          
        }

      } catch (error) {
          console.error((error as Error));
          setIsActive(false);
      }
    })();
  },[]);

  useEffect(()=>{ 
    (async()=>{
      try {
        const {error,user} = await getUser();
  
        if(user){

          if(user?.roles === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY){
            setIsAdmin(true);
          }
        }
      } catch (error) {
          console.error(error as Error);
      }
    })();
  },[isActive]);

  useEffect(() => {
    const fetchOrder = async () => {

    try {
       const payId = sessionStorage.getItem('payId') as string;

        if (payId) {
          await checkPaidOrder()
          .then(()=> sessionStorage.clear())
        }
    } catch (error) {
        console.error(error);
    }
    
    try {
      const order = await getOrdersPaid();
      await getUserCartFromBackEnd();

         setUserOrders(order);
    } catch (error:any) {
        console.error(error.response.data.message);
    }
    };
    
    fetchOrder();
    }, [isActive]);




  return (
    <html lang="en">
      <body style={{overflow:manageToOverFlow}}>

        <div className="wrapper">
            <Header
                setModalSignIn={setModalSignIn}
                setModalCart={setModalCart}
                setModalMenu={setModalMenu}
                totalSum={totalSum}
                isActive={isActive}
                allTypes={allTypes}
                isAdmin={isAdmin}
            />
        
                <SidebarContext.Provider value={{isActive,setIsAdmin, setIsActive,allTypes,getUserCartFromBackEnd,setModalRenderOrders,modalRenderOrders}}>
                      <main className="main">{children}</main>
                </SidebarContext.Provider>
          
            <Footer />
        </div>

        <ModalSignIn
          modal={modalSignIn}
          setModalSignIn={setModalSignIn}
          setModalSignUp={setModalSignUp}
          setIsActive={setIsActive}
        />
        
        <ModalRenderOrders
          modalRenderOrders={modalRenderOrders}
          setModalRenderOrders={setModalRenderOrders}
          userOrder={userOrder}
        />

        <ModalCart
            modal={modalCart}
            setModalCart={setModalCart}
            goodsCart={goodsCart}
            totalSum={totalSum}
            getUserCartFromBackEnd={getUserCartFromBackEnd}
        />
      
        <ModalSignUp
          modalSignUp={modalSignUp}
          setModalSignUp={setModalSignUp}
          setModalSignIn={setModalSignIn}
          setIsActive={setIsActive}
        />
        
        <ModalMenu
          modalMenu={modalMenu}
          setModalMenu={setModalMenu}
          allTypes={allTypes}
        />

          <ToastContainer />
          <SpeedInsights />
      </body>
    </html>
  );
}
