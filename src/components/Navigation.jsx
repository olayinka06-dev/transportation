"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Navigation = () => {
    const [selectlink, setSelectlink] = useState("home");
    const [menu, setMenu] = useState(false);
  return (
    <div className="bg-color-primary">
      <nav className="container flex items-center justify-around bg-color-primary py-5">
        <div className="logo">
          <span className="text-white">
            Horlly<span className="text-color-secondary">Carries</span>
          </span>
        </div>
        <ul className="hidden lg:flex lg:flex-row lg:space-x-10">
          <li onClick={()=> setSelectlink("home")} className={`nav-link ${selectlink == "home" ? "active" : ""}`}>
            <Link className="" href="/">Home</Link>
          </li>
          <li onClick={()=> setSelectlink("service")} className={`nav-link ${selectlink == "service" ? "active" : ""}`}>
            <Link className="" href="#">Services</Link>
          </li>
          <li onClick={()=> setSelectlink("about")} className={`nav-link ${selectlink == "about" ? "active" : ""}`}>
            <Link className="" href="#">About Us</Link>
          </li>
          <li onClick={()=> setSelectlink("pricing")} className={`nav-link ${selectlink == "pricing" ? "active" : ""}`}>
            <Link className="" href="#">Pricing</Link>
          </li>
          <li onClick={()=> setSelectlink("booking")} className={`nav-link ${selectlink == "booking" ? "active" : ""}`}>
            <Link className="" href="#">Booking</Link>
          </li>
          <li onClick={()=> setSelectlink("contact")} className={`nav-link ${selectlink == "contact" ? "active" : ""}`}>
            <Link className="" href="#">Contact</Link>
          </li>
        </ul>
        <button onClick={()=> setMenu(!menu)} class={`lg:hidden ${menu ? "open toggle" : "toggle"}`}>
          <div class="first"></div>
          <div class="second"></div>
          <div class="third"></div>
        </button>
      </nav>
      <div className="flex relative items-center justify-center w-full">
        <ul className={`lg:hidden absolute top-[15%] bg-color-primary overflow-hidden w-3/4 flex gap-2 flex-col items-center transition duration-[1s] ease-in ${menu ? "h-[40vh]" : "h-[0vh]"}`} style={{transition: "all 1s ease"}}>
          <li onClick={()=> setSelectlink("home")} className={`nav-link ${selectlink == "home" ? "active" : ""}`}>
            <Link className="" href="/">Home</Link>
          </li>
          <li onClick={()=> setSelectlink("service")} className={`nav-link ${selectlink == "service" ? "active" : ""}`}>
            <Link className="" href="#">Services</Link>
          </li>
          <li onClick={()=> setSelectlink("about")} className={`nav-link ${selectlink == "about" ? "active" : ""}`}>
            <Link className="" href="#">About Us</Link>
          </li>
          <li onClick={()=> setSelectlink("pricing")} className={`nav-link ${selectlink == "pricing" ? "active" : ""}`}>
            <Link className="" href="#">Pricing</Link>
          </li>
          <li onClick={()=> setSelectlink("booking")} className={`nav-link ${selectlink == "booking" ? "active" : ""}`}>
            <Link className="" href="#">Booking</Link>
          </li>
          <li onClick={()=> setSelectlink("contact")} className={`nav-link ${selectlink == "contact" ? "active" : ""}`}>
            <Link className="" href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
