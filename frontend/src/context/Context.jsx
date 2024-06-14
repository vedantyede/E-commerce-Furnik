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

  return (
    <CartContext.Provider value={{ cart, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
