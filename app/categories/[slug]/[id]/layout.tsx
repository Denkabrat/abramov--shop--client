import { getOneCardById } from '@/services/cardsAPI';
import { SHOP_ROUTE } from '@/utils/consts';
import { redirect } from 'next/navigation';

export async function generateMetadata({params}: {params: { id: string }}){

   try {
    const {name} = await getOneCardById(params.id);

    return {
      title:`${name} - Abramov`,
      icons:{
        icon:'/favicon.png'
      }
    }
   } catch (error) {
      redirect(SHOP_ROUTE);
   }
}
  
export default function categoryTypeLayout({children}: {children: React.ReactNode}) {


  return <div>{children}</div>
  
}

