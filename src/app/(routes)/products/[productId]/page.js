import { getProduct } from "@/app/lib/data-service";
import styles from "./product.module.css";
import Link from "next/link";
import StarScore from "@/app/components/Icons/StarScore";
import ProductPriceBox from "@/app/components/Catalog/Products/ProductPriceBox/ProductPriceBox";

async function page({ params }) {
  // const productId = params.productId;
  // const { product } = await getProduct(productId);
  // console.log(product);
  return (
    <section className={styles.product}>
      <div className={styles.breadcrumbs}>
        <ul className={styles.breadcrumbs_list}>
          <li>
            <Link href={"/shop"}>Home</Link>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </li>
          <li>
            <Link href={"/shop"}>Men</Link>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.53073 0.469372L6.53073 5.46937C6.60065 5.53905 6.65613 5.62184 6.69399 5.71301C6.73184 5.80417 6.75133 5.90191 6.75133 6.00062C6.75133 6.09933 6.73184 6.19707 6.69399 6.28824C6.65613 6.3794 6.60065 6.46219 6.53073 6.53187L1.53073 11.5319C1.38984 11.6728 1.19874 11.7519 0.999484 11.7519C0.800227 11.7519 0.609131 11.6728 0.468235 11.5319C0.327338 11.391 0.248184 11.1999 0.248184 11.0006C0.248184 10.8014 0.327338 10.6103 0.468235 10.4694L4.93761 6L0.46761 1.53062C0.326714 1.38973 0.247559 1.19863 0.247559 0.999372C0.247559 0.800115 0.326714 0.609018 0.46761 0.468122C0.608506 0.327227 0.799603 0.24807 0.99886 0.24807C1.19812 0.24807 1.38921 0.327227 1.53011 0.468122L1.53073 0.469372Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </li>
          <li>
            <Link href={"/shop"}>T-shirts</Link>
          </li>
        </ul>
      </div>
      <div className={styles.product_container}>
        <ul className={styles.product_images}>
          <li className={`${styles.product_images_item} ${styles.small} ${styles.active}`}>
            <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
          </li>
          <li className={`${styles.product_images_item} ${styles.small}`}>
            <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
          </li>
          <li className={`${styles.product_images_item} ${styles.small}`}>
            <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
          </li>
          <li className={`${styles.product_images_item} ${styles.large}`}>
            <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
          </li>
        </ul>
        <div className={styles.product_details}>
          <h3>One Life Graphic T-shirt</h3>
          <StarScore size={24} score={4} />
          <ProductPriceBox
            discount_price={260}
            price={300}
            discountPercentage={40}
            className={styles.largeSize}
          />
          <p className={styles.description}>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </p>
          <hr />
          <div className={styles.colors}>
            <p>Select Colors</p>
            <ul className={styles.colors_list}>
              <li>
                <svg
                  className={styles.svg_base}
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
                </svg>
              </li>
              <li>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
                </svg>
              </li>
              <li>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
                </svg>
              </li>
            </ul>
          </div>
          <hr />
          <div className={styles.sizes}>
            <p>Choose Size</p>
            <ul className={styles.sizes_list}>
              <li>Small</li>
              <li>Medium</li>
              <li className={styles.active}>Large</li>
              <li>X-Large</li>
            </ul>
          </div>
          <hr />
          <div className={styles.buttons}>
            <div className={styles.quantity}>
              <button>
                <svg
                  width="20"
                  height="4"
                  viewBox="0 0 20 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z"
                    fill="black"
                  />
                </svg>
              </button>
              <p>1</p>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <button className={styles.buttons_add}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className={styles.sections}>
        <button>Product Details</button>
        <button>Rating & Reviews</button>
        <button>FAQs</button>
      </div>
      <div className={styles.product_reviews}>
        <div className={styles.product_reviews_header}>
          <p>All Reviews</p>
          <div className={styles.product_reviews_header_buttons}>
            <button>icon</button>
            <button>Latest</button>
            <button>Write a Review</button>
          </div>
        </div>
        <div className={styles.product_reviews_comments}>
          <div>box 1</div>
          <div>box 2</div>
          <div>box 3</div>
        </div>
        <button>Load More Reviews</button>
      </div>
      <div className={styles.product_offers}>
        <header>You might also like</header>
        <div className={styles.product_offers_products}>
          <div>box 1</div>
          <div>box 2</div>
          <div>box 3</div>
          <div>box 4</div>
        </div>
      </div>
    </section>
  );
}

export default page;
