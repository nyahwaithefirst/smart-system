"use client";

import styles from "./reportComponent.module.css";
import {
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const reports = [
  {
    id: "REP-001",
    name: "Weekly Adverse Media Summary",
    date: "Nov 3, 2025",
    status: "Completed",
    size: "1.4 MB",
  },
  {
    id: "REP-002",
    name: "High-Risk Alerts Digest",
    date: "Nov 2, 2025",
    status: "In Progress",
    size: "--",
  },
  {
    id: "REP-003",
    name: "Regional Risk Insights - Q4",
    date: "Nov 1, 2025",
    status: "Completed",
    size: "2.1 MB",
  },
];

export default function ReportComponent() {
  return (
    <main className={styles.main}>
      {/* Header / Actions */}
      <section className={styles.topBar}>
        <div className={styles.info}>
          <FileText className="w-5 h-5 text-green-600" />
          <h3>Generated Reports</h3>
        </div>
        <button className={styles.generateBtn}>Generate New Report</button>
      </section>

      {/* Report Table */}
      <section className={styles.tableSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Report Name</th>
              <th>Date Generated</th>
              <th>Status</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx}>
                <td>{report.id}</td>
                <td>{report.name}</td>
                <td>
                  <Calendar className="w-4 h-4 inline-block mr-1 text-gray-500" />
                  {report.date}
                </td>
                <td>
                  {report.status === "Completed" ? (
                    <span className={styles.completed}>
                      <CheckCircle2 className="w-4 h-4 inline-block mr-1" />
                      Completed
                    </span>
                  ) : (
                    <span className={styles.progress}>
                      <Loader2 className="w-4 h-4 inline-block mr-1 animate-spin" />
                      In Progress
                    </span>
                  )}
                </td>
                <td>{report.size}</td>
                <td>
                  {report.status === "Completed" ? (
                    <button className={styles.downloadBtn}>
                      <Download className="w-4 h-4 mr-1" /> Download
                    </button>
                  ) : (
                    <span className={styles.disabledBtn}>Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Summary Cards */}
      <section className={styles.cardGrid}>
        <div className={styles.card}>
          <h4>Total Reports</h4>
          <h2>23</h2>
        </div>
        <div className={styles.card}>
          <h4>Completed</h4>
          <h2>19</h2>
        </div>
        <div className={styles.card}>
          <h4>Pending</h4>
          <h2>4</h2>
        </div>
        <div className={styles.card}>
          <h4>Last Generated</h4>
          <h2>3 hours ago</h2>
        </div>
      </section>
    </main>
  );
}
