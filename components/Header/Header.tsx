'use client';
//Global
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toastWarning } from "@/app/toastsChange";
import { ACCOUNT_ROUTE,ADMIN_ROUTE,SHOP_NAME,SHOP_ROUTE } from "@/utils/consts";

//Icons
import { Icons } from "../Icons/Icons";
import { GrUserAdmin } from "react-icons/gr";

//Styles
import "./Header.scss";

//types
import { IHeaderProps,IallTypes} from "@/types/types";


const Header: FC<IHeaderProps> = ({
  setModalSignIn,
  setModalCart,
  setModalMenu,
  totalSum,
  isActive,
  allTypes,
  isAdmin
}) => {

const router = useRouter();

const classNameOfTotalPrice = isActive ? "total-price" : 'hidden';
const classNameOfAdminPanel = isAdmin && isActive ? "open-admin-panel" : 'hidden';

const changeModalStatusDropDown = () => setModalMenu(true);

const changeModalStatusAccount = () => {

    if(!isActive){
       setModalSignIn(true);
       return;
    }

    router.push(ACCOUNT_ROUTE);

}

const changeModalStatusCart = () => {

  if(!isActive){
    toastWarning('Чтобы воспользоваться корзиной - авторизуйтесь');
    return;
  }

  setModalCart(true)
}

const renderTypesInHeder = () => (
    <ul className="categories-catalog">
        {allTypes.map(({name,id,route}:IallTypes) => (
          <Link
            className="Link-header"
            key={id}
            href={`/categories/${route}`}
            >    
              <li key={id} className="category">
                  {name}
              </li>
          </Link>
        ))}
    </ul>
  )


  return (
    <header>
      <div className="header-logotype">
        <Link href={SHOP_ROUTE} className="header-shop-name">
          {SHOP_NAME}
        </Link>
      </div>

      <div className="header-second">
        <div className="header-second-menu">
         {renderTypesInHeder()}
        </div>

        <div className="header-second-other">
          <div className="left-second-other">
          
           
            <Link
              href={ADMIN_ROUTE}
              className={classNameOfAdminPanel}>
            <GrUserAdmin />
          </Link>
           
         

            <button
              onClick={changeModalStatusAccount}
              className="profile-account-icon"
            >
              <Icons id="profile-account" />
            </button>

            <button
              onClick={changeModalStatusCart}
              className="cart-icon"
            >
              <Icons id="cart" />
            </button>
            <p className={classNameOfTotalPrice}>{totalSum} ₽</p>
          </div>

          <div className="right-second-other">
            <button  onClick={changeModalStatusDropDown}  className="drop-down-categories">
              <Icons id="dropdown-menu" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
