import SettingsIcon from "../../Icons/SettingsIcon";
import ColorsFilter from "./ColorsFilter/ColorsFilter";
import FilterBox from "./FilterBox/FilterBox";
import styles from "./Filters.module.css";
import PriceFilter from "./PriceFilter/PriceFilter";
import SizeFilter from "./SizeFilter/SizeFilter";
import StyleFilter from "./StyleFilter/StyleFilter";

function Filters() {
  return (
    <aside className={styles.filters}>
      <div className={styles.header}>
        <p>Filters</p>
        <SettingsIcon />
      </div>
      <hr />
      <ul className={styles.filters_container}>
        <FilterBox title={"Shirts"} />
        <FilterBox title={"T-shirts"} />
        <FilterBox title={"Shorts"} />
        <FilterBox title={"Jeans"} />

        <hr className={styles.filter_line} />
        <PriceFilter />
        <hr className={styles.filter_line} />
        <ColorsFilter />
        <hr className={styles.filter_line} />
        <SizeFilter />
        <hr className={styles.filter_line} />
        <StyleFilter />
        <hr className={styles.filter_line} />
      </ul>

      <button className={styles.button}>Apply Filter</button>
    </aside>
  );
}

export default Filters;
