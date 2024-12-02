import SettingsIcon from "../../Icons/SettingsIcon";
import FilterBox from "./FilterBox/FilterBox";
import styles from "./Filters.module.css";

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
      </ul>

      <button className={styles.button}>Apply Filter</button>
    </aside>
  );
}

export default Filters;
