import { getProductsPerPage } from "@/app/lib/data-service";
import ProductBox from "../../Catalog/Products/ProductBox/ProductBox";
import styles from "./ProductOffers.module.css";
import Link from "next/link";

async function ProductOffers() {
  const { products } = await getProductsPerPage(1, 4);
  return (
    <div className={styles.product_offers}>
      <h4 className={styles.header}>You might also like</h4>
      <div className={styles.product_offers_products}>
        {products?.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <ProductBox product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductOffers;
