import Image from "next/image";
import React from 'react'

import './MainPageBanner.scss'

const MainPageBanner = () => {
  return (
    <div className="main-page-banner">
        <div className="main-page-wrapper">
            <div className="main-page-left-side">
                <div className="left-side-banner-photo">
                  <Image  width={500} height={500} src={'/white-star1.jpg'} alt="banner"/>
                  <p className="banner-good-name">Белая Звезда</p>
                </div> 
            </div>

            <div className="main-page-right-side">
                <div className="right-side-top">
                    <p className="banner-good-description">
                          Первая половина Июня 1934 - в СССР вводится уголовная ответственность за побег за границу СССР. Страна режима и проволки, что и символизирует этот рисунок.
                    </p>
                </div>
                <div className="right-side-bottom">
                     <p className="banner-good-bottom-description">
                         Сервер стоит на плохом хостинге, первую загрузку данных может занять до 2-х минут 
                    </p>      
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainPageBanner