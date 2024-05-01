const Header = () => {
  return (
    <div className="flex h-10 w-full justify-between items-center text-xs text-slate-400 ">
      <div className="sm:flex items-center w-full mx-20 hidden">
        <div className="flex mx-2 items-center cursor-pointer hover:text-slate-800">
          <span class="material-symbols-outlined text-sm">call</span>
          <div className="">+919604065882</div>
        </div>
        <div className="flex mx-2 items-center cursor-pointer hover:text-slate-800">
          <div class="material-symbols-outlined text-sm">mail</div>
          <div className="">vedantyede@gmail.com</div>
        </div>
      </div>
      <div className="flex items-center justify-center md:mx-20">
        <div className="m-2 cursor-pointer hover:text-slate-800">ACCOUNT</div>
        <div className="m-2 cursor-pointer hover:text-slate-800">WISHLIST</div>
        <div className="m-2 cursor-pointer hover:text-slate-800">BLOG</div>
        <div className="m-2 cursor-pointer hover:text-slate-800">LOGIN</div>
      </div>
    </div>
  );
};

export default Header;
