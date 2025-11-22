"use client";

import styles from './clientRiskProfilingResults.module.css';

const ClientRiskProfilingResults = ({ setDataSubmitted }) => {
    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <h5>Client Risk Profiling Results</h5>
            </div>

            {/* Summary */}
            <div className={styles.summarySection}>
                <img
                    className={styles.profileImage}
                    src="/placeholder-profile.png"
                    alt="Client profile"
                />
                <div className={styles.summaryText}>Client Risk Profile Results</div>
            </div>

            {/* Risk Rating Table */}
            <div className={styles.tableCard}>
                <div className={styles.clientName}>
                    <strong>Name Registration:</strong> Lloyd Nyahwai
                </div>

                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Risk Rating Variable</th>
                            <th>Risk Rating Answer</th>
                            <th>Risk Rating Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Country of Operation</td>
                            <td>Zimbabwe</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Source of Funds</td>
                            <td>Salary</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Business Activity</td>
                            <td>Consultant</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Transaction Volume</td>
                            <td>$10,000 / month</td>
                            <td>Medium</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Adverse Media Section */}
            <div className={styles.sectionCard}>
                <h6 className={styles.sectionTitle}>Adverse Media Results</h6>
                <div className={styles.sectionContent}>
                    <ul className={styles.list}>
                        <li>
                            ✔ No negative news found in global media databases.
                        </li>
                        <li>
                            ✔ No sanctions, fraud allegations, or political exposure reported.
                        </li>
                        <li>
                            ✔ Social media scan indicates normal activity.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Criminal Record Section */}
            <div className={styles.sectionCard}>
                <h6 className={styles.sectionTitle}>Criminal Record Check</h6>
                <div className={styles.sectionContent}>
                    <ul className={styles.list}>
                        <li>✔ No criminal convictions on record.</li>
                        <li>✔ No pending charges reported.</li>
                        <li>✔ Not listed on any international watchlists.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClientRiskProfilingResults;
