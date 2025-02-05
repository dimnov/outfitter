"use client";

const { createContext, useContext } = require("react");

const ProductContext = createContext();

export function ProductProvider({ children, value }) {
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export const useProduct = () => {
  return useContext(ProductContext);
};
