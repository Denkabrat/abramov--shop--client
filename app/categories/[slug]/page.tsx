//Global
import Link from "next/link";
import { redirect } from "next/navigation";
import { SHOP_ROUTE } from "@/utils/consts";
//Components
import PageCard from "@/components/PageCards/PageCard";
import { getCardsByTypeId } from "@/services/cardsAPI";
import { getTypes,getOneTypeById } from "@/services/typesAPI";

//types
import {  IPageCardProps,IGetOneType } from "@/types/types";




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

export async function generateMetadata({params}: {params: { slug: IGetOneType }}){

  try {
    const {name} = await getOneTypeById(params.slug);

    return {
      title:`${name} - Abramov`,
      icons:{
        icon:'/favicon.png'
      }
    }
  } catch (error) {
      redirect(SHOP_ROUTE);
  }
};



export default async function ProductPage({params}: {params: { slug: IGetOneType }}) {

    const oneType = await getOneTypeById(params.slug);

      if(oneType === null){
        redirect(SHOP_ROUTE)
      }

    const {name,id} = oneType;
    const {rows} = await getCardsByTypeId(id);

    const rednerCardsonPage = () => (
      rows.map(({name,price,img,id}: IPageCardProps) => (
        <Link key={id} className="card-product" href={`/categories/${params.slug}/${id}`}>
              <PageCard
                id={`${id}`}
                name={name}
                price={price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                img={`${process.env.NEXT_PUBLIC_API_URL}/` + img[0]}
              />
        </Link>
    ))
    )

 
  return (
    <section className="category-product-wrapper">
        
      <h1 style={{ margin: 40 }}>{name}</h1>
        
       <div className="category-products-grid">
          {
           rednerCardsonPage()
          }
      </div>
    </section>
  );
}


