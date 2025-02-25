"use client";

import { useSearchParams } from "next/navigation";
import styles from "./catalog.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import Filters from "@/app/components/Catalog/Filters/Filters";
import Products from "@/app/components/Catalog/Products/Products";

function Page() {
  const searchParams = useSearchParams();

  const filters = {
    category: searchParams.get("category") || "",
    price: {
      min: Number(searchParams.get("minPrice")) || 1,
      max: Number(searchParams.get("maxPrice")) || 300,
    },
    color: searchParams.get("color") || "",
    size: searchParams.get("size") || "",
    style: searchParams.get("style") || "",
  };

  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumbs path={"Shop"} />
      <div className={styles.main}>
        <Filters />
        <Products filters={filters} />
      </div>
    </section>
  );
}

export default Page;
