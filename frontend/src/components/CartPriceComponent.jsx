import React from "react";

const CartPriceComponent = ({ subTotalPrice, deliveryPrice, totalPrice }) => {
  return (
    <div className="flex items-center justify-center border border-slate-300 rounded-xl p-4 w-96 m-6 h-52">
      <div className="flex flex-col items-stretch justify-between p-6 gap-2">
        <div className="flex justify-between">
          <span>SubTotal:</span>
          <span>${subTotalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery:</span>
          <span>${deliveryPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-center border border-b-0"></div>
        <div className="flex justify-between">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <button className="bg-green-500 rounded-full w-52 p-1">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPriceComponent;
