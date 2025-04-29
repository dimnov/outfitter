import styles from "./Cart.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import CartContainer from "@/app/components/Cart/CartContainer/CartContainer";

function cart() {
  return (
    <section className={styles.cart}>
      <hr />
      <Breadcrumbs path={"Cart"} />
      <CartContainer />
    </section>
  );
}

export default cart;
