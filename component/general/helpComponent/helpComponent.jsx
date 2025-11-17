"use client";

import styles from "./helpComponent.module.css";
import { HelpCircle, Mail, BookOpen, MessageSquare } from "lucide-react";

export default function HelpComponent() {
  return (
    <main className={styles.container}>
      {/* === Header === */}
      <div className={styles.header}>
        <HelpCircle className={styles.icon} />
        <div>
          <h5>Help & Support</h5>
          <p>Find answers, guides, and support resources for SanctionPro.</p>
        </div>
      </div>

      {/* === Section: Quick Help === */}
      <section className={styles.card}>
        <div className={styles.sectionHeader}>
          <BookOpen className={styles.sectionIcon} />
          <h6>Quick Guides</h6>
        </div>
        <ul className={styles.list}>
          <li>🔍 How to perform a sanctions search</li>
          <li>⚙️ Managing your API integrations</li>
          <li>🧾 Understanding screening results</li>
          <li>👤 Updating your account settings</li>
        </ul>
      </section>

      {/* === Section: FAQs === */}
      <section className={styles.card}>
        <div className={styles.sectionHeader}>
          <MessageSquare className={styles.sectionIcon} />
          <h6>Frequently Asked Questions</h6>
        </div>
        <div className={styles.faqList}>
          <details>
            <summary>How often is the sanctions list updated?</summary>
            <p>
              SanctionPro automatically syncs with official lists (OFAC, UN, EU,
              and UK) every 24 hours to ensure you always have the latest data.
            </p>
          </details>
          <details>
            <summary>Can I export search results?</summary>
            <p>
              Yes, you can export results in CSV or PDF format directly from the
              Search Results panel.
            </p>
          </details>
          <details>
            <summary>How do I reset my API key?</summary>
            <p>
              Go to Settings → API & Integrations → Generate New Key. Remember
              to update it in any connected systems.
            </p>
          </details>
          <details>
            <summary>Where can I manage billing?</summary>
            <p>
              Billing and subscription details can be accessed under Settings →
              Account → Billing Info.
            </p>
          </details>
        </div>
      </section>

      {/* === Section: Contact Support === */}
      <section className={styles.card}>
        <div className={styles.sectionHeader}>
          <Mail className={styles.sectionIcon} />
          <h6>Contact Support</h6>
        </div>
        <p className={styles.contactText}>
          Still need help? Our support team is here for you. Reach out via email
          or submit a support request.
        </p>
        <div className={styles.footer}>
          <button className={styles.primaryBtn}>Email Support</button>
          <button className={styles.secondaryBtn}>Submit Ticket</button>
        </div>
      </section>
    </main>
  );
}
