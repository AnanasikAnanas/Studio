import Smile from "../assets/img/SY (55).png";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import background from "../assets/img/Mask group.png";
import brush from "../assets/img/brush.svg";
import Brush from "./Icons/Brush";
import Desktop from "./Icons/Desktop";
import ArrowRight from "./Icons/ArrowRight";
import ArrowLeft from "./Icons/ArrowLeft";
import InfoProject from "./InfoProject";
import SmileSecond from '../assets/img/SY (57).png'

const About = () => {
  return (
    <section className="container flex">
      <img src={Smile} alt="" className="absolute z-10 mt-[171px]" />
      <div className="z-20 flex flex-col gap-12 max-w-[1327px] ml-[337px]">
        <p className="p-6 border-[1px] border-[#878787] rounded-3xl w-fit">
          О нас
        </p>
        <Swiper
          className="max-w-[1327px] h-[791px]"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="swiperSlide">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-center justify-between">
                <h1 className="text-[128px] w-fit">Мы предлагаем</h1>
                <div className="next p-6 rounded-[32px] border-[1px] w-fit cursor-pointer h-fit">
                  <ArrowRight />
                </div>
              </div>
              <div className="flex gap-12 max-w-[1199px] justify-center">
                <div className="px-6 py-16 border-2 rounded-[144px] flex flex-col gap-12 items-center justify-center w-[500px] h-[500px] hover:scale-90 duration-500">
                  <div className="p-6 bg-white rounded-[48px]">
                    <Brush />
                  </div>
                  <h1 className="text-[48px] text-center leading-[43px]">
                    Разработку логотипов
                  </h1>
                </div>
                <div className="px-6 py-16 border-2 rounded-[144px] flex flex-col gap-12 items-center justify-center w-[500px] h-[500px] hover:scale-90 duration-500">
                  <div className="p-6 bg-white rounded-[48px]">
                    <Desktop />
                  </div>
                  <h1 className="text-[48px] text-center">UX / UI Дизайн</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-center justify-between">
                <h1 className="text-[128px] w-fit">Примерно </h1>
                <div className="prev p-6 rounded-[32px] border-[1px] w-fit cursor-pointer h-fit">
                  <ArrowLeft />
                </div>
              </div>
              <div className="flex items-center flex-wrap px-6 gap-6">
                  <InfoProject number="100" text="проектов"/>
                  <InfoProject number="80" text="положительных отзывов"/>
                  <InfoProject number="25" text="партнеров"/>
                  <InfoProject number="50" text="штатных сотрудников"/>
                  <InfoProject number="5" text="офисов по всей России"/>
                  <InfoProject number="250" text="проектов в процессе выполнения"/>
                  <img src={SmileSecond} alt="" className="absolute z-0 right-0 bottom-0"/>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <img src={background} alt="" className="absolute mt-[550px]" />
      </div>
    </section>
  );
};
export default About;
