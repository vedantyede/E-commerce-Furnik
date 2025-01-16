import { useNavigate } from "react-router-dom";
import Logo from "../assets/shop-store-logo.png";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { cart } = useCart();
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
              navigate("/");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            HOME
          </div>
          <div
            onClick={() => {
              navigate("/features");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            FEATURES
          </div>
          <div
            onClick={() => {
              navigate("/services");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            SERVICES
          </div>
          <div
            onClick={() => {
              navigate("/products");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            PRODUCTS
          </div>
          <div
            onClick={() => {
              navigate("/shop");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            SHOP
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className="transform mx-2 cursor-pointer transition duration-300 hover:scale-125 rounded-full border-slate-300 p-1 px-3"
          >
            {cart.length > 0 ? (
              <span className="flex justify-center items-center text-xs text-white absolute border rounded-full bg-red-600 w-4 h-4 -right-1 -top-1">
                {cart.length}
              </span>
            ) : (
              ""
            )}
            <span>CART</span>
          </div>
        </div>
        <div className="hidden md:flex">
          <input type="text" className="border-0 rounded" />
        </div>
        <div className="absolute right-0 p-6 md:hidden cursor-pointer">
          <span
            onClick={() => setShow(!show)}
            className="material-symbols-outlined"
          >
            menu
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center transform ease-in-out transition-all duration-300 ${
          show ? "flex" : "hidden"
        } items-center md:hidden gap-1`}
      >
        <div
          className=""
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </div>
        <div
          onClick={() => {
            navigate("/features");
          }}
          className=""
        >
          FEATURES
        </div>
        <div
          onClick={() => {
            navigate("/services");
          }}
          className=""
        >
          SERVICES
        </div>
        <div
          onClick={() => {
            navigate("/products");
          }}
          className=""
        >
          PRODUCTS
        </div>
        <div
          onClick={() => {
            navigate("/shop");
          }}
          className=""
        >
          SHOP
        </div>
        <div
          onClick={() => {
            navigate("/cart");
          }}
          className=""
        >
          {cart.length > 0 ? (
            <span className="flex justify-center items-center text-xs text-white absolute border rounded-full bg-red-600 w-4 h-4 right-40 bottom-3">
              {cart.length}
            </span>
          ) : (
            ""
          )}
          <span>CART</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
