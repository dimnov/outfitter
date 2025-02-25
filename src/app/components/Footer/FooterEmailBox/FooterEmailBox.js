"use client";

import { useState } from "react";
import styles from "./FooterEmailBox.module.css";

function FooterEmailBox() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // add error handling
    setIsEmail(true);
    setEmail("");
  };

  return (
    <div className={styles.email_box}>
      <p className={`${styles.email_box_header} ${isEmail && styles.email}`}>
        {!isEmail
          ? "STAY UP TO DATE ABOUT OUR LATEST OFFERS"
          : "Thank you for subscribing! We'll keep you updated with our latest offers."}
      </p>
      {!isEmail ? (
        <form onSubmit={(e) => handleEmailSubmit(e)} className={styles.email_box_form}>
          <div className={styles.input}>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button>Subscribe to Newsletter</button>
        </form>
      ) : null}
    </div>
  );
}

export default FooterEmailBox;
