import { Croissant_One } from "next/font/google";
import React from "react";

const croissant_one = Croissant_One({
  subsets: ["latin"],
  weight: ["400"],
});
const Info = () => {
  return (
    <div className="mt-5 grid grid-cols-5 text-white">
      <div className="md:col-span-3 col-span-5 mt-[50px]">
        <h2 className={`text-[60px] ${croissant_one.className}`}>
          Enjoy Holiday with <span className="text-teal-500">Voyage</span> Advisor
        </h2>
        <p className={`${croissant_one.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi a
          eveniet, nihil est vel natus odit qui delectus repudiandae tenetur
          fuga laudantium assumenda ullam neque praesentium d quo?
        </p>
        <div className="bg-white/40 rounded-sm inline-block pr-8 w-[50%]">
          <button className=" px-5 py-2">Systems</button>
          <button className="bg-teal-600 px-5 py-2">See More</button>
        </div>

        <div className=" bg-white/20 rounded-md px-2 w-[100%] flex justify-between items-center backdrop-blur-sm">
          <div className="">
            <button className="text-left mr-5">
              <h4>Head</h4>
              <p className="text-[12px]">counteg info</p>
            </button>
            <button className="text-left mr-5">
              <h4>Head</h4>
              <p className="text-[12px]">count info</p>
            </button>
          </div>
          <div className="py-6">

          <button className="bg-teal-600 px-5 py-2 rounded-md hover:bg-teal-800 transition-all animate-size relative z-0">
            Explore Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
