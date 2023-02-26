import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";

const Values = () => {
  const data = [
    {
      icon: AiFillHeart,
      title: "Becomes Healthier",
      overview: "Immune will stronger if the body is healthier",
    },
    {
      icon: GiGrowth,
      title: "Increase Energy",
      overview: "Have enough energy can help carry out a routine",
    },
    {
      icon: BsShieldCheck,
      title: "Controlling Weight",
      overview: "Body will feel lighter and will not be easily tired",
    },
    {
      icon: AiFillStar,
      title: "Becomes Happier",
      overview: "Living a healthy life also increase self-confidence",
    },
  ];

  return (
    <main
      className="max_width py-32 px-4 grid md:grid-cols-2 gap-8 place-items-center"
      id="value"
    >
      {/* img section  */}
      <section className="img_container">
        <div className="scale-110 sm:scale-[1.5] lg:scale-[1.4] absolute bottom-[0.3rem] sm:bottom-[4.3rem] lg:bottom-[4.1rem] ">
          <img src="/values_img.png" alt="Banner_header" />
        </div>
      </section>

      {/* rightSide section  */}
      <section className="space-y-10">
        <div>
          <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
            <span className="bg-icon_bg text-icon_text p-2 rounded-lg">
              <IoDiamondSharp />
            </span>
            <span className="text-3xl font-bold dark:text-white">
              Our Value To Help You
            </span>
          </h1>
          <p className="py-3 max-w-[30rem]">
            We always want to provide the best value for you and your health,
            join us to maximize the benefits
          </p>
        </div>
        {/* items section  */}
        <section className="grid grid-cols-2 gap-4 gap-y-12">
          {data.map((item) => (
            <div
              className=" relative bg-[#f9f1fe] group hover:bg-white border hover:shadow-[0_15px_100px_-15px_#c9b8ec] cursor-pointer border-white px-4 py-8 rounded-2xl dark:bg-[#00005C] dark:text-white"
              key={item.icon}
            >
              <span className="absolute left-5 -top-4 bg-icon_bg text-white p-2 rounded-lg text-lg group-hover:bg-yellow_bg dark:text-white">
                <item.icon />
              </span>
              <h1 className="text-purple_text text-2xl font-bold dark:text-[#E5B8F4]">
                {item.title}
              </h1>
              <p className="py-2">{item.overview} </p>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Values;
