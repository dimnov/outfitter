import styles from "./Cart.module.css";
import Breadcrumb from "@/app/components/Catalog/Breadcrumb/Breadcrumb";
import CartSummaryBox from "@/app/components/Cart/CartSummaryBox/CartSummaryBox";
import CartProductsBox from "@/app/components/Cart/CartProductsBox/CartProductsBox";

function cart() {
  return (
    <section className={styles.cart}>
      <hr />
      <Breadcrumb />
      <h3 className={styles.cart_title}>your cart</h3>
      <div className={styles.cart_container}>
        <CartProductsBox />
        <CartSummaryBox />
      </div>
    </section>
  );
}

export default cart;
