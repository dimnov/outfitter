"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./FormContainer.module.css";
import { login, register } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { ErrorMessage, FormInput, ToggleButton } from "./FormParts/FormParts";

function FormContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setError(null);

      if (newUser) {
        if (password !== repeatPassword) {
          return setError("Passwords don't match");
        }

        const { error } = await register(email, password);
        if (error) {
          setError(error);
        } else {
          redirect("/account/settings");
        }
      } else {
        const { error } = await login(email, password);
        if (error) {
          setError(error);
        } else {
          redirect("/account/settings");
        }
      }
    },
    [email, password, repeatPassword, newUser]
  );

  const toggleUser = useCallback(() => {
    setNewUser((prevUserState) => !prevUserState);
  }, []);

  return (
    <div className={styles.form_container}>
      <div className={styles.form_box_header}>
        <h3>Welcome, Friend!</h3>
        <p>{newUser ? "Register" : "Login"} to save your favorite products.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form_box}>
        <div className={styles.form_box_inputs}>
          <FormInput
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email here..."
            required
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            required
          />
          {newUser && (
            <FormInput
              id="repeat-password"
              label="Repeat Password"
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat your password..."
              required
            />
          )}
          {error && <ErrorMessage message={error} />}
        </div>
        {!newUser && (
          <Link
            className={styles.forget_password}
            href="#"
            aria-label="Click to change your password"
          >
            Forget Password?
          </Link>
        )}
        <div className={styles.form_box_btns}>
          {newUser && (
            <div className={styles.checkbox_box}>
              <input type="checkbox" id="checkbox" required className={styles.checkbox} />
              <label htmlFor="checkbox">
                By creating an account, you agree to our <Link href="#">Terms & Conditions</Link>.
              </label>
            </div>
          )}
          <button>{newUser ? "Register" : "Login"}</button>
        </div>
      </form>
      <ToggleButton newUser={newUser} toggleUser={toggleUser} />
    </div>
  );
}

export default FormContainer;
