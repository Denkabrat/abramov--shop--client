//glogal
import React  from "react";
import { adminRoutesArray } from "@/utils/Arrays";
import Link from "next/link";
import { Metadata } from "next";
//styles
import "./adminPage.scss";

export const metadata: Metadata = {
  title: "Abramov - Admin",
  description: "Abramov-admin",
  keywords: "Abramov-shop, Abramov, Clothes shop",
  icons:{
    icon:'/favicon.png'
  }
};

const AdminPage = () => {


  return (
    <div className="admin-page-wrapper">
      <h1 className="admin-page-title">Админ-панель</h1>
        <div className="admin-page-content">
          {
                adminRoutesArray.map(({route,name},index) =>(
                    <Link 
                      className="buttons-routes-to-manage"
                      key={index}
                      href={`/admin/${route}`}
                      >
                      {name}
                  </Link>
                ))
              }
      </div>
    </div>
  );
};

export default AdminPage;
