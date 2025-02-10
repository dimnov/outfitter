import Link from "next/link";
import styles from "./CartProductBox.module.css";
import ProductPriceBox from "../../Catalog/Products/ProductPriceBox/ProductPriceBox";
import Image from "next/image";
import CartProductButtons from "../CartProductButtons/CartProductButtons";
import { ProductProvider } from "@/app/context/ProductContext";

function CartProductBox({ product }) {
  const { id, title, price, discount_price, color, size, quantity, image } = product;
  const [color_hex, color_name] = color.split("%");

  return (
    <div className={styles.product_box}>
      <Link href={`/products/${id}`}>
        <Image src={image} width={124} height={124} alt="product image" />
      </Link>

      <div className={styles.product_main}>
        <div className={styles.product_desc}>
          <div className={styles.product_desc_top}>
            <p className={styles.product_title}>{title}</p>
            <div className={styles.product_size_color_box}>
              <p className={styles.product_size}>
                Size: <span>{size}</span>
              </p>
              <p className={styles.product_color}>
                Color:
                <svg
                  className={styles.circle}
                  width="16"
                  height="16"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.5"
                    cy="17.5"
                    r="17.5"
                    stroke="#000000"
                    strokeWidth="2"
                    fill={`#${color_hex}`}
                  />
                </svg>
                ({color_name})
              </p>
            </div>
          </div>
          <ProductPriceBox discount_price={discount_price} price={price} />
        </div>
        <ProductProvider>
          <CartProductButtons quantity={quantity} />
        </ProductProvider>
      </div>
    </div>
  );
}

export default CartProductBox;
