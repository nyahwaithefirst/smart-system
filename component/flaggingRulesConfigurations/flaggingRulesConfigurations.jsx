"use client";

import { useState } from "react";
import styles from "./flaggingRulesConfigurations.module.css";

const FlaggingRulesConfigurations = ({ setDataSubmitted }) => {
    const [indexTab, setIndexTab] = useState(1);

    const [formData, setFormData] = useState({
        name: "",
        pass: "",
        country: "",
        info: "",
        list: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <div className={styles.container}>

            {/* TOP HEADER WITH BORDER */}
            <div className={styles.topHeader}>
                <h2 className={styles.mainTitle}>Configure Flagging Rules for all Accounts</h2>

                <div className={styles.headerButtons}>
                    <button className={styles.secondaryBtn}>Saved Rules</button>
                    <button className={styles.cancelBtn}>Cancel</button>
                </div>
            </div>

            {/* TABS */}
            <div className={styles.headerRow}>
                <div className={styles.leftSection}>
                    <div className={styles.tabs}>
                        <div
                            onClick={() => setIndexTab(1)}
                            className={`${styles.tab} ${indexTab === 1 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>1</span>
                            <span>Tracking</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(2)}
                            className={`${styles.tab} ${indexTab === 2 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>1</span>
                            <span>Transactions</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(3)}
                            className={`${styles.tab} ${indexTab === 3 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>1</span>
                            <span>Countries</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(4)}
                            className={`${styles.tab} ${indexTab === 4 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>1</span>
                            <span>Banks</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* TAB CONTENT */}
            <div className={styles.formContainer}>

                {/* TAB 1 — FORM ONLY */}
                {indexTab === 1 && (
                    <div className={styles.form}>
                        <h3>Flagging Rules Form</h3>

                        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} />
                        <input type="text" placeholder="Passport" name="pass" value={formData.pass} onChange={handleInputChange} />
                        <input type="text" placeholder="Country" name="country" value={formData.country} onChange={handleInputChange} />
                        <input type="text" placeholder="Info" name="info" value={formData.info} onChange={handleInputChange} />
                        <input type="text" placeholder="List" name="list" value={formData.list} onChange={handleInputChange} />
                    </div>
                )}

                {/* TAB 2 — TABLE + BUTTON */}
                {indexTab === 2 && (
                    <div>
                        <div className={styles.sectionHeader}>
                            <h3>Transactions Table</h3>
                            <button className={styles.addBtn}>Add Transaction Rules</button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Passport</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>AB123456</td>
                                    <td>Flagged</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TAB 3 — TABLE + BUTTON */}
                {indexTab === 3 && (
                    <div>
                        <div className={styles.sectionHeader}>
                            <h3>Countries Table</h3>
                            <button className={styles.addBtn}>Add Country Rules</button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Risk Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nigeria</td>
                                    <td>High</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {/* TAB 4 — TABLE + BUTTON */}
                {indexTab === 4 && (
                    <div>
                        <div className={styles.sectionHeader}>
                            <h3>Banks Table</h3>
                            <button className={styles.addBtn}>Add Bank Rules</button>
                        </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Zenith Bank</td>
                                    <td>Nigeria</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    );
};

export default FlaggingRulesConfigurations;
