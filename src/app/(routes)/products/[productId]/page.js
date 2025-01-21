import { getProduct } from "@/app/lib/data-service";
import styles from "./product.module.css";
import ProductSections from "@/app/components/Product/ProductSections/ProductSections";
import ProductOffers from "@/app/components/Product/ProductOffers/ProductOffers";
import Breadcrumbs from "@/app/components/Product/Breadcrumbs/Breadcrumbs";
import ProductContainer from "@/app/components/Product/ProductContainer/ProductContainer";

async function page({ params }) {
  const { productId } = await params;
  const { productData } = await getProduct(productId);

  return (
    <section className={styles.product}>
      <hr />
      <Breadcrumbs />
      <ProductContainer productData={productData} />
      <ProductSections />
      <ProductOffers />
    </section>
  );
}

export default page;
