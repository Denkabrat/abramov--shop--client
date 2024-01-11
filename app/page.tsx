//Global
import { Metadata } from "next";
import MainPageBanner from "@/components/MainPage/MainPageBanner";
//Styles
import "./globals.scss";


export const metadata: Metadata = {
  title: "Abramov - магазин вещей",
  description: "Abramov-shop",
  keywords: "Abramov-shop, Abramov, Clothes shop",
  icons:{
    icon:'/favicon.png'
  }
};

export default function HomePage() {
  return(
  <div className="main-page">
    <MainPageBanner/>
  </div>);
}