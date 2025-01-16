import React, { useContext } from "react";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getRandomObjects = (array, count) => {
    const shuffleArrays = shuffleArray(array);
    return shuffleArrays.slice(0, count);
  };

  return (
    <ProductContext.Provider value={getRandomObjects}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
