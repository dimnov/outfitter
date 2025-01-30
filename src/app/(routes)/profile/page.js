import Figure from "@/app/components/Account/Figure/Figure";
import FormContainer from "@/app/components/Account/FormContainer/FormContainer";
import styles from "./Profile.module.css";

function page() {
  return (
    <section className={styles.profile}>
      <div className={styles.profile_container}>
        <Figure />
        <FormContainer />
      </div>
    </section>
  );
}

export default page;
