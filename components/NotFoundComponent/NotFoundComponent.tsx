//Global
import Link from "next/link";
import { SHOP_ROUTE } from "@/utils/consts";

//Styles
import "./NotFoundComponent.scss";

export  const  NotFoundComponent = () => {
  return (
    <div className="error-wrapper">
      
          <div className="error-title">
            <h1 className="page-not-found">Страница не найдена</h1>
          </div>

              <div className="error-main">

                  <div className="error-icon">
                        <h3 className="error-code">404</h3>
                  </div>

                <div className="error-line"></div>

                    <div className="error-content">
                          <p className="error-description">
                            Запрашиваемая вами страница отсутствует.<br />
                          </p>
                        <Link className="Link_to_home" href={SHOP_ROUTE}>Перейти на главную страницу</Link>
                    </div>

              </div>
    </div>
  );
};
