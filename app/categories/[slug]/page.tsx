//Global
import Link from "next/link";
import { redirect } from "next/navigation";
import { SHOP_ROUTE } from "@/utils/consts";
//Components
import PageCard from "@/components/PageCards/PageCard";
import { getCardsByTypeId } from "@/services/cardsAPI";
import { getTypes,getOneTypeById } from "@/services/typesAPI";

//types
import {  IPageCardProps } from "@/types/types";




export async function generateStaticParams() {
   try {
    const Alltypes = await getTypes();

    return Alltypes.map(({ route }: { route: string }) => ({
      slug: route,
    }));
   } catch (error) {
       throw new Error('Internal Server Error');
  }
}

export async function generateMetadata({params}: {params: { slug: string }}){

  return getOneTypeById(params.slug)
    .then(({name}) => {
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
};



export default async function ProductPage({params}: {params: { slug: string }}) {

  const oneType = await getOneTypeById(params.slug);

    if(oneType === null){
      redirect(SHOP_ROUTE)
    }

  const {name,id} = oneType;
  const {rows} = await getCardsByTypeId(id);

 
  return (
    <section className="category-product-wrapper">
        
      <h1 style={{ margin: 40 }}>{name}</h1>
        
       <div className="category-products-grid">
          {
           rows.map(({name,price,img,id}: IPageCardProps) => (
                <Link key={id} className="card-product" href={`/categories/${params.slug}/${id}`}>
                      <PageCard
                        id={`${id}`}
                        name={name}
                        price={price?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        img={`${process.env.NEXT_PUBLIC_API_URL}/` + img[0]}
                      />
                </Link>
            ))
          }
      </div>
    </section>
  );
}


