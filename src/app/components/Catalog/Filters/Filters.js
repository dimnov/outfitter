"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllColors } from "@/app/lib/data-service";

import SettingsIcon from "../../Icons/SettingsIcon";
import ColorsFilter from "./ColorsFilter/ColorsFilter";
import FilterBox from "./FilterBox/FilterBox";
import PriceFilter from "./PriceFilter/PriceFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import StyleFilter from "./StyleFilter/StyleFilter";

import styles from "./Filters.module.css";

const TITLES = ["shirts", "t-shirts", "shorts", "jeans"];

function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [colors, setColors] = useState([]);

  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    price: {
      min: Number(searchParams.get("minPrice")) || 1,
      max: Number(searchParams.get("maxPrice")) || 300,
    },
    color: searchParams.get("color") || "",
    size: searchParams.get("size") || "",
    style: searchParams.get("style") || "",
  });

  useEffect(() => {
    const fetchColors = async () => {
      const { colors } = await getAllColors();
      setColors(colors);
    };
    fetchColors();
  }, []);

  const changeFilters = (key, value) => {
    console.log(key, value);
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      price: {
        ...prev.price,
        [type]: Number(value),
      },
    }));
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();

    if (filters.category) params.set("category", filters.category);
    if (filters.price.min !== 1) params.set("minPrice", filters.price.min);
    if (filters.price.max !== 300) params.set("maxPrice", filters.price.max);
    if (filters.color) params.set("color", filters.color);
    if (filters.size) params.set("size", filters.size);
    if (filters.style) params.set("style", filters.style);

    router.push(`/shop?${params.toString()}`, { scroll: false });
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
            onChangeFilters={() => changeFilters("category", title)}
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
