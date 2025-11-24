"use client"

import React, { useState } from "react";
import styles from "./entityRiskProfiling.module.css";

export default function EntityRiskProfiling() {
    const [rows, setRows] = useState([
        { businessRegNumber: "", businessName: "", q1: "", q2: "", q3: "" },
    ]);

    const addRow = () => {
        setRows([
            ...rows,
            { businessRegNumber: "", businessName: "", q1: "", q2: "", q3: "" },
        ]);
    };

    const removeRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const updated = [...rows];
        updated[index][field] = value;
        setRows(updated);
    };

    const dropdownOptions = ["Low", "Medium", "High"];

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.layout}>

                    {/* Sidebar */}
                    <div className={styles.sidebar}>
                        <p className={styles.sidebarTitle}>Entity Risk Profiling</p>
                        <p className={styles.sidebarText}>
                            Add entities and complete their risk assessment questionnaires.
                        </p>
                    </div>

                    {/* Form */}
                    <div className={styles.form}>
                        <div className={styles.formHeader}>
                            <p className={styles.formTitle}>Entity List</p>
                            <button className={styles.addButton} onClick={addRow}>
                                + Add Entity
                            </button>
                        </div>

                        {rows.map((row, index) => (
                            <div key={index} className={styles.rowCard}>

                                {/* HEADER */}
                                <div className={styles.rowHeader}>
                                    <p className={styles.sectionTitle}>Entity #{index + 1}</p>

                                    {rows.length > 1 && (
                                        <button
                                            className={styles.removeButton}
                                            onClick={() => removeRow(index)}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>

                                {/* SECTION: ENTITY INFO */}
                                <div className={styles.sectionBlock}>
                                    <p className={styles.sectionTitle}>Entity Information</p>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Business Registration Number</label>
                                        <input
                                            className={styles.input}
                                            value={row.businessRegNumber}
                                            onChange={(e) =>
                                                handleChange(index, "businessRegNumber", e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Business Name</label>
                                        <input
                                            className={styles.input}
                                            value={row.businessName}
                                            onChange={(e) =>
                                                handleChange(index, "businessName", e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                {/* SECTION: QUESTIONNAIRES */}
                                <div className={styles.sectionBlock}>
                                    <p className={styles.sectionTitle}>Questionnaires</p>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Question 1</label>
                                        <select
                                            className={styles.select}
                                            value={row.q1}
                                            onChange={(e) =>
                                                handleChange(index, "q1", e.target.value)
                                            }
                                        >
                                            <option value=""></option>
                                            {dropdownOptions.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Question 2</label>
                                        <select
                                            className={styles.select}
                                            value={row.q2}
                                            onChange={(e) =>
                                                handleChange(index, "q2", e.target.value)
                                            }
                                        >
                                            <option value=""></option>
                                            {dropdownOptions.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Question 3</label>
                                        <select
                                            className={styles.select}
                                            value={row.q3}
                                            onChange={(e) =>
                                                handleChange(index, "q3", e.target.value)
                                            }
                                        >
                                            <option value=""></option>
                                            {dropdownOptions.map((opt) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className={styles.formActions}>
                            <button className={styles.submitButton}>Run Profile</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
