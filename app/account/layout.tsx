import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Аккаунт - Abramov",
  description: "Abramov-Аккаунт",
  keywords: "Abramov-shop, Abramov, Clothes shop",
  icons:{
    icon:'/favicon.png'
  }
};


export default function accountLayout({children}: {children: React.ReactNode}) {
  
  return <div>{children}</div>
  
}

