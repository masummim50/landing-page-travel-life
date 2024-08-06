'use client'
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

  useEffect(()=> {
    function handleResize(){
      if(window.innerWidth>767){
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
  })

  return (
    <header className="bg-white/20  backdrop-blur-lg rounded-lg relative z-10">
      <nav className="flex justify-between items-center  mx-auto">
        <div className="font-bold text-white text-2xl py-3">
          {/* <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." /> */}
          Voyage
        </div>
        <div
          className={`nav-links duration-500 md:static absolute  md:min-h-fit  left-0 ${isMenuOpen ? 'top-0 h-[100vh] bg-white' : 'top-[-1000%]'} md:w-auto  w-full flex items-center px-5 ease-in-out z-30`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <div className="block md:hidden" onClick={()=>setIsMenuOpen(false)}>Hide</div>
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700">Sign in</button>
          <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
