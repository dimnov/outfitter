import Link from "next/link";
import styles from "./Profile.module.css";
import Figure from "./Figure";

function page() {
  return (
    <section className={styles.profile}>
      <div className={styles.profile_container}>
        <Figure />
        <div className={styles.form_container}>
          <div className={styles.form_box_header}>
            <h3>Welcome, Friend!</h3>
            <p>Login to save your favorite products.</p>
          </div>
          <form className={styles.form_box}>
            <div className={styles.form_box_inputs}>
              <div className={styles.form_box_input}>
                <label>Email</label>
                <input type="email" placeholder="Your email here..." />
              </div>
              <div className={styles.form_box_input}>
                <label>Password</label>
                <input type="password" placeholder="Enter password..." />
              </div>
            </div>
            <Link className={styles.forget_password} href={"#"}>
              Forget Password?
            </Link>
            <div className={styles.form_box_btns}>
              <div className={styles.checkbox_box}>
                <input type="checkbox" id="checkbox" className={styles.checkbox} />
                <label htmlFor="checkbox">
                  By creating an account, you agree to our{" "}
                  <Link href={"#"}>Terms & Conditions</Link>.
                </label>
              </div>
              <button>Login</button>
            </div>
          </form>
          <div className={styles.account_btn_box}>
            <p>Don&apos;t have an account?</p>
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
