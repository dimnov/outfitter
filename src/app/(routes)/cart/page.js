import styles from "./Cart.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import CartProductsBox from "@/app/components/Cart/CartProductsBox/CartProductsBox";
import CartSummaryBox from "@/app/components/Cart/CartSummaryBox/CartSummaryBox";

function cart() {
  return (
    <section className={styles.cart}>
      <hr />
      <Breadcrumbs path={"Cart"} />
      <h3 className={styles.cart_title}>your cart</h3>
      <div className={styles.cart_container}>
        <CartProductsBox />
        <CartSummaryBox />
      </div>
    </section>
  );
}

export default cart;
