import styles from "./product.module.css";
import ProductSections from "@/app/components/Product/ProductSections/ProductSections";
import ProductOffers from "@/app/components/Product/ProductOffers/ProductOffers";
import Breadcrumbs from "@/app/components/Product/Breadcrumbs/Breadcrumbs";
import ProductContainer from "@/app/components/Product/ProductContainer/ProductContainer";
import { ProductProvider } from "@/app/context/ProductContext";

async function page({ params }) {
  const { productId } = await params;

  return (
    <section className={styles.product}>
      <hr />
      <ProductProvider productId={productId}>
        <ProductContainer />
        <ProductSections />
        <ProductOffers />
      </ProductProvider>
    </section>
  );
}

export default page;
