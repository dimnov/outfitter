"use client";

import { useState, useEffect } from "react";
import { getProductsPerPage } from "@/app/lib/data-service";

import ProductsGrid from "./ProductsGrid/ProductsGrid";
import ProductsHeader from "./ProductsHeader/ProductsHeader";
import Pagination from "../Pagination/Pagination";
import Loading from "./loading.js";

import styles from "./Products.module.css";

const pageSize = 12;

function Products({ filters }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("most-popular");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { products, count } = await getProductsPerPage(page, pageSize, filters, sortBy);
        setProducts(products);
        setTotalCount(count);
      } catch (error) {
        setPage(1);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, filters, sortBy]);

  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className={styles.products}>
      <ProductsHeader
        totalPerPage={products.length}
        totalCount={totalCount}
        setSortBy={setSortBy}
      />

      {loading ? <Loading /> : <ProductsGrid products={products} />}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default Products;
