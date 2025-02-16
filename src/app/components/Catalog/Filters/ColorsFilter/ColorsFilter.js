"use client";

import { useState } from "react";
import styles from "./ColorsFilter.module.css";
import FilterOptionsBox from "../FilterOptionsBox/FilterOptionsBox";

const COLORS = [
  {
    color_hex: "31344F",
  },
  {
    color_hex: "4F4531",
  },
  {
    color_hex: "316F4A",
  },
  {
    color_hex: "317F4A",
  },
  {
    color_hex: "318F4A",
  },
  {
    color_hex: "319F4A",
  },
  {
    color_hex: "312F4A",
  },
  {
    color_hex: "311F4A",
  },
  {
    color_hex: "361F4A",
  },
  {
    color_hex: "371F4A",
  },
];

function ColorsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("31344F");

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const changeSelectedColor = (color) => {
    setSelectedColor(color);
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
        {COLORS.map(({ color_hex }) => (
          <li
            key={color_hex}
            className={selectedColor === color_hex ? styles.selected : ""}
            onClick={() => changeSelectedColor(color_hex)}
          >
            <svg
              className={styles.circle}
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill={`#${color_hex}`} />
            </svg>
            <svg
              className={styles.checkmark}
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5306 2.03063L5.5306 10.0306C5.46092 10.1005 5.37813 10.156 5.28696 10.1939C5.1958 10.2317 5.09806 10.2512 4.99935 10.2512C4.90064 10.2512 4.8029 10.2317 4.71173 10.1939C4.62057 10.156 4.53778 10.1005 4.4681 10.0306L0.968098 6.53063C0.898333 6.46087 0.842993 6.37804 0.805236 6.28689C0.76748 6.19574 0.748047 6.09804 0.748047 5.99938C0.748047 5.90072 0.76748 5.80302 0.805236 5.71187C0.842993 5.62072 0.898333 5.53789 0.968098 5.46813C1.03786 5.39837 1.12069 5.34302 1.21184 5.30527C1.30299 5.26751 1.40069 5.24808 1.49935 5.24808C1.59801 5.24808 1.69571 5.26751 1.78686 5.30527C1.87801 5.34302 1.96083 5.39837 2.0306 5.46813L4.99997 8.4375L12.4693 0.969379C12.6102 0.828483 12.8013 0.749329 13.0006 0.749329C13.1999 0.749329 13.391 0.828483 13.5318 0.969379C13.6727 1.11028 13.7519 1.30137 13.7519 1.50063C13.7519 1.69989 13.6727 1.89098 13.5318 2.03188L13.5306 2.03063Z"
                fill="white"
              />
            </svg>
          </li>
        ))}
      </ul>
    </li>
  ) : (
    <FilterOptionsBox title={"Colors"} onClick={toggleIsOpen} />
  );
}

export default ColorsFilter;
