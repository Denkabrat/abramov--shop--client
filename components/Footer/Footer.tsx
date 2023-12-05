//Global
import { FC } from "react";
import Link from "next/link";
import { TELEGRAM_ABRAMOV_LINK ,INSTAGRAM_STORE_LINK} from "@/utils/consts";
//Components
import { Icons } from "../Icons/Icons";

//Styles
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-links">
            <h1 className="footer-shop-name">Abramov</h1>
            <Link className="instagram-link" href={INSTAGRAM_STORE_LINK}>
              <Icons id="instagram" />
            </Link>
          </div>

          <div className="footer-left-info">
            <p className="date-year">© {new Date().getFullYear()}, &nbsp;</p>

            <Link href={TELEGRAM_ABRAMOV_LINK} className="shop-link">
               Abramov
            </Link>

           

          </div>
        </div>

        <div className="footer-right">
          <div className="contacts-block">
            <p className="mail-footer">E-MAIL:</p>
            <p className="e-mail-footer">delovoyabramov@gmail.com</p>
          </div>

          <div className="payment-block">
            <p className="payment-description">ПРИНИМАЕМ К ОПЛАТЕ:</p>
            <div className="payment-icons">
              <Icons id="mir" />
              <Icons id="unionpay" />
              <Icons id="visa" />
              <Icons id="mastercard" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };