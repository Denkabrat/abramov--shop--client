"use client";

//Icons
import { Icons } from "@/components/Icons/Icons";

//GLobal
import { useState,useEffect } from "react";
import { getCardsByTypeId } from "@/services/cardsAPI";
import { AxiosError } from "axios";





export default function ProductLayout({children}: {children: React.ReactNode;}) {

const [isSuccess,setIsSucces] = useState(false);


async function getAllCards() {

  try {
  
      const {rows} = await getCardsByTypeId(0);
      //с севера будет приходить null тк такого типа нет и нужно подставить единицу
  
      return {
        goods: rows,
        error: null,
      }
      
  } catch(e) {
  
        const error = e as AxiosError;
      
            return {
              goods: null,
              error 
            }
      }
}

  
  useEffect(()=>{
       (async()=>{
          const {goods,error} = await getAllCards();

          if(error){
              console.log(error);
              return;
          }
         
          setIsSucces(true);

       })();
  },[])
  

    
  if(!isSuccess){
    return <Icons id="spiner" />;
  }

  return (

        <div>{children}</div>

    
  );
}
