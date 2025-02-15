"use client";

import ProductPriceBox from "../../Catalog/Products/ProductPriceBox/ProductPriceBox";
import StarScore from "../../Icons/StarScore";
import styles from "./ProductDetails.module.css";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import { useProduct } from "@/app/context/ProductContext";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import SpinnerMini from "../../Spinner/SpinnerMini/SpinnerMini";

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

function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const { productData, selected, updateProduct } = useProduct();
  const { addToCart } = useCart();
  const { title, description, discount_price, price, score, products_colors } = productData;

  const notSelected = !selected.color || !selected.size;

  const handleAddToCart = () => {
    if (notSelected) return;

    setLoading(true);

    const productToAdd = {
      id: productData.id,
      image: productData.image_url,
      title,
      discount_price,
      price,
      color: selected.color,
      size: selected.size,
      quantity: selected.quantity,
    };

    addToCart(productToAdd);
    setLoading(false);
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
        selectedColor={selected.color}
        onClick={updateProduct}
      />
      <hr />
      <ProductSizes sizes={SIZES} selectedSize={selected.size} onClick={updateProduct} />
      <hr />

      <button
        className={styles.button_add}
        onClick={handleAddToCart}
        disabled={notSelected || loading}
      >
        {loading ? <SpinnerMini /> : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductDetails;
