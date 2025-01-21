import ProductFAQ from "../../ProductFAQ/ProductFAQ";
import ProductMoreDetails from "../../ProductMoreDetails/ProductMoreDetails";
import ProductReviews from "../../ProductReviews/ProductReviews";
import styles from "./ProductSectionsContainer.module.css";

function ProductSectionsContainer({ activeSection }) {
  return (
    <div>
      {activeSection === "details" && <ProductMoreDetails />}
      {activeSection === "reviews" && <ProductReviews />}
      {activeSection === "faq" && <ProductFAQ />}
    </div>
  );
}

export default ProductSectionsContainer;
