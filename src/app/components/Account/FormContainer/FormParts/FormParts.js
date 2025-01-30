import styles from "./FormParts.module.css";

// Form Input Component
export function FormInput({ id, label, type, value, onChange, placeholder, required }) {
  return (
    <div className={styles.form_box_input}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

// Error Message Component
export function ErrorMessage({ message }) {
  return <p className={styles.error_message}>{message}</p>;
}

// Toggle Button for Login/Register
export function ToggleButton({ newUser, toggleUser }) {
  return (
    <div className={styles.account_btn_box}>
      <p>{newUser ? "Already have an account?" : "Don't have an account?"}</p>
      <button onClick={toggleUser}>{newUser ? "Login to your account" : "Create Account"}</button>
    </div>
  );
}
