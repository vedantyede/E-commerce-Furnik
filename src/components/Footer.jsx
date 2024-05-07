import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around rounded-lg bg-green-300 m-10 p-10">
      <div className="">
        <div className="">Furnik</div>
        <div className="w-40 text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, a
          fuga quos voluptatum laborum expedita cumque deleniti.
        </div>
      </div>
      <div className="">
        <div className="">CONTACT US</div>
        <div className="w-40 text-xs">
          <div className="">+919604065882</div>
          <div className="">vedantyede@gmail.com</div>
          <div className="">Address</div>
        </div>
      </div>
      <div className="">
        <div className="">USEFUL LINKS</div>
        <div className="w-40 text-xs">
          <div className="">About Furnik</div>
          <div className="">Contact us</div>
          <div className="">FAQ</div>
          <div className="">Support</div>
          <div className="">Blog</div>
          <div className="">Privacy Policy</div>
        </div>
      </div>
      <div className="">
        <div className="">LATEST NEWS</div>
        <div className="w-40 text-xs">
          <div className="">News 1</div>
          <div className="">News 2</div>
          <div className="">News 3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
