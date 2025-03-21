import styles from "./buttons.module.css";

function PreviousButton({ onClick, disabled = false }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663"
          stroke="black"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Previous</span>
    </button>
  );
}

export default PreviousButton;
