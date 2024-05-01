import React from "react";

const Navbar = () => {
  return (
    <div className="m-0 p-0 relative bg-slate-100">
      <div className="flex md:justify-around items-center h-20 w-full">
        <div className="text-xl font-semibold p-6">Furnik</div>
        <div className="hidden md:flex items-center text-xs">
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            HOME
          </div>
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            FEATURES
          </div>
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            SERVICES
          </div>
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            PROJECTS
          </div>
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            SHOP
          </div>
          <div className="mx-2 cursor-pointer hover:text-sm hover:border rounded-full border-slate-300 p-1 px-3">
            NEWS
          </div>
        </div>
        <div className="hidden md:flex">
          {/* <span class="material-symbols-outlined">search</span> */}
          <input type="text" className="border-0 rounded"/>
        </div>
        <div className="absolute right-0 p-6 md:hidden">
          <span class="material-symbols-outlined">menu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
