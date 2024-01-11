'use client'
//glogal
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "../layout";
import { SHOP_ROUTE } from "@/utils/consts";

//icons
import { Icons } from "@/components/Icons/Icons";




export default function adminLayout({children}: {children: React.ReactNode}) {



  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { user, error } = await getUser();

        if (error) {
          router.push(SHOP_ROUTE);
          return;
        }

        if (user && user?.roles === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
          setIsSuccess(true);
        } else {
          router.push(SHOP_ROUTE);
          return;
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [router]);

    
  if(!isSuccess){
    return <Icons id="spiner" />;
  }


  return <div>{children}</div>
  
}

