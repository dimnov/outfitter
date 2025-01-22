"use client";

import { useState } from "react";
import ProductPriceBox from "../../Catalog/Products/ProductPriceBox/ProductPriceBox";
import StarScore from "../../Icons/StarScore";
import styles from "./ProductDetails.module.css";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import ProductButtons from "../ProductSizes/ProductButtons/ProductButtons";

const SIZES = [
  {
    text: "Small",
    value: "s",
  },
  {
    text: "Medium",
    value: "m",
  },
  {
    text: "Large",
    value: "l",
  },
];

const initialState = {
  color: "",
  size: "",
  quantity: 1,
};

function ProductDetails({ productData }) {
  const { title, description, discount_price, price, score, products_colors } = productData;

  const [product, setProduct] = useState(initialState);

  const updateProduct = (key, value) => {
    setProduct((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const adjustQuantity = (action) => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: Math.max(1, prevState.quantity + (action === "add" ? 1 : -1)),
    }));
  };

  return (
    <div className={styles.product_details}>
      <h3 className={styles.title}>{title}</h3>
      <StarScore size={24} score={score} />
      <ProductPriceBox discount_price={discount_price} price={price} className={styles.fontSize} />
      <p className={styles.description}>{description}</p>
      <hr />
      <ProductColors
        colors={products_colors}
        selectedColor={product.color}
        onClick={updateProduct}
      />
      <hr />
      <ProductSizes sizes={SIZES} selectedSize={product.size} onClick={updateProduct} />
      <hr />
      <ProductButtons quantity={product.quantity} onClick={adjustQuantity} />
    </div>
  );
}

export default ProductDetails;
