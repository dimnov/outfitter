"use client";

import { useState } from "react";
import styles from "./ProductSections.module.css";
import ProductSectionsContainer from "./ProductSectionsContainer/ProductSectionsContainer";
import ProductSectionsButton from "./ProductSectionsButton/ProductSectionsButton";

const BUTTONS = [
  {
    text: "Product Details",
    value: "details",
  },
  {
    text: "Rating & Reviews",
    value: "reviews",
  },
  {
    text: "FAQs",
    value: "faq",
  },
];

function ProductSections() {
  const [activeSection, setActiveSection] = useState("reviews");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.sections}>
      <div className={styles.buttons}>
        {BUTTONS.map(({ text, value }) => (
          <ProductSectionsButton
            key={value}
            text={text}
            value={value}
            isActive={activeSection === value}
            onClick={handleSetActive}
          />
        ))}
      </div>

      <ProductSectionsContainer activeSection={activeSection} />
    </div>
  );
}

export default ProductSections;
