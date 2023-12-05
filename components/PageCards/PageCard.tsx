//Global
import React from "react";
import Image from "next/image";

//Types
import { IPageCardProps } from "@/types/types";

//Styles
import "./PageCard.scss";

export default function PageCard({ id, name, price,img  }: IPageCardProps) {
  return (
      <div id={id} className="category-product">
        
        <div className="Image-block">
          <Image className="image-item"  width={300} height={300} src={img} alt="clothes" />
        </div>

        <div className="decription">
          <p className="product-name">{name}</p>
          <p className="product-price">{price} ₽</p>
        </div>

      </div>
  );
}
