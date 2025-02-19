"use client";

import { useState } from "react";
import styles from "./ProductImageGrid.module.css";
import { useProduct } from "@/app/context/ProductContext";
import Image from "next/image";

function ProductImageGrid() {
  const { images } = useProduct();
  const [selectedImage, setSelectedImage] = useState(images[0].image_url || null);

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
          <div className={styles.imageWrapper}>
            <Image className={styles.img} src={image_url} fill alt="Product image" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductImageGrid;
