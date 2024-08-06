import { Croissant_One } from "next/font/google";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const croissant_one = Croissant_One({
  subsets: ["latin"],
  weight: ["400"],
});
const Info = () => {
  return (
    <div className="mt-5 grid grid-cols-5 text-white">
      <div className="md:col-span-3 col-span-5 mt-[50px]">
        <h2 className={`text-[60px] ${croissant_one.className}`}>
          Enjoy Holiday with <span className="text-teal-500">Voyage</span>{" "}
          Advisor
        </h2>
        <p className={`${croissant_one.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi a
          eveniet, nihil est vel natus odit qui delectus repudiandae tenetur
          fuga laudantium assumenda ullam neque praesentium d quo?
        </p>
        <div className="bg-white/40 rounded-t-md inline-block pr-2 md:pr-8 w-[80%] md:w-[70%]">
          <button className=" px-5 py-2">Systems</button>
          <button className="bg-teal-600 px-5 py-2">See More</button>
        </div>

        <div className=" bg-white/20 rounded-r-md rounded-bl-md px-2 w-[100%] flex justify-between items-center backdrop-blur-sm">
          <div className="">
            <button className="text-left mr-5">
              <h4>
                Location <IoIosArrowDown className="inline-block" />
              </h4>
              <p className="text-[12px] text-gray-300 font-extralight ">Enter location</p>
            </button>
            <button className="text-left mr-5">
              <h4>
                Date <IoIosArrowDown className="inline-block" />
              </h4>
              <p className="text-[12px] text-gray-300 font-extralight ">Enter date</p>
            </button>
            <button className="text-left mr-5">
              <h4>
                People <IoIosArrowDown className="inline-block" />
              </h4>
              <p className="text-[12px] text-gray-300 font-extralight ">Enter member</p>
            </button>
          </div>
          <div className="py-6">
            <button className="bg-teal-600 px-5 py-2 rounded-md hover:bg-teal-800 transition-all animate-size relative z-0 hover:text-white">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
