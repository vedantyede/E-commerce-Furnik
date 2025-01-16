import React from "react";

const CartProductList = ({ item, addtoCart, removeItem }) => {
  return (
    <div
      key={item.id}
      className="flex gap-10 border border-slate-300 rounded-xl p-4 w-96"
    >
      <div className="">
        <img
          src={item.img}
          alt=""
          className="object-cover rounded-lg w-28 h-28"
        />
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div className="">
          <div className="font-bold">{item.name}</div>
          <div className="text-xs font-semibold">{item.description}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <span>Qty:</span>
            <span className="flex items-center gap-x-1 border-slate-300 rounded-md px-2 p-1">
              <button
                onClick={() => removeItem(item.id)}
                className="flex items-center justify-center font-bold border rounded-full w-6 h-6"
              >
                -
              </button>
              <span className="font-bold">{item.quantity}</span>
              <button
                onClick={() => addtoCart(item)}
                className="flex items-center justify-center font-bold border rounded-full w-6 h-6"
              >
                +
              </button>
            </span>
          </div>
          <div className="flex text-sm">Price: $ {item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartProductList;
