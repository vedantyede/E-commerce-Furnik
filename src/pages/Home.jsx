import React from "react";
import productData from "../data/product.json";
import Card from "../components/Card";
import Card2 from "../components/Card2";

const Home = () => {
  const chairs = productData.product[0].chair;
  const items = productData.product[1].card2;

  return (
    <div>
      {/* <div className="flex flex-wrap justify-center w-full">
        <Card2 />
      </div> */}
      <div className="flex flex-wrap justify-center w-full">
        {items.map((item) => (
          <Card2 data={item} key={item.title} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {chairs.map((item) => (
          <Card data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
