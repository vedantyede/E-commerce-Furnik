import React from "react";
import { useCart } from "../context/Context";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className=" w-full ">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center m-10 p-10">
          <div className="flex flex-col items-center justify-center">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="text-2xl font-bold">Your Cart is Empty</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-col items-center my-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex w-11/12 h-60 items-center justify-around border border-slate-300 rounded-xl"
          >
            <img
              className="w-40 h-56 object-cover rounded-lg"
              src={item.img}
              alt={item.name}
            />
            <div className="">
              <div className="text-xl font-bold">{item.name}</div>
              <div className="text-sm">{item.description}</div>
            </div>
            <div className="text-lg font-bold">${item.price}</div>
            <div className="text-sm">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
