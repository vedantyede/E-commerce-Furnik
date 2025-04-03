const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around rounded-lg bg-green-300 m-10 p-10">
      <div className="">
        <div className="my-2">Furnik</div>
        <div className="w-40 text-xs font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, a
          fuga quos voluptatum laborum expedita cumque deleniti.
        </div>
      </div>
      <div className="hidden md:block">
        <div className="my-2">CONTACT US</div>
        <div className="w-40 text-xs">
          <div className="font-thin">+919604065882</div>
          <div className="font-thin my-1">vedantyede@gmail.com</div>
          <div className="font-thin">Gondia, Maharashtra - 441614</div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="my-2">USEFUL LINKS</div>
        <div className="w-40 text-xs">
          <div className="font-thin">About Furnik</div>
          <div className="font-thin">Contact us</div>
          <div className="font-thin">FAQ</div>
          <div className="font-thin">Support</div>
          <div className="font-thin">Blog</div>
          <div className="font-thin">Privacy Policy</div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="my-2">LATEST NEWS</div>
        <div className="w-40 text-xs">
          <div className="font-thin">News 1</div>
          <div className="font-thin">News 2</div>
          <div className="font-thin">News 3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
