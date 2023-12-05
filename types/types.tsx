//GLobal
import { Dispatch, SetStateAction } from "react";
import { AxiosError } from "axios";

export interface IIconsProps {
  id: string;
}

export type FunctionDispatch<T> = Dispatch<SetStateAction<T>>;

type ChangeStatusFunc = (
  value: boolean,
  modalName: FunctionDispatch<boolean>
) => void;

export interface IHeaderProps {
  changeModalStatus: ChangeStatusFunc;
  setModalSignIn: FunctionDispatch<boolean>;
  setModalCart: FunctionDispatch<boolean>;
  setModalMenu: FunctionDispatch<boolean>;
  totalSum:number;
  allTypes:[];
  isActive:boolean
  isAdmin:boolean
}

export interface IModalSignInProps {
  modal: boolean;
  changeModalStatus: ChangeStatusFunc;
  setModalSignIn: FunctionDispatch<boolean>;
  setModalSignUp: FunctionDispatch<boolean>;
  setIsActive:FunctionDispatch<boolean>;

}

export interface IModalSignUpProps {
  modalSignUp: boolean;
  changeModalStatus: ChangeStatusFunc;
  setModalSignUp: FunctionDispatch<boolean>;
  setModalSignIn: FunctionDispatch<boolean>;
  setIsActive:FunctionDispatch<boolean>;
}

export interface IModalRenderOrderProps {
  changeModalStatus: ChangeStatusFunc;
  setModalRenderOrdres: FunctionDispatch<boolean>;
  modalRenderOrdres:boolean;
  userOrder:Order[];
}

export interface IModalCartProps {
  modal: boolean;
  changeModalStatus: ChangeStatusFunc;
  setModalCart: FunctionDispatch<boolean>;
  totalSum:number;
  goodsCart:[];
  getUserCartFromBackEnd:()=>void;
}

export interface IPageCardProps {
  id: string;
  name: string;
  price: string;
  img: string;
}

export interface IBasketCardProps extends IPageCardProps {
  counter: number;
  size:string;
  getUserCartFromBackEnd:()=>void;
  goodId:number;
}

export interface IModalOrderProps {
  modalOrder: boolean;
  changeModalStatus: ChangeStatusFunc;
  setModalOrder: FunctionDispatch<boolean>;
}

export interface IModalMenuProps {
  modalMenu: boolean;
  changeModalStatus: ChangeStatusFunc;
  setModalMenu: FunctionDispatch<boolean>;
  setModalOrder: FunctionDispatch<boolean>;
  allTypes:[];
}

export interface IUserData{
  id:number;
  email:string;
  roles:string;
}

export interface IUserResponse{
  user:  null | IUserData;
  error: AxiosError | null;
}

export interface IContext{
  isActive?: boolean;
  setIsActive: FunctionDispatch<boolean>;
  allTypes:[];
  getUserCartFromBackEnd:() => void;
  setModalRenderOrdres: FunctionDispatch<boolean>;
  modalRenderOrdres:boolean;
  setIsAdmin:FunctionDispatch<boolean>;

}


export interface IContextGood{
  goods:[];
}


export interface ICards{
  name: string;
  price: string;
  information: string;
  img: [];
}

export interface Information {
  name:string,
  surname:string,
  patronymic:string,
  phone: string,
  email:string,
  
}

export interface IAddress {
  city:string,
  region:string,
  street:string,
  index:number
}

export interface ISignUp{
  email:string;
  password:string;
  secondPassword:string;
}
export interface ISignIn{
  email:string;
  password:string;
}

export interface IallTypes{
  name:string;
  id:number;
  route:string;
}

export interface OrderDetail {
  quantity: number;
  id: number;
  name: string;
  image: string[];
  size: string;
}

export interface Order{
  id: number;
  date: string;
  price: number;
  status: string;
  order: OrderDetail[];
  information: {
    name: string,
    surname: string,
    patronymic: string,
    phone: string,
    city: string,
    street: string,
    region: string,
    index: string
  };
}

export interface adminPanelAddTypes{
  typeName:string;
  typeRoute:string;
}

export interface adminPanelAddGood{
  goodName:string;
  goodPrice:string;
  goodType:string;
  goodDescription:string;
  goodFile?:FileList;
}


export interface RowData {
  id: number;
  status: string;
  paid: boolean;
  amount: number;
  paymentId: string;
  products: Product[];
  customer: Customer;
}
export interface TableProps {
  headers: string[];
  data: RowData[];
}

 interface Product {
  name: string;
  quantity: number;
  size: string;
}

 interface Customer {
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  city: string;
  street: string;
  region: string;
  zip: string;
  date: string;
}


export interface TableRowProps {
  rowData: RowData;
  updateStatus?: (orderId: number, newStatus: string) => void;
}