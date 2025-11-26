"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {

    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.navBrand}>
                    <img className={styles.logo} src={"/logo.png"} />
                </div>
                <div className={styles.nav}>
                    <a className={styles.navItem} href="/services">Services</a>
                    <a className={styles.navItem} href="#">Customers</a>
                    <a className={styles.navItem} href="#">Pricing</a>
                    <a className={styles.navItem} href="#">Learn</a>
                </div>
                <div className={styles.creds}>
                    <button onClick={() => router.push("/login")} className={styles.btnPrimary}>Login</button>
                    <button className={styles.btnPlain}>Sign Up</button>
                </div>
            </div>
            <div className={styles.heroSection}>
                <div className={styles.left}>
                    <h5 className={styles.heroTitle}>Automate due diligence and confidently verify every business relationship</h5>
                    <p className={styles.heroText}>Empower organizations through automated due diligence, comprehensive compliance intelligence, and streamlined verification workflows.</p>
                    <div className={styles.getStarted}>
                        <input type="text" placeholder="Your email address" />
                        <button className={styles.btnPrimary}>
                            <span>Get Started</span>
                        </button>
                    </div>
                    <div className={styles.otherClientsWrapper}>
                        <span className={styles.otherClients}>Klarna.</span>
                        <span className={styles.otherClients}>coinbase.</span>
                        <span className={styles.otherClients}>Instacart</span>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.creditCardForm}>
                        {/* Login Area */}
                        <div className={styles.creditCard}>
                            {/* Card Visa Example */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 