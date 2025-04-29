import styles from "./product.module.css";
import ProductSections from "@/app/components/Product/ProductSections/ProductSections";
import ProductOffers from "@/app/components/Product/ProductOffers/ProductOffers";
import ProductContainer from "@/app/components/Product/ProductContainer/ProductContainer";
import { ProductProvider } from "@/app/context/ProductContext";
import ProductBreadcrumbs from "@/app/components/Product/ProductBreadcrumbs/ProductBreadcrumbs";
import { getAllProducts, getProductDetails } from "@/app/lib/data-service";

export async function generateStaticParams() {
  const { products } = await getAllProducts();

  const ids = products.map((product) => ({ productId: String(product.id) }));

  return ids;
}

async function page({ params }) {
  const { productId } = await params;

  const { productData, images, reviews, category } = await getProductDetails(productId);

  return (
    <section className={styles.product}>
      <hr />
      <ProductProvider
        productData={productData}
        images={images}
        reviews={reviews}
        category={category}
      >
        <ProductBreadcrumbs productId={productId} />
        <ProductContainer />
        <ProductSections />
        <ProductOffers />
      </ProductProvider>
    </section>
  );
}

export default page;
