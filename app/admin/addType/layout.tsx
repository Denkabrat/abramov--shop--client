import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abramov - Admin - addType",
  description: "Abramov-admin",
  keywords: "Abramov-shop, Abramov, Clothes shop",
  icons:{
    icon:'/favicon.png'
  }
};

export default function addTypeLayout({children}: {children: React.ReactNode}) {

  

  return <div>{children}</div>
  
}
