import React from "react";

const EmptyCartDisclamer = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10 p-10">
      <div className="flex flex-col items-center justify-center">
        <span className="material-symbols-outlined">shopping_bag</span>
        <span className="text-2xl font-bold">Your Cart is Empty</span>
      </div>
    </div>
  );
};

export default EmptyCartDisclamer;
