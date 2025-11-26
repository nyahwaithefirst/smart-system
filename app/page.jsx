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
                    <a href="/services">Services</a>
                    <a href="#">Customers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Learn</a>
                </div>
                <div className={styles.creds}>
                    <button onClick={() => router.push("/login")} className={styles.btnPrimary}>Login</button>
                    <button className={styles.btnPlain}>Sign Up</button>
                </div>
            </div>
        </div>
    )
} 