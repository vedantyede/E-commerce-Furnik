import React from "react";
import productData from "../data/product.json";
import Card from "../components/Card";

const Home = () => {
  const items = productData.product[0].chair;
  console.log(items);

  return (
    <div>
      <div className="flex flex-wrap justify-center w-full">
        {items.map((item) => (
          <Card data={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
