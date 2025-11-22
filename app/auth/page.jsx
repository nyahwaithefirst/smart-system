"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Shield, Activity, BarChart3 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className={styles.wrapper}>
      {/* Left Side (Brand + Content) */}
      <div className={styles.leftPanel}>
        <div className={styles.brandHeader}>
          <Shield size={36} className={styles.brandIcon} />
          <h2 className={styles.brandTitle}>Compliance Hub</h2>
        </div>

        <h1 className={styles.heading}>Enterprise Risk & Compliance Platform</h1>
        <p className={styles.description}>
          Monitor, analyze, and secure your organization with real-time insights,
          AI-powered detection, and seamless regulatory compliance workflows.
        </p>

        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Activity size={20} />
            </div>
            <span>Real-time AML & fraud monitoring</span>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <BarChart3 size={20} />
            </div>
            <span>Advanced analytics & automated reporting</span>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <Shield size={20} />
            </div>
            <span>Bank-grade security & access control</span>
          </div>
        </div>
      </div>

      {/* Right Side (Login Card) */}
      <div className={styles.rightPanel}>
        <div className={styles.card}>
          <h2 className={styles.loginTitle}>Sign In</h2>
          <p className={styles.loginSubtitle}>
            Access your dashboard using your authorized credentials.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>

          <p className={styles.forgotText}>
            Forgot password? <a href="#" className={styles.link}>Reset here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
