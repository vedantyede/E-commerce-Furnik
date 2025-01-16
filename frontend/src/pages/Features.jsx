import HeaderCard from "../components/HeaderCard";
import productData from "../data/product.json";

const Features = () => {
  const chairs = productData.product[0].chair;
  const items = productData.product[1].card2;
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center flex-wrap justify-center w-full">
        {/* <div className="m-10 text-5xl font-bold text-amber-800">This are our Featured Products 😊</div> */}
        {items.map((item) => (
          <HeaderCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Features;
