import productData from "../data/product.json";
import ProductCard from "../components/ProductCard";
import HeaderCard from "../components/HeaderCard";
import { useProduct } from "../context/ProductContext";

const Home = () => {
  const chairs = productData.product[0].chair;
  const items = productData.product[1].card2;

  // const { getRandomObjects } = useProduct();

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getRandomObjects = (array, count) => {
    const shuffleArrays = shuffleArray(array);
    return shuffleArrays.slice(0, count);
  };

  const firstFeaturedItems = getRandomObjects(chairs, 10);
  const secondFeaturedItems = getRandomObjects(chairs, 10);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center w-full">
        {items.map((item) => (
          <HeaderCard data={item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch no-scrollbar items-start mb-8">
        {firstFeaturedItems.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch no-scrollbar items-start mb-8">
        {secondFeaturedItems.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
