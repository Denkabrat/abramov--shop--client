import { getOneCardById } from '@/services/cardsAPI';
import { SHOP_ROUTE } from '@/utils/consts';
import { redirect } from 'next/navigation';

export async function generateMetadata({params}: {params: { id: string }}){

  return getOneCardById(params.id)
    .then(({ name }) => {
      return {
        title: `${name} - Abramov`,
        icons: {
          icon: '/favicon.png'
        }
      };
    })
    .catch((error) => {
      console.error('Error:', error);
      return {
        redirect: {
          destination: SHOP_ROUTE,
          permanent: false,
        },
      };
    });
}
  
export default function categoryTypeLayout({children}: {children: React.ReactNode}) {


  return <div>{children}</div>
  
}

