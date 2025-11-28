"use client";

import { useRef, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import styles from "./socialMediaResults.module.css";

const SocialMediaResults = ({ setDataSubmitted, results }) => {
    const tableRef = useRef(null);
    const [indexTab, setIndexTab] = useState(1);

    /* -------------------- CSV EXPORT -------------------- */
    const exportToCSV = () => {
        const headers = [
            "Entity Name",
            "Social Handles",
            "Profile URLs",
            "Platforms",
            "Verified Status",
            "Account Type",
            "Profile Created",
            "Location",
            "Activity Level",
            "Total Posts",
            "Engagement Metrics"
        ];

        const rows = results.socialMediaList.map((d) => [
            d.entityName || "-",
            d.socialHandles?.join(", ") || "-",
            d.profileUrls?.join(", ") || "-",
            d.platforms?.join(", ") || "-",
            d.verifiedStatus || "-",
            d.accountType || "-",
            d.profileCreated || "-",
            d.location || "-",
            d.activityLevel || "-",
            d.totalPosts || "-",
            d.engagementMetrics || "-",
        ]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

        const link = document.createElement("a");
        link.href = encodeURI(csvContent);
        link.download = "Social_Media_Screening.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    /* -------------------- PDF EXPORT -------------------- */
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(14);
        doc.text("Social Media Screening Report", 14, 15);

        autoTable(doc, {
            startY: 25,
            head: [
                [
                    "Entity Name",
                    "Social Handles",
                    "Profile URLs",
                    "Platforms",
                    "Verified Status",
                    "Account Type",
                    "Profile Created",
                    "Location",
                    "Activity Level",
                    "Total Posts",
                    "Engagement Metrics"
                ]
            ],
            body: results.socialMediaList.map((d) => [
                d.entityName || "-",
                d.socialHandles?.join(", ") || "-",
                d.profileUrls?.join(", ") || "-",
                d.platforms?.join(", ") || "-",
                d.verifiedStatus || "-",
                d.accountType || "-",
                d.profileCreated || "-",
                d.location || "-",
                d.activityLevel || "-",
                d.totalPosts || "-",
                d.engagementMetrics || "-",
            ]),
            styles: { fontSize: 9, cellPadding: 3 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 }
        });

        doc.save("social_media_screening.pdf");
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <div className={styles.tabs}>
                    <div
                        onClick={() => setIndexTab(1)}
                        className={`${styles.tab} ${indexTab === 1 && styles.tabActive}`}
                    >
                        <span className={styles.badge}>{results.socialMediaList.length}</span>
                        <span>Social Media</span>
                    </div>

                    <div
                        onClick={() => setIndexTab(2)}
                        className={`${styles.tab} ${indexTab === 2 && styles.tabActive}`}
                    >
                        <span className={styles.badge}>{results.adverseMediaList.length}</span>
                        <span>Adverse Media</span>
                    </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className={styles.actions}>
                    <button className={styles.goBackBtn} onClick={() => setDataSubmitted(false)}>
                        Go Back
                    </button>
                    <button className={styles.exportBtn} onClick={exportToCSV}>
                        Export CSV
                    </button>
                    <button className={styles.exportBtn} onClick={exportToPDF}>
                        Export PDF
                    </button>
                </div>
            </div>

            {indexTab === 1 && (
                <div className={styles.table} ref={tableRef}>
                    <table>
                        <thead>
                            <tr>
                                <th>Entity Name</th>
                                <th>Social Handles</th>
                                <th>Profile URLs</th>
                                <th>Platforms</th>
                                <th>Verified Status</th>
                                <th>Account Type</th>
                                <th>Profile Created</th>
                                <th>Location</th>
                                <th>Activity Level</th>
                                <th>Total Posts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.socialMediaList.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.entity_name || "N/A"}</td>
                                    <td>{Array.isArray(row.social_handles) ? row.social_handles.join(", ") : row.social_handles || "N/A"}</td>
                                    {/* <td>{Array.isArray(row.profile_url) ? row.profile_url.join(", ") : row.profile_url || "N/A"}</td> */}
                                    <td>{Array.isArray(row.platform) ? row.platform.join(", ") : row.platform || "N/A"}</td>
                                    {/*<td>{Array.isArray(row.verified_status) ? row.verified_status.join(", ") : (row.verified_status !== undefined ? String(row.verified_status) : "N/A")}</td>
                                    <td>{Array.isArray(row.account_type) ? row.account_type.join(", ") : row.account_type || "N/A"}</td>
                                    <td>{Array.isArray(row.profile_created_date) ? row.profile_created_date.join(", ") : row.profile_created_date || "N/A"}</td>
                                    <td>{row.location || "N/A"}</td>
                                    <td>{Array.isArray(row.activity_level) ? row.activity_level.join(", ") : row.activity_level || "N/A"}</td>
                                    <td>{row.total_posts !== undefined ? row.total_posts : "N/A"}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {indexTab === 2 && (
                <div className={styles.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Entity Name</th>
                                <th>Source Title</th>
                                <th>Summary</th>
                                <th>Source Type</th>
                                <th>Jurisdiction</th>
                                <th>Date Published</th>
                                <th>Source</th>
                                <th>Match Confidence</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.adverseMediaList.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.entity_name}</td>
                                    <td>{row.source_title}</td>
                                    <td>{row.summary}</td>
                                    <td>{row.source_type}</td>
                                    <td>{row.jurisdiction}</td>
                                    <td>{row.date_published}</td>
                                    <td>{row.source}</td>
                                    <td>{row.match_confidence}</td>
                                    <td>{row.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SocialMediaResults;
