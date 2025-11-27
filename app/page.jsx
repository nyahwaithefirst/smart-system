"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { ArrowLeftRight, Banknote, ChevronDown, HomeIcon, Landmark, Smartphone, X } from "lucide-react";

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
                    <h5 className={styles.heroTitle}>Transform compliance processes with automated insights</h5>
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
                <div className={styles.experienceSection}>
                    <div className={styles.experienceSectionSubHeader}>FUTURE PAYMENT</div>
                    <div className={styles.flex}>
                        <div className={styles.header}>Experience that grows with your scale</div>
                        <div>Design a financial operating system that works for your business and streamlined cash flow managment</div>
                    </div>
                    <div className={styles.flex}>
                        {[1, 2, 3].map((item) => (
                            <div style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
                                <HomeIcon size={35} style={{ marginBottom: "0.2rem" }} />
                                <h5>Free transfers</h5>
                                <p>create a financial experienceay and automate repeat purchases by scheduling recurring payments</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.preferenceSection}>
                <div className={styles.preferenceHeader}>
                    <span>WHY US</span>
                    <h5>Why they prefer Smart Analysis</h5>
                </div>
                {/* Add this below preferenceHeader in your Home component */}
                <div className={styles.statsSection}>
                    <div className={styles.statsCard}>
                        <h5>3K+</h5>
                        <p>Businesses already running on Smart Analysis</p>
                    </div>
                    <div style={{ justifyContent: "start", rowGap: "3rem" }} className={styles.statsCard}>
                        <p>Instant Withdraw your funds at any time</p>
                        <div className={styles.bankAnomally}>
                            <span className={styles.anoIcon}><Smartphone size={30} /></span>
                            <span className={styles.anoIcon}><ArrowLeftRight style={{ transform: "scaleX(1)", display: "block" }} /></span>
                            <span className={styles.anoIcon}><Landmark size={30} /></span>
                        </div>
                    </div>
                    <div className={styles.statsCard} style={{ flexBasis: "36rem" }}>
                        <div className={styles.graphStates}>
                            <h5>No assets volatillity</h5>
                            <p>Generate returns on your casg reserves without making any investments</p>
                        </div>
                        <div className={styles.graphsStatesLineCard}>
                            <div className={styles.lineChartWrapper}>
                                <div className={styles.lineStats}>
                                    <div>Summary</div>
                                    <div>$1,876,580</div>

                                </div>
                                <div>
                                    <div>
                                        <span>6 Months</span>
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.confidenceSection}>
                <div className={styles.confidenceSectionSubHeader}>FUTURE PAYMENT</div>
                <div className={styles.confidenceHeader}>
                    <div className={styles.confidenceTitle}>Maximize your returns with a Reserve account that generates</div>
                </div>
                <div className={styles.stepsWrap}>
                    {[1, 2, 3].map((item) => (
                        <div className={styles.steps}>
                            <h3>{item}</h3>
                            <h5>Open your account</h5>
                            <p>create a financial experienceay and automate repeat purchases by scheduling</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 