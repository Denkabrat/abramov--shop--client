//Global
import { FC } from "react";
import Link from "next/link";
import { TELEGRAM_ABRAMOV_LINK ,INSTAGRAM_STORE_LINK,EMAIL_OWNER,SHOP_NAME, DATE_YEAR} from "@/utils/consts";
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
            <h1 className="footer-shop-name">{SHOP_NAME}</h1>
            <Link className="instagram-link" href={INSTAGRAM_STORE_LINK}>
              <Icons id="instagram" />
            </Link>
          </div>

          <div className="footer-left-info">
            <p className="date-year">©{DATE_YEAR},&nbsp;</p>

            <Link href={TELEGRAM_ABRAMOV_LINK} className="shop-link">
               Abramov
            </Link>
          </div>

        </div>

        <div className="footer-right">
          <div className="contacts-block">
            <p className="mail-footer">E-MAIL:</p>
            <p className="e-mail-footer">{EMAIL_OWNER}</p>
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