"use client";

import { useRef, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";

import styles from "./clientNameScreeningResults.module.css";

const ClientNameScreeningResults = ({ setDataSubmitted }) => {
    const tableRef = useRef(null);
    const [indexTab, setIndexTab] = useState(1);

    const data = [
        {
            name: "Emmerson Dambudzo",
            pass: "Passport, AD005865",
            country: "Zimbabwe / (Linked To: MNANGAGWA, Emmerson Dambudzo)",
            info: "OFAC",
            list: "Sanctions",
        },
        {
            name: "Emmerson Dambudzo",
            pass: "Passport, AD005865",
            country: "Zimbabwe / (Linked To: MNANGAGWA, Emmerson Dambudzo)",
            info: "OFAC",
            list: "Sanctions",
        },
        {
            name: "Emmerson Dambudzo",
            pass: "Passport, AD005865",
            country: "Zimbabwe / (Linked To: MNANGAGWA, Emmerson Dambudzo)",
            info: "OFAC",
            list: "Sanctions",
        },
    ];

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
            head: [["Name", "Passport", "Country", "Linked To", "Info", "List"]],
            body: data.map(d => [
                d.name,
                d.passport,
                d.country,
                d.linkedTo,
                d.info,
                d.list,
            ]),
            styles: { fontSize: 9, cellPadding: 3 },
            headStyles: { fillColor: [37, 99, 235], textColor: 255 },
        });

        doc.save("client_name_screening.pdf");
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>
                <div className={styles.tabs}>
                    <div onClick={() => setIndexTab(1)} className={`${styles.tab} ${indexTab === 1 && styles.tabActive}`}>
                        <span className={styles.badge}>2</span>
                        <span>Sanctions List</span>
                    </div>
                    <div onClick={() => setIndexTab(2)} className={`${styles.tab} ${indexTab === 2 && styles.tabActive}`}>
                        <span className={styles.badge}>0</span>
                        <span>Watch List</span>
                    </div>
                    <div onClick={() => setIndexTab(3)} className={`${styles.tab} ${indexTab === 3 && styles.tabActive}`}>
                        <span className={styles.badge}>5</span>
                        <span>PEP List</span>
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
            )}
            {indexTab === 2 && (
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
            )}
            {indexTab === 3 && (
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
            )}
        </div>
    );
};

export default ClientNameScreeningResults;
