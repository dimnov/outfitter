import styles from "./HomeProductsList.module.css";
import Link from "next/link";
import ProductBox from "@/app/components/Catalog/Products/ProductBox/ProductBox";

function HomeProductsList({ products = [], title, path = "#" }) {
  return (
    <div className={styles.box_products}>
      <p className={styles.box_products_title}>{title}</p>
      <div className={styles.box_products_list}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            aria-label="Go to this product's page"
          >
            <ProductBox product={product} />
          </Link>
        ))}
      </div>
      <Link href={path} className={styles.view_all_button} aria-label="View all products">
        View All
      </Link>
    </div>
  );
}

export default HomeProductsList;
