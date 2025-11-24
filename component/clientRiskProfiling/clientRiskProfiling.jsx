import { useState } from "react";
import { Upload, FileText, Check, AlertCircle, Plus, Trash2 } from "lucide-react";
import styles from "./clientRiskProfiling.module.css";

const ClientRiskProfiling = ({ setDataSubmitted, setResults }) => {
    const [activeTab, setActiveTab] = useState("manual");
    const [isLoading, setLoading] = useState(false);

    const [manualRows, setManualRows] = useState([
        {
            "First Name": "",
            "Last Name": "",
            "Industry": "",
            "Occupation": "",
            "Customer Type": "",
            "PEP and Sanctions Status": "",
            "Adverse Media": false,
            "Criminal Records": false,
        },
    ]);

    const questionnaireFields = [
        "Industry",
        "Occupation",
        "Customer Type",
        "PEP and Sanctions Status",
        "Adverse Media",
        "Criminal Records",
    ];

    const clientInfoFields = ["First Name", "Last Name"];

    const selectOptions = {
        Industry: ["Finance", "Technology", "Healthcare", "Manufacturing", "Retail"],
        Occupation: ["Manager", "Engineer", "Teacher", "Lawyer", "Doctor"],
        "Customer Type": ["Individual", "Corporate", "SME"],
        "PEP and Sanctions Status": ["PEP", "Not PEP"],
        "Adverse Media": ["True", "False"],
        "Criminal Records": ["True", "False"],
    };

    const handleManualInputChange = (index, field, value) => {
        const updated = [...manualRows];
        updated[index][field] = value;
        setManualRows(updated);
    };

    const addManualRow = () => {
        setManualRows([
            ...manualRows,
            {
                "First Name": "",
                "Last Name": "",
                "Industry": "",
                "Occupation": "",
                "Customer Type": "",
                "PEP and Sanctions Status": "",
                "Adverse Media": false,
                "Criminal Records": false,
            },
        ]);
    };

    const removeManualRow = (index) => {
        if (manualRows.length === 1) return;
        setManualRows(manualRows.filter((_, i) => i !== index));
    };

    const handleManualSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setDataSubmitted(true);
        }, 1500);
    };

    return (
        <div className={styles.container}>
            {/* Tabs */}
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tab} ${activeTab === "manual" ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab("manual")}
                >
                    <FileText className={styles.tabIcon} />
                    Manual Entry
                </button>

                <button
                    className={`${styles.tab} ${activeTab === "csv" ? styles.tabActive : ""}`}
                    onClick={() => setActiveTab("csv")}
                >
                    <Upload className={styles.tabIcon} />
                    CSV Upload
                </button>
            </div>

            {/* Manual Entry */}
            {activeTab === "manual" && (
                <div className={styles.content}>
                    <div className={styles.layout}>
                        {/* Right Form Area */}
                        <form onSubmit={handleManualSubmit} className={styles.form}>
                            <div className={styles.formHeader}>
                                <h2 className={styles.formTitle}>Manual Entry Form</h2>
                                <button type="button" className={styles.addButton} onClick={addManualRow}>
                                    <Plus className={styles.buttonIcon} />
                                    Add Row
                                </button>
                            </div>

                            {manualRows.map((row, rowIndex) => (
                                <div key={rowIndex} className={styles.rowCard}>
                                    <div className={styles.rowHeader}>
                                        <span className={styles.rowNumber}>Row {rowIndex + 1}</span>

                                        {manualRows.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeManualRow(rowIndex)}
                                                className={styles.removeButton}
                                            >
                                                <Trash2 className={styles.buttonIcon} />
                                                Remove
                                            </button>
                                        )}
                                    </div>

                                    {/* Client Info Section */}
                                    <div className={styles.sectionBlock}>
                                        <h4 className={styles.sectionTitle}>Client Information</h4>

                                        {clientInfoFields.map((field) => (
                                            <div key={field} className={styles.formGroup}>
                                                <label className={styles.label}>{field}</label>
                                                <input
                                                    type="text"
                                                    value={row[field]}
                                                    onChange={(e) =>
                                                        handleManualInputChange(rowIndex, field, e.target.value)
                                                    }
                                                    className={styles.input}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Questionnaire Section */}
                                    <div className={styles.sectionBlock}>
                                        <h4 className={styles.sectionTitle}>Questionnaires</h4>

                                        {questionnaireFields.map((field) => (
                                            <div key={field} className={styles.formGroup}>
                                                <label className={styles.label}>{field}</label>

                                                {/* Select dropdown */}
                                                <select
                                                    className={styles.select}
                                                    value={row[field]}
                                                    onChange={(e) =>
                                                        handleManualInputChange(rowIndex, field, e.target.value)
                                                    }
                                                >
                                                    <option value="">-- Select --</option>
                                                    {selectOptions[field].map((opt, idx) => (
                                                        <option key={idx} value={opt}>
                                                            {opt}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className={styles.formActions}>
                                <button type="submit" className={styles.submitButton}>
                                    {isLoading ? "Submitting..." : "Run Profile"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientRiskProfiling;
