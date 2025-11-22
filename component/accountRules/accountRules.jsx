"use client";

import { useState } from "react";
import styles from "./accountRules.module.css";

const AccountRules = () => {
    const [showModal, setShowModal] = useState(false);
    const [rules, setRules] = useState([]);

    const [formData, setFormData] = useState({
        accountName: "",
        accountNumber: "",
        ruleType: "",
    });

    const openModal = () => setShowModal(true);
    const closeModal = () => {
        setFormData({ accountName: "", accountNumber: "", ruleType: "" });
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addAccountRule = () => {
        setRules([...rules, formData]);
        closeModal();
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <h2 className={styles.title}>Rules Assigned to this Account</h2>
                <button className={styles.addBtn} onClick={openModal}>
                    <span className={styles.plus}>+</span> Add Account Rule
                </button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Rule Type</th>
                    </tr>
                </thead>

                <tbody>
                    {rules.length === 0 ? (
                        <tr>
                            <td colSpan="3" className={styles.emptyRow}>
                                No rules added yet.
                            </td>
                        </tr>
                    ) : (
                        rules.map((rule, index) => (
                            <tr key={index}>
                                <td>{rule.accountName}</td>
                                <td>{rule.accountNumber}</td>
                                <td>{rule.ruleType}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <div className={styles.modalBackdrop}>
                    <div className={styles.modal}>
                        <h3>Add Account Rule</h3>

                        <input
                            type="text"
                            placeholder="Account Name"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            placeholder="Account Number"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            placeholder="Rule Type"
                            name="ruleType"
                            value={formData.ruleType}
                            onChange={handleInputChange}
                        />

                        <div className={styles.modalActions}>
                            <button className={styles.cancelBtn} onClick={closeModal}>
                                Cancel
                            </button>
                            <button className={styles.saveBtn} onClick={addAccountRule}>
                                Add Rule
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccountRules;
