"use client"

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowLeftRight, ArrowRight, Atom, Banknote, ChevronDown, CreditCard, HomeIcon, Landmark, Nfc, Shield, Smartphone, X } from "lucide-react";
import LineWithAreaChart from "../component/charts/line-chart/lineChart";

export default function Home() {

    const router = useRouter();

    const experinceList = [
        {
            id: 1,
            icon: CreditCard,
            title: "Free transferes",
            description: "Create a financial experienceay and automate repeat purchase by sheduling recurring payments"
        },
        {
            id: 2,
            icon: Landmark,
            title: "Multiple account",
            description: "Run your operations with cash from your account and generate yield on funds stored in your account"
        },
        {
            id: 3,
            icon: Shield,
            title: "Unmatched security",
            description: "Security manage your finances with organisation wide MFA, card-locking and account-level-controls"
        },
    ]

    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 500 },
        { name: 'Apr', value: 450 },
        { name: 'May', value: 600 },
        { name: 'Jun', value: 700 },
        { name: 'Jul', value: 650 },
        { name: 'Aug', value: 700 },
        { name: 'Sep', value: 750 },
        { name: 'Oct', value: 700 },
        { name: 'Nov', value: 850 },
        { name: 'Dec', value: 1000 },
    ]

    const companies = [
        { count: "24%", description: "Revenue business" },
        { count: "180K", description: "In annual revenue" },
        { count: "10+", description: "Months of runaway" }
    ]

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
                        <div className={styles.creditCardHeader}>
                            <div className={styles.creditCardIcon}>
                                <Atom />
                            </div>
                            <div className={styles.creditHeaderBody}>
                                <div>Dipa Inhouse</div>
                                <div>nyahwailloyd10@gmail.com</div>
                            </div>
                        </div>
                        <div className={styles.creditCardInvoice}>
                            <div>Invoice</div>
                            <div>$1,876,580</div>
                            <div>April 21, 2024</div>
                        </div>
                        <div className={styles.creditCardInput}>
                            <CreditCard />
                            <span>Credit Card</span>
                            <input type="radio" />
                        </div>
                        <div className={styles.creditCardInput}>
                            <Landmark />
                            <span>Bank Account</span>
                            <input type="radio" />
                        </div>
                        <button className={styles.btnSecondary}>Pay</button>
                        <div className={styles.creditCard}>
                            <div className={styles.creditCardVisaMain}>
                                <div>Credit Card</div>
                                <div>234 **** ****</div>
                            </div>
                            <div className={styles.creditCardVisaFooter}>
                                <div>VISA</div>
                                <Nfc />
                            </div>
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
                        {experinceList.map((exp) => (
                            <div key={exp.id} style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
                                {/* <HomeIcon size={35} style={{ marginBottom: "0.2rem" }} /> */}
                                {<exp.icon size={35} style={{ marginBottom: "0.2rem" }} />}
                                <h5>{exp.title}</h5>
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
                            <LineWithAreaChart data={data} />
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
            <div className={styles.missionSection}>
                <div className={styles.missionHeader}>
                    <p className={styles.missionSubtitle}>OUR MISSION</p>
                    <h5 className={styles.missionTitle}>We've helped Innovative companies</h5>
                    <p className={styles.missionParagraph}>Hundreds of all sizes and accross industries have made a big improvements with us.</p>
                </div>
                <div className={styles.comStatesWrapper}>
                    {companies.map((item) => (
                        <div className={styles.comStates}>
                            <div>{item.count}</div>
                            <div>{item.description}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.planWrapper}>
                    <h5 className={styles.planHeader}>CHOOSE PLAN:</h5>
                    <div className={styles.planItemGroup}>
                        <div className={styles.planItem}>
                            <div className={styles.planItemWrapper}>
                                <div style={{ color: "#2563eb" }}>Plus</div>
                                <div style={{ color: "#2563eb" }}>$2.99/month</div>
                            </div>
                        </div>
                        <div className={styles.planItem}>
                            <div style={{ backgroundColor: "#2564eb41" }} className={styles.planItemWrapper}>
                                <div>Premium</div>
                                <div>
                                    <span>$2.99/month</span>
                                    <span>$2.99/month</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contactUsSection}>
                <div className={styles.contactUsWrapper}>
                    <div className={styles.contactUsSubTitle}>TRY IT NOW</div>
                    <div className={styles.contactUsFlex}>
                        <div className={styles.contactUsRowItem}>
                            <div className={styles.contactUsHeader}>Ready to level up your payment process?</div>
                            <p className={styles.contactUsDescr}>
                                Supports small business with simple invoicong powerful integrations and cash flow managment tools
                            </p>
                        </div>
                        <div className={styles.contactUsFlexItem}>
                            <button className={styles.btnPrimary}>Get Started Now</button>
                            <button className={styles.btnOutlined}>
                                <span>Learn More</span>
                                <ArrowRight style={{ transform: "rotate(310deg)" }} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <img src="/logo.png" alt="logo" />
                        <p>Smart Analysis — powering the future of compliance intelligence.</p>
                    </div>

                    <div className={styles.footerLinksGroup}>
                        <div className={styles.footerCol}>
                            <h4>Company</h4>
                            <a>About</a>
                            <a>Careers</a>
                            <a>Press</a>
                            <a>News</a>
                        </div>

                        <div className={styles.footerCol}>
                            <h4>Product</h4>
                            <a>Features</a>
                            <a>Pricing</a>
                            <a>Integrations</a>
                            <a>API</a>
                        </div>

                        <div className={styles.footerCol}>
                            <h4>Resources</h4>
                            <a>Blog</a>
                            <a>Guides</a>
                            <a>Help Center</a>
                            <a>Community</a>
                        </div>

                        <div className={styles.footerCol}>
                            <h4>Legal</h4>
                            <a>Privacy Policy</a>
                            <a>Terms of Service</a>
                            <a>Security</a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <span>© 2025 Smart Analysis. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
} 