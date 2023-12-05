import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Abramov - Admin - deleteType",
  description: "Abramov",
  keywords: "Abramov Store, Abramov, Clothes store",
  icons:{
    icon:'/favicon.png'
  }
};


export default function addTypeLayout({children}: {children: React.ReactNode}) {

 



  return <div>{children}</div>
  
}
