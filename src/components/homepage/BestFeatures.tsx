import { Croissant_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import { SiFoursquarecityguide } from "react-icons/si";
const croissant_one = Croissant_One({
  subsets: ["latin"],
  weight: ["400"],
});
const BestFeatures = () => {
  return (
    <div className="bg-orange-200/30 py-8">
      <h1 className="block md:hidden text-center text-orange-500 font-bold text-2xl mb-5 underline">Our Best Features</h1>
      <div className="container  max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between px-2 ">
        <div className="first order-last md:order-first bg-redd-200 w-[100%] md:w-[55%] mt-8 md:mt-0">
          <p className="text-orange-400">What We Give</p>
          <h2 className="text-3xl font-bold">Best Features For You</h2>
          <p className={`${croissant_one.className} text-xs`}>
            Lorem ipsum dolor satur omnis, qui veritatis assumenda eum id
            mollitia, aut ex saepe consequatur aliquam fuga.
          </p>
          {/* design the icon section */}
          <div className="section mt-4">
            <div className="flex items-start gap-2 mb-4">
              <div className="rounded-md bg-green-400/40 p-4 border border-green-500">
                <SiFoursquarecityguide className="text-green-500" />
              </div>
              <div className="info">
                <div className="font-bold">Best Tour Guide</div>
                <p className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Porro dolorum eius repellendus eos officiis quam?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4">
              <div className="rounded-md bg-green-400/40 p-4 border border-green-500">
                <SiFoursquarecityguide className="text-green-500" />
              </div>
              <div className="info">
                <div className="font-bold">Best Tour Guide</div>
                <p className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Porro dolorum eius repellendus eos officiis quam?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-4">
              <div className="rounded-md bg-green-400/40 p-4 border border-green-500">
                <SiFoursquarecityguide className="text-green-500" />
              </div>
              <div className="info">
                <div className="font-bold">Best Tour Guide</div>
                <p className="text-[12px]">
                  Lorem, ipsum dolor sit amet consectetur <br /> adipisicing
                  elit. Porro dolorum eius repellendus eos officiis quam?
                </p>
              </div>
            </div>
            <button className="bg-teal-600 px-5 py-2 rounded-md hover:bg-teal-800  relative z-0">
              Explore Now
            </button>
          </div>
        </div>

        {/* second part */}
        <div className="second  w-[100%] md:w-[50%] gap-[1px] grid grid-cols-2 grid-rows-2">
          <div className="bg-red-200 basis-[50%] rounded-tr-[30%] rounded-bl-[30%] overflow-hidden hover:rounded-sm transition-all relative">
            <Image
              src={"/assets/images/sq2.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="bg-red-200 basis-[50%] rounded-tl-[30%] rounded-br-[30%] overflow-hidden hover:rounded-sm transition-all">
            <Image
              src={"/assets/images/sq1.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="bg-red-200 basis-[50%] rounded-tl-[30%] rounded-br-[30%] overflow-hidden hover:rounded-sm transition-all">
            <Image
              src={"/assets/images/sq3.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="bg-red-200 basis-[50%] rounded-tr-[30%] rounded-bl-[30%] overflow-hidden hover:rounded-sm transition-all">
            <Image
              src={"/assets/images/sq4.jpg"}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFeatures;
