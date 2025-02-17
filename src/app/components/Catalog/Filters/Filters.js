"use client";

import { useState } from "react";
import SettingsIcon from "../../Icons/SettingsIcon";
import ColorsFilter from "./ColorsFilter/ColorsFilter";
import FilterBox from "./FilterBox/FilterBox";
import styles from "./Filters.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import StyleFilter from "./StyleFilter/StyleFilter";

const TITLES = ["Shirts", "T-shirts", "Shorts", "Jeans"];

const initialState = {
  category: "",
  price: {
    min: 0,
    max: 100,
  },
  color: "",
  size: "",
  style: "",
};

function Filters({colors}) {
  const [filters, setFilters] = useState(initialState);

  const changeFilters = (key, value) => {
    setFilters((prevState) => ({
      ...prevState,
      [key]: prevState[key] === value ? "" : value,
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters((prevState) => ({
      ...prevState,
      price: {
        ...prevState.price,
        [type]: Number(value),
      },
    }));
  };

  const handleSubmit = () => {
    console.log(filters);
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
            onClick={changeFilters}
          />
        ))}

        <hr className={styles.filter_line} />
        <PriceFilter
          onClick={handlePriceChange}
          minPrice={filters.price.min}
          maxPrice={filters.price.max}
        />
        <hr className={styles.filter_line} />
        <ColorsFilter onClick={changeFilters} colors={colors}/>
        <hr className={styles.filter_line} />
        <SizeFilter onClick={changeFilters} />
        <hr className={styles.filter_line} />
        <StyleFilter selectedStyle={filters.style} onClick={changeFilters} />
        <hr className={styles.filter_line} />
      </ul>

      <button className={styles.button} onClick={handleSubmit}>
        Apply Filter
      </button>
    </aside>
  );
}

export default Filters;
