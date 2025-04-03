import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtoCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cart) => cart.id === item.id);

      if (existingItem) {
        return prev.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const existingItem = prev.find((cart) => cart.id === id);

      if (existingItem.quantity === 1) {
        return prev.filter((cart) => cart.id !== id);
      } else {
        return prev.map((cart) =>
          cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart
        );
      }
    });
  };

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryPrice = 34;

  const totalPrice = subTotalPrice + deliveryPrice;

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotalPrice,
        deliveryPrice,
        totalPrice,
        addtoCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};