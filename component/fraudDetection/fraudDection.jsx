"use client"

import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import styles from './fraudDection.module.css';

const FraudDetection = () => {
    const [rules, setRules] = useState([
        { id: 1, name: 'High Amount', condition: 'Amount > $1000', action: 'Flag as Suspicious' },
    ]);

    const addRule = () => {
        const newRule = {
            id: rules.length + 1,
            name: '',
            condition: '',
            action: '',
        };
        setRules([...rules, newRule]);
    };

    const removeRule = (id) => {
        setRules(rules.filter((r) => r.id !== id));
    };

    const handleChange = (id, field, value) => {
        setRules(rules.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
    };

    return (<div className={styles.container}>
        {/* Sidebar */} <aside className={styles.sidebar}> <h2 className={styles.sidebarTitle}>Fraud Rules</h2> <button className={styles.addRuleButton} onClick={addRule}> <Plus className={styles.addIcon} /> Add Rule </button> </aside>

        {/* Main Content */}
        <main className={styles.content}>
            <h1 className={styles.title}>Fraud Detection Rules</h1>
            <div className={styles.rulesContainer}>
                {rules.map((rule) => (
                    <div key={rule.id} className={styles.ruleCard}>
                        <div className={styles.ruleHeader}>
                            <span>Rule {rule.id}</span>
                            <button className={styles.removeButton} onClick={() => removeRule(rule.id)}>
                                <Trash2 className={styles.removeIcon} />
                            </button>
                        </div>
                        <div className={styles.ruleFields}>
                            <input
                                type="text"
                                placeholder="Rule Name"
                                value={rule.name}
                                onChange={(e) => handleChange(rule.id, 'name', e.target.value)}
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Condition"
                                value={rule.condition}
                                onChange={(e) => handleChange(rule.id, 'condition', e.target.value)}
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Action"
                                value={rule.action}
                                onChange={(e) => handleChange(rule.id, 'action', e.target.value)}
                                className={styles.input}
                            />
                        </div>
                    </div>
                ))}
                {rules.length === 0 && <p className={styles.noRules}>No rules defined.</p>}
            </div>
        </main>
    </div>

    );
};

export default FraudDetection;
