import productData from "../data/product.json";
import ProductCard from "../components/ProductCard";
import HeaderCard from "../components/HeaderCard";

const Home = () => {
  const chairs = productData.product[0].chair;
  const items = productData.product[1].card2;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-wrap justify-center w-full">
        {items.map((item) => (
          <HeaderCard data={item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center w-full">
        {chairs.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
