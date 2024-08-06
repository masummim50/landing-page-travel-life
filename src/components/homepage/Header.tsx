"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Home",
    path: "/",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <header className="bg-white/20  backdrop-blur-lg rounded-lg relative z-10">
      <nav className="flex justify-between items-center  mx-auto">
        <div className="font-bold text-white text-2xl py-3">Voyage</div>
        <div
          className={`nav-links duration-500 md:static fixed  md:min-h-fit  left-0 ${
            isMenuOpen ? "top-0 h-[100vh] bg-white" : "top-[-1000%]"
          } md:w-auto  w-full flex items-center px-5 ease-in-out z-30`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 w-full">
            <div className="text-right">
              <div
                className="inline-block md:hidden cursor-pointer bg-red-600 text-white rounded-md p-2 text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                Hide
              </div>
            </div>
            <li>
              <a
                className="hover:text-gray-500  block border-b-2 transition-all border-transparent hover:border-black"
                href="#"
              >
                Productsss
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500  block border-b-2 transition-all border-transparent hover:border-black"
                href="#"
              >
                Solution
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500  block border-b-2 transition-all border-transparent hover:border-black"
                href="#"
              >
                Resource
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500  block border-b-2 transition-all border-transparent hover:border-black"
                href="#"
              >
                Developers
              </a>
            </li>
            <li>
              <a
                className="hover:text-gray-500  block border-b-2 transition-all border-transparent hover:border-black"
                href="#"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700">
            Sign in
          </button>
          <button
            onClick={toggleMenu}
            className="text-3xl cursor-pointer md:hidden"
          >
            {isMenuOpen ? (
              <div className="flex flex-col justify-between p-1 rounded-md gap-1 mr-2 border items-center  border-white">
                <div className="bg-white h-[5px] w-[25px]"></div>
                <div className="bg-white h-[5px] w-[25px]"></div>
                <div className="bg-white h-[5px] w-[25px]"></div>
              </div>
            ) : (
              <div className="flex flex-col justify-between p-1 rounded-md gap-1 mr-2 border items-center  border-white">
                <div className="bg-white h-[5px] w-[25px]"></div>
                <div className="bg-white h-[5px] w-[25px]"></div>
                <div className="bg-white h-[5px] w-[25px]"></div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
