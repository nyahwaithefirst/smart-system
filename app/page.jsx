"use client"

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, ArrowLeftRight, ArrowRight, Atom, BadgeCheck, Banknote, ChevronDown, CreditCard, FileSearch, HomeIcon, Landmark, Nfc, SearchCheck, Shield, ShieldCheck, Smartphone, X } from "lucide-react";
import LineWithAreaChart from "../component/charts/line-chart/lineChart";

export default function Home() {

    const router = useRouter();

    const experinceList = [
        {
            id: 1,
            icon: SearchCheck,
            title: "Automated KYC Checks",
            description: "Run identity verification, sanctions screening, and AML checks automatically for every new onboarding."
        },
        {
            id: 2,
            icon: FileSearch,
            title: "Document Verification",
            description: "Upload, validate, and audit compliance documents with automated extraction and verification workflows."
        },
        {
            id: 3,
            icon: ShieldCheck,
            title: "Risk Monitoring",
            description: "Monitor ongoing financial, operational, and regulatory risks with real-time alerts and scoring."
        },
    ];

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

    const dueDiligenceStages = [
        {
            step: 1,
            title: "Collect and Upload Documents",
            description:
                "Provide essential company documents to initiate automated identity, compliance, and risk evaluations."
        },
        {
            step: 2,
            title: "Automated Compliance Checks",
            description:
                "Our system scans for sanctions, validates identities, and evaluates regulatory compliance in real time."
        },
        {
            step: 3,
            title: "Risk Review & Final Assessment",
            description:
                "Receive a consolidated risk profile and detailed insights to support confident, audit-ready decisions."
        }
    ];

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
                            <input name="transferType" type="radio" checked />
                        </div>
                        <div className={styles.creditCardInput}>
                            <Landmark />
                            <span>Bank Account</span>
                            <input name="transferType" type="radio" />
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
                    <div style={{ marginBottom: "2.2rem" }} className={styles.flex}>
                        <div className={styles.header}>Experience that grows with your scale</div>
                        <div>Build a unified compliance and financial operations system that enhances oversight and simplifies risk management.</div>
                    </div>
                    <div className={styles.flex}>
                        {experinceList.map((exp) => (
                            <div key={exp.id} style={{ display: "flex", flexDirection: "column", rowGap: "0.5rem" }}>
                                {/* <HomeIcon size={35} style={{ marginBottom: "0.2rem" }} /> */}
                                {<exp.icon color="#1d4ed8" size={35} style={{ marginBottom: "0.2rem" }} />}
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
                        <p>Instant insights into risk, anomalies, and compliance red flags.</p>
                        <div className={styles.bankAnomally}>
                            <span className={styles.anoIcon}><FileSearch size={30} /></span>
                            <span className={styles.anoIcon}><img src={"/transfer.png"} style={{ height: "4rem", width: "5.2rem" }} /></span>
                            <span className={styles.anoIcon}><AlertTriangle size={30} /></span>
                        </div>
                    </div>
                    <div className={styles.statsCard} style={{ flexBasis: "36rem" }}>
                        <div className={styles.graphStates}>
                            <h5>No exposure to asset.</h5>
                            <p>Strengthen cash-management accuracy while maintaining a fully non-investment posture</p>
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
                <div className={styles.confidenceSectionSubHeader}>DUE DILIGENCE WORKFLOW</div>

                <div className={styles.confidenceHeader}>
                    <div className={styles.confidenceTitle}>
                        Strengthen your compliance process with a structured review workflow
                    </div>
                </div>

                <div className={styles.stepsWrap}>
                    {dueDiligenceStages.map((item, index) => (
                        <div key={index} className={styles.steps}>
                            <h3>{item.step}</h3>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
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
                    <div className={styles.contactUsSubTitle}>START YOUR REVIEW</div>

                    <div className={styles.contactUsFlex}>
                        <div className={styles.contactUsRowItem}>
                            <div className={styles.contactUsHeader}>
                                Ready to streamline your due-diligence workflow?
                            </div>

                            <p className={styles.contactUsDescr}>
                                Smart Analysis automates risk checks, document verification, and
                                compliance reporting—helping your team move faster with greater accuracy.
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