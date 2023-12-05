'use client';
//Global
import { FC } from "react";
import { useRouter } from "next/navigation";
import { ACCOUNT_ROUTE,ADMIN_ROUTE,SHOP_ROUTE } from "@/utils/consts";
import { toastWarning } from "@/app/toastsChange";
import Link from "next/link";
//Icons
import { Icons } from "../Icons/Icons";
import { GrUserAdmin } from "react-icons/gr";

//Styles
import "./Header.scss";

//types
import { IHeaderProps,IallTypes} from "@/types/types";


const Header: FC<IHeaderProps> = ({
  changeModalStatus,
  setModalSignIn,
  setModalCart,
  setModalMenu,
  totalSum,
  isActive,
  allTypes,
  isAdmin
}) => {


const router = useRouter();


  return (
    <header>
      <div className="header-logotype">
        <Link href={SHOP_ROUTE} className="header-shop-name">
          Abramov
        </Link>
      </div>

      <div className="header-second">
        <div className="header-second-menu">
          <ul className="categories-catalog">
            {allTypes.map(({name,id,route}:IallTypes) => (
              <Link
                className="Link-header"
                key={id}
                href={`/categories/${route}`}
                >    
                  <li key={id} className="category">
                      {name.toUpperCase()}
                  </li>
              </Link>
            ))}
           
          </ul>
        </div>

        <div className="header-second-other">
          <div className="left-second-other">
          
           
            <Link
              href={ADMIN_ROUTE}
              className={isAdmin && isActive ? "open-admin-panel" : 'hidden'}
          >
            <GrUserAdmin />
          </Link>
           
         
           

            <button
              onClick={() => !isActive ? changeModalStatus(true, setModalSignIn) : router.push(ACCOUNT_ROUTE) }
              className="profile-account-icon"
            >
              <Icons id="profile-account" />
            </button>

            <button
              onClick={() => isActive ? changeModalStatus(true, setModalCart) : toastWarning('Чтобы воспользоваться корзиной - авторизуйтесь')}
              className="cart-icon"
            >
              <Icons id="cart" />
            </button>
            <p className={isActive ? "total-price" : 'hidden'}>{totalSum?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
          </div>

          <div className="right-second-other">
            <button  onClick={() => changeModalStatus(true, setModalMenu)}  className="drop-down-categories">
              <Icons id="dropdown-menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
