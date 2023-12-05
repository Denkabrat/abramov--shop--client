"use client";

//GLobal
import { useState, useEffect,useContext } from "react";
import { sizesArray } from "@/utils/Arrays";
import { getOneCardById} from "@/services/cardsAPI";
import { redirect } from "next/navigation";
import { SHOP_ROUTE } from "@/utils/consts";
import { addToCart } from "@/services/basketAPI";
import {toastSuccess, toastWarning } from "@/app/toastsChange";
import { SidebarContext } from "@/app/layout";
import { Icons } from "@/components/Icons/Icons";
//Components
import SliderComponent from "@/components/SliderComponent/SliderComponent";

//types
import { ICards } from "@/types/types";

//Styles
import "./PageId.scss";


export default function Product({params}: {params: {id: string[]}}) {

  const [good,setGood] = useState<ICards>({name:'',information:'',price:'',img:[]});
  const [goodSize,setGoodSize] = useState<string | undefined>()
  const {isActive,getUserCartFromBackEnd} = useContext(SidebarContext);


  if(good == null){
    redirect(SHOP_ROUTE)
  }


  const {name,price,information,img} = good;

  function addGoodToBasket(goodId:string[],size:string | undefined){
    
      try{
        addToCart(goodId,size)
          .then(res => toastSuccess('Товар добавлен в корзину'))
          .then(res => getUserCartFromBackEnd())
          .catch(error => toastWarning(error.response.data.message.message));
          
      }catch(error){
        console.log(error)
      }

  }
  
  useEffect(()=>{
    getOneCardById(params.id)
      .then(good => {
        setGood(good);
      })
      .catch(error => console.log(error));

      
  },[]);

  if(!name && !information && !price){
    return <Icons id="spiner" />;
  }


     
  
  

  return (
    <div className="card-single-page-wrapper">
      <h1 className="card-single-page-title">{name}</h1>
      <div className="card-single-page-content"> 

        <SliderComponent img={img}/>

        <div className="card-content-info">
            <p className="price">{price?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
          <p className="description">{information}</p>
          <div className="block-sizes-page">
            <p className="choose-sizes-text">Размер:</p>
            <div className="sizes-page">
              {
                sizesArray.map(({size},index) =>(
                  <button
                    key={index} 
                    className={`size-button-page ${goodSize === size ? 'selected-size' : ''}`}
                    onClick={()=> setGoodSize(size)}>{size}</button>
                ))
              }
            </div>
          </div>
            <button className="order-to-cart-button" onClick={()=> isActive ? addGoodToBasket(params.id,goodSize) : toastWarning('Чтобы воспользоваться корзиной авторизируйтесь')}>
                Добавить в корзину
              </button>
        </div>
      </div>
    </div>
  );
}
