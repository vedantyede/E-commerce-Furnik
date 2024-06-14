import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/shop-store-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="m-0 p-0 relative bg-slate-100">
      <div className="flex md:justify-around items-center h-20 w-full">
        <div className="flex items-center text-3xl font-semibold p-6">
          <img className="w-10" src={Logo} alt="" />
          <div className="">Furnik</div>
        </div>
        <div className="hidden md:flex items-center text-xs">
          <div
            onClick={() => {
              navigate("/E-commerce-Furnik/");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            HOME
          </div>
          <div
            onClick={() => {
              alert("Work in Progress");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            FEATURES
          </div>
          <div
            onClick={() => {
              alert("Work in Progress");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            SERVICES
          </div>
          <div
            onClick={() => {
              alert("Work in Progress");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            PROJECTS
          </div>
          <div
            onClick={() => {
              alert("Work in Progress");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            SHOP
          </div>
          <div
            onClick={() => {
              navigate("/E-commerce-Furnik/cart");
            }}
            className="transform mx-2 cursor-pointer transition duration-500 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            CART
          </div>
        </div>
        <div className="hidden md:flex">
          {/* <span class="material-symbols-outlined">search</span> */}
          <input type="text" className="border-0 rounded" />
        </div>
        <div className="absolute right-0 p-6 md:hidden">
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
