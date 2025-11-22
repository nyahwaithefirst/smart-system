"use client";

import { useRef, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";

import styles from "./flaggingRules.module.css";

const FlaggingRules = ({ setDataSubmitted }) => {
    const tableRef = useRef(null);
    const [indexTab, setIndexTab] = useState(1);

    const [showModal, setShowModal] = useState(false);
    const [newRule, setNewRule] = useState({
        name: "",
        pass: "",
        country: "",
        info: "",
        list: "",
    });

    const [data, setData] = useState([
        {
            name: "Emmerson Dambudzo",
            pass: "Passport, AD005865",
            country: "Zimbabwe / (Linked To: MNANGAGWA, Emmerson Dambudzo)",
            info: "OFAC",
            list: "Sanctions",
        },
    ]);

    /* -------------------- CSV EXPORT -------------------- */
    const exportToCSV = () => {
        const headers = ["Name", "Passport", "Country", "Info", "List"];
        const rows = data.map((d) => [d.name, d.pass, d.country, d.info, d.list]);

        let csvContent =
            "data:text/csv;charset=utf-8," +
            [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

        const encodedURI = encodeURI(csvContent);
        const link = document.createElement("a");
        link.href = encodedURI;
        link.download = "Screening_Report.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    /* -------------------- PDF EXPORT -------------------- */
    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(14);
        doc.text("Client Name Screening Report", 14, 15);

        autoTable(doc, {
            startY: 25,
            head: [["Name", "Passport", "Country", "Info", "List"]],
            body: data.map((d) => [d.name, d.pass, d.country, d.info, d.list]),
            styles: { fontSize: 9, cellPadding: 3 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 },
        });

        doc.save("client_name_screening.pdf");
    };

    const handleAddRule = () => {
        setNewRule({ name: "", pass: "", country: "", info: "", list: "" });
        setShowModal(true);
    };

    const handleSaveRule = () => {
        setData([...data, newRule]);
        setShowModal(false);
    };

    return (
        <div className={styles.container}>
            {/* Tabs + Buttons */}
            <div className={styles.headerRow}>
                <div className={styles.leftSection}>
                    <div className={styles.tabs}>
                        <div
                            onClick={() => setIndexTab(1)}
                            className={`${styles.tab} ${indexTab === 1 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>2</span>
                            <span>Flagging Rules</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(2)}
                            className={`${styles.tab} ${indexTab === 2 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>0</span>
                            <span>Flagged Account</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(3)}
                            className={`${styles.tab} ${indexTab === 3 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>5</span>
                            <span>PEP Accounts</span>
                        </div>
                        <div
                            onClick={() => setIndexTab(4)}
                            className={`${styles.tab} ${indexTab === 4 && styles.tabActive}`}
                        >
                            <span className={styles.badge}>5</span>
                            <span>Staff Accounts</span>
                        </div>
                    </div>
                </div>

                <div className={styles.rightSection}>
                    <button className={styles.addRuleBtn} onClick={handleAddRule}>
                        + Add Rule
                    </button>
                    <button
                        className={styles.addPepBtn}
                        onClick={() => {
                            setNewRule({
                                name: "",
                                pass: "",
                                country: "",
                                info: "PEP",
                                list: "",
                            });
                            setShowModal(true);
                        }}
                    >
                        + Add PEP Account
                    </button>
                    <button
                        className={styles.addStaffBtn}
                        onClick={() => {
                            setNewRule({
                                name: "",
                                pass: "",
                                country: "",
                                info: "Staff",
                                list: "",
                            });
                            setShowModal(true);
                        }}
                    >
                        + Staff Account
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className={styles.table} ref={tableRef}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Passport</th>
                            <th>Country</th>
                            <th>Info</th>
                            <th>List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i}>
                                <td>{row.name}</td>
                                <td>{row.pass}</td>
                                <td>{row.country}</td>
                                <td>{row.info}</td>
                                <td>{row.list}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Rule Modal */}
            {showModal && (
                <div className={styles.modalBackdrop}>
                    <div className={styles.modal}>
                        <h3>Add New Rule</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newRule.name}
                            onChange={(e) =>
                                setNewRule({ ...newRule, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Passport"
                            value={newRule.pass}
                            onChange={(e) =>
                                setNewRule({ ...newRule, pass: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            value={newRule.country}
                            onChange={(e) =>
                                setNewRule({ ...newRule, country: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Info"
                            value={newRule.info}
                            onChange={(e) =>
                                setNewRule({ ...newRule, info: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="List"
                            value={newRule.list}
                            onChange={(e) =>
                                setNewRule({ ...newRule, list: e.target.value })
                            }
                        />
                        <div className={styles.modalActions}>
                            <button onClick={handleSaveRule} className={styles.saveBtn}>
                                Save
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className={styles.cancelBtn}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlaggingRules;
