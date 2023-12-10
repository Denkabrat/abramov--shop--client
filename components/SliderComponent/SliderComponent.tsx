//Global
import Image from "next/image";
import { Navigation, Pagination, EffectCreative,EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//Components
import { Icons } from "../Icons/Icons";

//Styles
import "./SliderComponent.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const SliderComponent = ({img}:{img:[]}) => {

    return (
        <Swiper
            effect={'effect-creative'}
            creativeEffect={{
                prev: {
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
                }}
            modules={[Navigation, Pagination, EffectCreative]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            >
                   
          

        {
            img.map((imgUrl: string,id:number) => (
                 <SwiperSlide  key={id}>
                        {
                            img ? <div className="main-wrapper-photo"><div className="one-photo"><img src={`${process.env.NEXT_PUBLIC_API_URL}/`+ imgUrl} width={500} height={500} className="photo" alt="black" /></div></div> : <Icons id="spiner"/>
                        }
                  
                 </SwiperSlide>
            ))
        }
          </Swiper>
    );
};

export default SliderComponent;


