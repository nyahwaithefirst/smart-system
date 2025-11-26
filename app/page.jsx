"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css";

export default function Home() {

    const [message, setMessage] = useState("Loading");

    return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.navBrand}>
                    <img className={styles.logo} src={"/logo.png"} />
                </div>
                <div className={styles.nav}>
                    <a href="/services">Services</a>
                    <a href="#">Customers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Learn</a>
                </div>
                <div className={styles.creds}>
                    <button className={styles.btnPrimary}>Login</button>
                    <button className={styles.btnPlain}>Sign Up</button>
                </div>
            </div>
        </div>
    )
} 