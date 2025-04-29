import Figure from "@/app/components/Icons/FigureSVG";
import FormContainer from "@/app/components/Account/FormContainer/FormContainer";
import styles from "./SignForm.module.css";

function page() {
  return (
    <section className={styles.sign}>
      <div className={styles.sign_container}>
        <Figure />
        <FormContainer />
      </div>
    </section>
  );
}

export default page;
