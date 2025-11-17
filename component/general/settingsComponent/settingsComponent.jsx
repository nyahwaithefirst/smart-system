"use client";

import styles from "./settingsComponent.module.css";
import { Save, Key, Bell, User } from "lucide-react";

export default function SettingsComponent() {
  return (
    <main className={styles.container}>
      {/* === Profile Settings === */}
      <section className={styles.card}>
        <div className={styles.header}>
          <User className={styles.icon} />
          <h5>Profile Settings</h5>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Totok Michael" />
          </div>
          <div className={styles.formGroup}>
            <label>Email Address</label>
            <input type="email" placeholder="totok.michael@sanctionpro.com" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
        </form>
        <div className={styles.footer}>
          <button className={styles.primaryBtn}>
            <Save className={styles.btnIcon} /> Save Changes
          </button>
        </div>
      </section>

      {/* === Application Preferences === */}
      <section className={styles.card}>
        <div className={styles.header}>
          <Bell className={styles.icon} />
          <h5>Application Preferences</h5>
        </div>
        <div className={styles.preferenceGrid}>
          <div className={styles.formGroup}>
            <label>Default List Source</label>
            <select>
              <option>OFAC SDN</option>
              <option>UN Consolidated</option>
              <option>EU Sanctions</option>
              <option>UK HMT</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Alert Threshold</label>
            <input type="number" placeholder="80" min="0" max="100" />
            <small>Minimum match confidence (%) to trigger alert</small>
          </div>
          <div className={styles.toggleRow}>
            <label>Enable Dark Mode</label>
            <input type="checkbox" />
          </div>
          <div className={styles.toggleRow}>
            <label>Email Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.primaryBtn}>
            <Save className={styles.btnIcon} /> Update Preferences
          </button>
        </div>
      </section>

      {/* === API & Integrations === */}
      <section className={styles.card}>
        <div className={styles.header}>
          <Key className={styles.icon} />
          <h5>API & Integrations</h5>
        </div>
        <div className={styles.formGroup}>
          <label>API Key</label>
          <input type="text" value="sk_live_823hf8239fh2929df..." readOnly />
          <small>
            Use this API key to connect SanctionPro with other systems.
          </small>
        </div>
        <div className={styles.formGroup}>
          <label>Webhook Endpoint</label>
          <input
            type="text"
            placeholder="https://yourdomain.com/webhooks/sanction"
          />
        </div>
        <div className={styles.footer}>
          <button className={styles.primaryBtn}>
            <Save className={styles.btnIcon} /> Save Integration Settings
          </button>
        </div>
      </section>
    </main>
  );
}
