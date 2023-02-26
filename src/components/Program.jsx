import React, { useRef, useState } from "react";

// react icons
import { FaCrown } from "react-icons/fa";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShieldStarLine,
  RiServiceFill,
} from "react-icons/ri";
import { GiChefToque, GiHotMeal, GiKnifeFork, GiMeal } from "react-icons/gi";

// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Program = () => {
  const swiperRef = useRef(null);
  const [disable, setDisable] = useState(true);

  const data = [
    {
      icon: GiChefToque,
      title: "Healthy Recipe",
      overview: "Healthier Recipes, from food & nutrition experts",
    },
    {
      icon: GiHotMeal,
      title: "Healthy Meals",
      overview: "Learn how to become a meal-planning pro",
    },
    {
      icon: GiKnifeFork,
      title: "Healthy Eating",
      overview: "Eat healthy with our expert & inspiration tips",
    },
    {
      icon: RiShieldStarLine,
      title: "Healthy Life",
      overview: "Your life is your choice, make yourself healthier",
    },
    {
      icon: GiMeal,
      title: "Tasty Meals",
      overview: "Professional cook with experience of 10+",
    },
    {
      icon: RiServiceFill,
      title: "Serving",
      overview: "Good Services available at Eatly and fresh",
    },
  ];

  return (
    <main className="max_width py-10 px-4" id="program">
      {/* header  */}
      <section className="flex items-center justify-between gap-4 pb-7">
        <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
          <span className=" bg-icon_bg text-yellow_text text-lg sm:text-2xl p-2 rounded-lg">
            <FaCrown />
          </span>
          <span className="text-xl sm:text-3xl dark:text-white">
            Our Best Programs
          </span>
        </h1>
        <div className="space-x-3 flex items-center text-xl sm:text-3xl py-3">
          <span
            className={`rounded-full p-1 border border-light_purple text-purple_text cursor-pointer dark:text-[#F2F7A1] dark:border-[#F2F7A1] ${
              disable ? "pointer-events-none text-purple_text/50  " : ""
            } `}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <RiArrowLeftSLine />
          </span>
          <span
            className="rounded-full p-1 border border-light_purple text-purple_text cursor-pointer dark:text-[#F2F7A1] dark:border-[#F2F7A1]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RiArrowRightSLine />
          </span>
        </div>
      </section>

      {/* programs list  */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={() => {
          setDisable(false);
          swiperRef.current?.realIndex === 0 && setDisable(true);
        }}
        className="flex gap-1 bg-purple_bg border-[0.9rem] border-[#00005C] rounded-[3rem] my-3 shadow-[0_12px_60px_-15px_#c9b8ec]"
      >
        {data.map((item) => (
          <SwiperSlide
            className="group flex flex-col items-center text-center py-8 px-1 dark:hover:bg-[#3B185F] cursor-pointer select-none dark:bg-[#00005C]"
            key={item.icon}
          >
            <span className="bg-icon_bg text-yellow_text  group-hover:bg-yellow_bg group-hover:text-icon_text p-2 rounded-lg text-3xl border-[3px] border-light_purple ">
              <item.icon />
            </span>
            <h1 className="font-bold text-[1rem] sm:text-2xl whitespace-nowrap py-2 text-white">
              {item.title}
            </h1>
            <p className="text-sm text-center max-w-[10rem] group-hover:text-white">
              {item.overview}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Program;
