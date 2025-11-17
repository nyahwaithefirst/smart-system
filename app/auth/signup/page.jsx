"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Account created successfully!");
    console.log("Signup submitted:", form);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.row}>

          {/* LEFT SIDE — Info Section */}
          <div className={styles.leftSide}>
            <div className={styles.leftContent}>
              <h2 className={styles.title}>Join the Future of Due Diligence</h2>

              <p className={styles.subtitle}>
                Create your account today and gain access to advanced tools for
                compliance, verification, and risk management — all in one
                intuitive platform built for professionals.
              </p>

              <img
                src="https://th.bing.com/th/id/R.1d79b9dc6afacd809ac565fe62cf8d7a?rik=Iln1q1CeA0AzRA&pid=ImgRaw&r=0"
                alt="Signup illustration"
                className={styles.image}
              />
            </div>
          </div>

          {/* RIGHT SIDE — Signup Form */}
          <div className={styles.rightSide}>
            <div className={styles.formBox}>
              <div className={styles.sectionTitle}>
                <h5 className={styles.sectionSubtitle}>Create Account</h5>
                <h1 className={styles.sectionHeading}>Sign Up Today</h1>
              </div>

              {error && <div className={styles.errorBox}>{error}</div>}
              {success && <div className={styles.successBox}>{success}</div>}

              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Create Account
                </button>

                <p className={styles.loginText}>
                  Already have an account?{" "}
                  <a href="/login" className={styles.loginLink}>
                    Login Here
                  </a>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
