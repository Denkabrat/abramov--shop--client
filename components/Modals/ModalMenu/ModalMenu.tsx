//Global
import { FC } from "react";
import { PiCaretDoubleLeftThin } from "react-icons/pi";
import Link from "next/link";
import { stopPropagation } from "@/app/layout";

//Types
import { IModalMenuProps,IallTypes } from "@/types/types";

//Styles
import "./ModalMenu.scss";

const ModalMenu: FC<IModalMenuProps> = ({
  modalMenu,
  setModalMenu,
  allTypes
}) => {

const modalMenuClassName = modalMenu ? "modal-menu-wrapper active" : "modal-menu-wrapper";
const modalContentClassName = modalMenu ? "modal-menu-content active" : "modal-menu-content"

const changeModalStatus = () => setModalMenu(false);

const renderMenuCategories = () => (
  <div className="menu-categories">
    {allTypes.map(({name,id,route}:IallTypes) => (
        <Link
          className="menu-category"
          onClick={changeModalStatus}
          key={id}
          href={`/categories/${route}`}
          >
            {name}
        </Link>
     ))}
  </div>
)


  return (
    <div onClick={changeModalStatus} className={modalMenuClassName}>
      <div onClick={stopPropagation} className={modalContentClassName}>

        <div className="menu-header">
            <button
              onClick={changeModalStatus}
              className="close">
              <PiCaretDoubleLeftThin />
              <p>Категории</p>
            </button>
        </div>

        {
          renderMenuCategories()
        }
       
      </div>
    </div>
  );
};

export { ModalMenu };
