import CartPriceComponent from "../components/CartPriceComponent";
import CartProductList from "../components/CartProductList";
import EmptyCartDisclamer from "../components/EmptyCartDisclamer";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    subTotalPrice,
    deliveryPrice,
    totalPrice,
    addtoCart,
    removeItem,
  } = useCart();
  return (
    <div className="w-full ">
      {cart.length === 0 ? <EmptyCartDisclamer /> : <></>}
      <div className="flex flex-col-reverse md:flex-row justify-center w-full">
        <div className="flex flex-col items-center gap-6 m-6">
          {cart.map((item) => (
            <CartProductList
              addtoCart={addtoCart}
              removeItem={removeItem}
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <div className="flex justify-center">
          {cart.length !== 0 ? (
            <CartPriceComponent
              subTotalPrice={subTotalPrice}
              deliveryPrice={deliveryPrice}
              totalPrice={totalPrice}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
