"use client";

import { createContext, useContext, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  productData: null,
  images: [],
  reviews: [],
  category: null,
  selected: {
    color: "",
    size: "",
    quantity: 1,
  },
};

function productReducer(state, action) {
  switch (action.type) {
    case "SET_PRODUCT_DATA":
      return { ...state, ...action.payload };
    case "SET_COLOR":
      return { ...state, selected: { ...state.selected, color: action.payload } };
    case "SET_SIZE":
      return { ...state, selected: { ...state.selected, size: action.payload } };
    case "ADJUST_QUANTITY":
      return {
        ...state,
        selected: {
          ...state.selected,
          quantity: Math.max(1, state.selected.quantity + action.payload),
        },
      };
    default:
      return state;
  }
}

export function ProductProvider({ children, productData, images, reviews, category }) {
  const [state, dispatch] = useReducer(productReducer, {
    ...initialState,
    productData,
    images,
    reviews,
    category,
  });

  const updateProduct = (key, value) => {
    dispatch({ type: key === "color" ? "SET_COLOR" : "SET_SIZE", payload: value });
  };

  const adjustQuantity = (action) => {
    dispatch({ type: "ADJUST_QUANTITY", payload: action === "add" ? 1 : -1 });
  };

  return (
    <ProductContext.Provider value={{ ...state, dispatch, updateProduct, adjustQuantity }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
