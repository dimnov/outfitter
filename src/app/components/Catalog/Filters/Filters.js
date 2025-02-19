"use client";

import { useEffect, useState } from "react";
import { getAllColors } from "@/app/lib/data-service";

import SettingsIcon from "../../Icons/SettingsIcon";
import ColorsFilter from "./ColorsFilter/ColorsFilter";
import FilterBox from "./FilterBox/FilterBox";
import PriceFilter from "./PriceFilter/PriceFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import StyleFilter from "./StyleFilter/StyleFilter";

import styles from "./Filters.module.css";

const TITLES = ["shirts", "t-shirts", "shorts", "jeans"];

const initialFilters = {
  category: "",
  price: { min: 1, max: 300 },
  color: "",
  size: "",
  style: "",
};

function Filters({ onGetFilters }) {
  const [filters, setFilters] = useState(initialFilters);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchColors = async () => {
      const { colors } = await getAllColors();
      setColors(colors);
    };
    fetchColors();
  }, []);

  const changeFilters = (key, value) => {
    const updatedFilters = {
      ...filters,
      [key]: filters[key] === value ? "" : value,
    };
    setFilters(updatedFilters);
  };

  const handlePriceChange = (type, value) => {
    const updatedFilters = {
      ...filters,
      price: {
        ...filters.price,
        [type]: Number(value),
      },
    };
    setFilters(updatedFilters);
  };

  const handleSubmit = () => {
    onGetFilters(filters);
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.header}>
        <p>Filters</p>
        <SettingsIcon />
      </div>
      <hr />
      <ul className={styles.filters_container}>
        {TITLES.map((title) => (
          <FilterBox
            isSelected={filters.category === title}
            key={title}
            title={title}
            onChangeFilters={changeFilters}
          />
        ))}

        <hr className={styles.filter_line} />
        <PriceFilter
          onChangeFilters={handlePriceChange}
          minPrice={filters.price.min}
          maxPrice={filters.price.max}
        />
        <hr className={styles.filter_line} />
        <ColorsFilter
          selectedColor={filters.color}
          onChangeFilters={changeFilters}
          colors={colors}
        />
        <hr className={styles.filter_line} />
        <SizeFilter selectedSize={filters.size} onChangeFilters={changeFilters} />
        <hr className={styles.filter_line} />
        <StyleFilter selectedStyle={filters.style} onChangeFilters={changeFilters} />
        <hr className={styles.filter_line} />
      </ul>

      <button className={styles.button} onClick={handleSubmit}>
        Apply Filter
      </button>
    </aside>
  );
}

export default Filters;
