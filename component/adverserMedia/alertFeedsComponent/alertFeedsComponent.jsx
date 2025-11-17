"use client";

import { useState } from "react";
import styles from "./alertFeedsComponent.module.css";
import {
  Bell,
  Filter,
  Search,
  Globe,
  Calendar,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { generateDummyAlerts } from "../../../constant/mockData";

const risks = ["All", "Critical", "High", "Medium"];

export default function AlertFeedsComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [alerts] = useState(generateDummyAlerts(500)); // simulate large data
  const [currentPage, setCurrentPage] = useState(1);
  const alertsPerPage = 8;

  // === FILTERING ===
  const filteredAlerts = alerts.filter((alert) => {
    const matchesRisk = selectedRisk === "All" || alert.risk === selectedRisk;
    const matchesSearch =
      alert.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  // === PAGINATION ===
  const totalPages = Math.ceil(filteredAlerts.length / alertsPerPage);
  const startIdx = (currentPage - 1) * alertsPerPage;
  const currentAlerts = filteredAlerts.slice(
    startIdx,
    startIdx + alertsPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <main className={styles.main}>
      {/* === HEADER === */}
      <section className={styles.topBar}>
        <div className={styles.alertSummary}>
          <Bell className="w-5 h-5 text-blue-500" />
          <h3>Alert Feed</h3>
        </div>

        <div className={styles.filters}>
          <div className={styles.search}>
            <Search className="w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search entity or summary..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className={styles.dropdown}>
            <Filter className="w-4 h-4 text-slate-500" />
            <select
              value={selectedRisk}
              onChange={(e) => {
                setSelectedRisk(e.target.value);
                setCurrentPage(1);
              }}
            >
              {risks.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* === ALERTS LIST === */}
      <section className={styles.alertList}>
        {currentAlerts.length ? (
          currentAlerts.map((alert, idx) => (
            <div key={idx} className={styles.alertRow}>
              <span className={styles.entity}>{alert.entity}</span>
              <span
                className={`${styles.risk} ${styles[alert.risk.toLowerCase()]}`}
              >
                {alert.risk}
              </span>
              <span className={styles.summary}>{alert.summary}</span>
              <span className={styles.source}>
                <Globe className="w-4 h-4 mr-1 text-slate-400" />
                {alert.source}
              </span>
              <span className={styles.date}>
                <Calendar className="w-4 h-4 mr-1 text-slate-400" />
                {alert.date}
              </span>
              <span className={styles.country}>
                <AlertTriangle className="w-4 h-4 mr-1 text-slate-400" />
                {alert.country}
              </span>
              <div className={styles.actions}>
                <button className={styles.acknowledge}>
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Acknowledge
                </button>
                <button className={styles.dismiss}>
                  <XCircle className="w-4 h-4 mr-1" /> Dismiss
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.empty}>No alerts match your filters.</div>
        )}
      </section>

      {/* === PAGINATION === */}
      {filteredAlerts.length > alertsPerPage && (
        <section className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className={styles.pageInfo}>
            Page <strong>{currentPage}</strong> of {totalPages}
          </span>

          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </section>
      )}
    </main>
  );
}
