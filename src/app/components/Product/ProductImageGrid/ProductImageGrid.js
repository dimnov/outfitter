"use client";

import { useState } from "react";
import styles from "./ProductImageGrid.module.css";
import { useProduct } from "@/app/context/ProductContext";

function ProductImageGrid() {
  const { images } = useProduct();
  const [selectedImage, setSelectedImage] = useState(images[0]?.image_url || null);

  const handleSelectImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <ul className={styles.grid_container}>
      {images.map(({ id, image_url }) => (
        <li
          key={id}
          className={selectedImage === image_url ? styles.large_square : styles.small_square}
          onClick={() => handleSelectImage(image_url)}
        >
          <img className={styles.img} src={image_url} />
        </li>
      ))}
    </ul>
  );
}

export default ProductImageGrid;
