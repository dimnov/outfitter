"use client";

import Spinner from "../components/Spinner/Spinner";
import { getProduct, getProductImages, getProductReviews } from "../lib/data-service";

const { createContext, useState, useEffect, useContext } = require("react");

const ProductContext = createContext();

export function ProductProvider({ children, productId }) {
  const [productData, setProductData] = useState(null);
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const { productData } = await getProduct(productId);
      const { images } = await getProductImages(productId);
      const { reviews } = await getProductReviews(productId);
      const category = productData.category;

      setProductData(productData);
      setImages(images);
      setReviews(reviews);
      setCategory(category);
      setLoading(false);
      try {
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  return (
    <ProductContext.Provider value={{ productData, images, reviews, category }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
