import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=" bg-gray-500/20  mt-7">
      {/* container for white part */}
      <div className="relative max-w-[1100px] mx-auto p-2 ">
        {/* newsletter */}
        <div className="bg-white border-t-2 shadow-md flex flex-col sm:flex-row items-center px-2 py-5 rounded-md absolute w-full top-[-15%] left-0">
          
          <div className="w-full md:w-1/2 text-center sm:text-left">
            <p className="text-orange-400 font-semibold text-xs">SUBSCRIBE</p>
            <h2 className="font-bold text-md">Our NewsLetter</h2>
          </div>

          <div className="w-full md:w-1/2">
            <p>Get Notification</p>
            <div className=" flex">
              <input
                type="text"
                placeholder="Enter your Email"
                className="flex-1 outline-none py-2 px-2 bg-gray-500/20 rounded-lg"
              />
              <button className=" px-4 py-2 rounded-lg bg-teal-700 text-white font-semibold hover:bg-teal-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* other info */}
        <div className="pt-[100px] flex flex-col md:flex-row gap-3">
          <div className="flex justify-between w-full md:w-[50%]">
            <div>
              <h2 className="font-bold text-teal-700 text-2xl py-3">VOYAGE</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam, necessitatibus.
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full md:w-[50%]">
            
          <div>
              <h2 className="font-bold">WHO WE ARE</h2>
              <p>about</p>
              <p>team</p>
              <p>work with us</p>
            </div>
            <div>
              <h2 className="font-bold">OTHER PRODUCTS</h2>
              <p>storefront</p>
              <p>wooslider</p>
              <p>sensei</p>
              <p>sensei extensions</p>
            </div>

            <div>
              <h2 className="font-bold">CONTACT</h2>
              <div className="flex items-center justify-center gap-1">

              <FaInstagram/>
              <FaFacebook/>
              <FaTiktok/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rest of the info here */}

      <div className="bg-teal-700 text-center text-white py-4 mt-[100px]">
        <p>copyright info</p>
      </div>
    </div>
  );
};

export default Footer;
