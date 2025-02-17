"use client";

import { useState } from "react";
import styles from "./ColorsFilter.module.css";
import FilterOptionsBox from "../FilterOptionsBox/FilterOptionsBox";
import ColorCircleSVG from "@/app/components/Icons/ColorCircleSVG";

function ColorsFilter({ onClick, colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const changeSelectedColor = (color) => {
    setSelectedColor(color);
    onClick("color", color);
  };

  return isOpen ? (
    <li className={styles.filter_options_box}>
      <div className={styles.filter_box} onClick={toggleIsOpen}>
        <p className={styles.filter_title}>Colors</p>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.469402 5.96945L5.4694 0.969449C5.53908 0.899529 5.62187 0.844052 5.71304 0.806198C5.8042 0.768344 5.90194 0.748858 6.00065 0.748858C6.09936 0.748858 6.1971 0.768344 6.28827 0.806198C6.37943 0.844052 6.46222 0.899529 6.5319 0.969449L11.5319 5.96945C11.6728 6.11034 11.752 6.30144 11.752 6.5007C11.752 6.69996 11.6728 6.89105 11.5319 7.03195C11.391 7.17284 11.1999 7.252 11.0007 7.252C10.8014 7.252 10.6103 7.17284 10.4694 7.03195L6.00003 2.56257L1.53065 7.03257C1.38976 7.17347 1.19866 7.25263 0.999403 7.25263C0.800145 7.25263 0.609049 7.17347 0.468153 7.03257C0.327257 6.89168 0.2481 6.70058 0.2481 6.50132C0.2481 6.30207 0.327257 6.11097 0.468153 5.97007L0.469402 5.96945Z"
            fill="black"
          />
        </svg>
      </div>

      <ul className={styles.colors_list}>
        {colors.map((color_hex) => (
          <li
            key={color_hex}
            className={selectedColor === color_hex ? styles.selected : ""}
            onClick={() => changeSelectedColor(color_hex)}
          >
            <ColorCircleSVG color_hex={color_hex} isSelected={selectedColor === color_hex} />
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <FilterOptionsBox title={"Colors"} onClick={toggleIsOpen} />
  );
}

export default ColorsFilter;
