import productData from "../data/product.json";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const chairs = productData.product[0].chair;

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-wrap justify-center w-full">
        {chairs.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
