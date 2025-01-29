"use client";

import styles from "./Cart.module.css";
import Breadcrumb from "@/app/components/Catalog/Breadcrumb/Breadcrumb";
import ProductQuantity from "@/app/components/Product/ProductQuantity/ProductQuantity";
import Link from "next/link";

function cart() {
  const onClick = () => {
    console.log("gg");
  };
  return (
    <section className={styles.cart}>
      <hr />
      <Breadcrumb />
      <h3 className={styles.cart_title}>your cart</h3>
      <div className={styles.cart_container}>
        <div className={styles.cart_products_box}>
          <div className={styles.product_box}>
            <Link href={"#"}>
              <img
                className={styles.product_img}
                src={
                  "https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png"
                }
              />
            </Link>

            <div className={styles.product_main}>
              <div className={styles.product_desc}>
                <div className={styles.product_desc_top}>
                  <p className={styles.product_title}>Gradient Graphic T-shirt</p>
                  <div className={styles.product_size_color_box}>
                    <p className={styles.product_size}>
                      Size: <span>Large</span>
                    </p>
                    <p className={styles.product_color}>
                      Color: <span>White</span>
                    </p>
                  </div>
                </div>
                <p className={styles.product_price}>$145</p>
              </div>
              <div className={styles.product_buttons}>
                <button>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
                <ProductQuantity
                  className={styles.quantity_buttons}
                  selectedQuantity={1}
                  onClick={onClick}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.product_box}>
            <Link href={"#"}>
              <img
                className={styles.product_img}
                src={
                  "https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png"
                }
              />
            </Link>
            <div className={styles.product_main}>
              <div className={styles.product_desc}>
                <p className={styles.product_title}>Gradient Graphic T-shirt</p>
                <p className={styles.product_size}>
                  Size: <span>Large</span>
                </p>
                <p className={styles.product_color}>
                  Color: <span>White</span>
                </p>
                <p className={styles.product_price}>$145</p>
              </div>
              <div className={styles.product_buttons}>
                <button>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
                {/* <ProductQuantity selectedQuantity={1} onClick={onClick} /> */}
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.product_box}>
            <Link href={"#"}>
              <img
                className={styles.product_img}
                src={
                  "https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png"
                }
              />
            </Link>
            <div className={styles.product_main}>
              <div className={styles.product_desc}>
                <p className={styles.product_title}>Gradient Graphic T-shirt</p>
                <p className={styles.product_size}>
                  Size: <span>Large</span>
                </p>
                <p className={styles.product_color}>
                  Color: <span>White</span>
                </p>
                <p className={styles.product_price}>$145</p>
              </div>
              <div className={styles.product_buttons}>
                <button>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM7.5 14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75V14.75ZM12 14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75V14.75ZM12 3.5H6V2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5Z"
                      fill="black"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
                {/* <ProductQuantity selectedQuantity={1} onClick={onClick} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cart_summary_box}>
          <p className={styles.cart_summary_title}>Order Summary</p>
          <div className={styles.cart_summary_rows}>
            <div className={styles.cart_summary_row}>
              <p className={styles.cart_summary_row_text}>Subtotal</p>
              <p className={styles.cart_summary_row_price}>$565</p>
            </div>
            <div className={styles.cart_summary_row}>
              <p className={styles.cart_summary_row_text}>Discount (-20%)</p>
              <p className={`${styles.cart_summary_row_price} ${styles.discount}`}>-$565</p>
            </div>
            <div className={styles.cart_summary_row}>
              <p className={styles.cart_summary_row_text}>Delivery Fee</p>
              <p className={styles.cart_summary_row_price}>$565</p>
            </div>
            <hr />
          </div>
          <div className={styles.last_row}>
            <p className={styles.last_row_text}>Total</p>
            <p className={styles.last_row_price}>$565</p>
          </div>
          <div className={styles.cart_summary_promocode}>
            <div className={styles.promocode}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.0766 10.4857L11.7653 1.17444C11.5917 0.999696 11.3851 0.861152 11.1576 0.766846C10.93 0.672541 10.686 0.62435 10.4397 0.625069H1.75001C1.45164 0.625069 1.16549 0.743595 0.954513 0.954574C0.743534 1.16555 0.625008 1.4517 0.625008 1.75007V10.4398C0.624289 10.6861 0.67248 10.9301 0.766785 11.1576C0.861091 11.3852 0.999635 11.5918 1.17438 11.7654L10.4856 21.0766C10.8372 21.4281 11.3141 21.6256 11.8113 21.6256C12.3084 21.6256 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3085 21.6255 11.8113C21.6255 11.3141 21.4281 10.8373 21.0766 10.4857ZM11.8113 19.2204L2.87501 10.2813V2.87507H10.2813L19.2175 11.8113L11.8113 19.2204ZM7.37501 5.87507C7.37501 6.17174 7.28703 6.46175 7.12221 6.70842C6.95739 6.9551 6.72312 7.14736 6.44903 7.26089C6.17494 7.37442 5.87334 7.40412 5.58237 7.34625C5.2914 7.28837 5.02413 7.14551 4.81435 6.93573C4.60457 6.72595 4.46171 6.45868 4.40383 6.1677C4.34595 5.87673 4.37566 5.57513 4.48919 5.30104C4.60272 5.02695 4.79498 4.79269 5.04165 4.62786C5.28833 4.46304 5.57834 4.37507 5.87501 4.37507C6.27283 4.37507 6.65436 4.5331 6.93567 4.81441C7.21697 5.09571 7.37501 5.47724 7.37501 5.87507Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </svg>
              <input type="text" placeholder="Add promo code" aria-label="Promo code bar" />
            </div>
            <button>Apply</button>
          </div>
          <button className={styles.finish_button}>Finish Order</button>
        </div>
      </div>
    </section>
  );
}

export default cart;
