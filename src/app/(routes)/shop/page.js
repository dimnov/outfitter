"use client";

import { useState } from "react";
import styles from "./catalog.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import Filters from "@/app/components/Catalog/Filters/Filters";
import Products from "@/app/components/Catalog/Products/Products";

function Page() {
  const [filters, setFilters] = useState({});

  const handleGetFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumbs path={"Shop"} />
      <div className={styles.main}>
        <Filters onGetFilters={handleGetFilters} />
        <Products filters={filters} />
      </div>
    </section>
  );
}

export default Page;
