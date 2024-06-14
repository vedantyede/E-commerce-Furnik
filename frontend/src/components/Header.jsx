const Header = () => {
  return (
    <div className="flex h-10 w-full justify-between items-center text-xs text-slate-400 ">
      <div className="sm:flex items-center w-full mx-20 hidden">
        <div className="flex mx-2 items-center cursor-pointer transition duration-500 hover:scale-110">
          <span class="material-symbols-outlined text-sm">call</span>
          <div className="">+919604065882</div>
        </div>
        <div className="flex mx-2 items-center cursor-pointer transition duration-500 hover:scale-110">
          <div class="material-symbols-outlined text-sm">mail</div>
          <div className="">vedantyede@gmail.com</div>
        </div>
      </div>
      <div className="flex items-center justify-center md:mx-20">
        <div className="transform m-2 cursor-pointer transition duration-500 hover:scale-110">ACCOUNT</div>
        <div className="transform m-2 cursor-pointer transition duration-500 hover:scale-110">WISHLIST</div>
        <div className="transform m-2 cursor-pointer transition duration-500 hover:scale-110">BLOG</div>
        <div className="transform m-2 cursor-pointer transition duration-500 hover:scale-110">LOGIN</div>
      </div>
    </div>
  );
};

export default Header;
