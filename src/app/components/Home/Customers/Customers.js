import { getAllTestimonials } from "@/app/lib/data-service";
import CarouselBox from "./CarouselBox/CarouselBox";
import styles from "./Customers.module.css";

async function Customers() {
  const { testimonials } = await getAllTestimonials();

  return (
    <section className={styles.section_customers}>
      <p className={styles.header}>OUR HAPPY CUSTOMERS</p>
      <div className={styles.carousel_container}>
        {testimonials.map((test) => (
          <CarouselBox key={test.id} name={test.customer_name} text={test.customer_text} />
        ))}
      </div>
    </section>
  );
}

export default Customers;
