//Global
import { FC } from "react";
import { PiCaretDoubleLeftThin } from "react-icons/pi";
import Link from "next/link";
//Types
import { IModalMenuProps,IallTypes } from "@/types/types";

//Styles
import "./ModalMenu.scss";

const ModalMenu: FC<IModalMenuProps> = ({
  modalMenu,
  changeModalStatus,
  setModalMenu,
  setModalOrder,
  allTypes
}) => {


  return (
    <div
      onClick={() => changeModalStatus(false, setModalMenu)}
      className={modalMenu ? "modal-menu-wrapper active" : "modal-menu-wrapper"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          modalMenu ? "modal-menu-content active" : "modal-menu-content"
        }
      >
        <div className="menu-header">
          <button
            onClick={() => changeModalStatus(false, setModalMenu)}
            className="close"
          >
            <PiCaretDoubleLeftThin />
            <p>Категории</p>
          </button>
        </div>
        <div className="menu-total-price">
        </div>
        <div className="menu-categories">
          {allTypes.map(({name,id,route}:IallTypes) => (
            <Link
              className="menu-category"
              onClick={() => changeModalStatus(false, setModalMenu)}
              key={id}
              href={`/categories/${route}`}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ModalMenu };
