"use client";

import React, { useState } from "react";
import styles from "../../styles/SignIn.module.scss";
// import { useRouter } from "next/router";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const router = useRouter();

  const handleSignIn = async () => {
    // password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one capital letter, one number, and be 8 characters long."
      );
      return;
    }

    // Could also be a user name
    // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // if (!emailRegex.test(email)) {
    //   setErrorMessage("Invalid email");
    //   return;
    // }

    // authentication:
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Save user information to session storage:
      sessionStorage.setItem("user", JSON.stringify({ email }));
      // Redirect to home or dashboard after successful sign-in
      // router.push("/");
    } else {
      setErrorMessage("Invalid password.");
    }
  };

  return (
    <div>
      <h1>Sign in or create an account</h1>
      <form className={styles.form}>
        <label>
          Email:
          <input
            type="email" // or user name
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignIn}>
          Sign In
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignInPage;
