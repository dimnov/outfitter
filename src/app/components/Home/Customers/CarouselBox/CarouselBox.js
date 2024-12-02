import StarScore from "@/app/components/Icons/StarScore";
import Checkmark from "@/app/components/Icons/Checkmark";
import styles from "./CarouselBox.module.css";

function CarouselBox({ name, text }) {
  return (
    <div className={styles.carousel_box}>
      <div className={styles.customer_score}>
        <StarScore score={5} />
      </div>
      <div className={styles.customer_header}>
        <p className={styles.customer_name}>{name}</p>
        <Checkmark />
      </div>
      <p className={styles.customer_text}>{text}</p>
    </div>
  );
}

export default CarouselBox;
