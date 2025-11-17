"use client";

import React from "react";
import styles from "./dashboardComponent.module.css";
import { Search, AlertTriangle, Newspaper, RefreshCcw } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Fraud", value: 35 },
  { name: "Corruption", value: 25 },
  { name: "Financial Crime", value: 20 },
  { name: "Terrorism", value: 10 },
  { name: "Others", value: 10 },
];

const COLORS = ["#2563eb", "#0ea5e9", "#f97316", "#dc2626", "#64748b"];

const trendData = [
  { month: "Jun", hits: 10 },
  { month: "Jul", hits: 16 },
  { month: "Aug", hits: 25 },
  { month: "Sep", hits: 22 },
  { month: "Oct", hits: 31 },
  { month: "Nov", hits: 27 },
];

export default function DashboardComponent() {
  return (
    <main className={styles.container}>
      {/* === Header === */}
      <header className={styles.header}>
        <h5>Dashboard Overview</h5>
        <p>Monitor entities, risk categories, and the latest adverse media.</p>
      </header>

      {/* === Overview Cards === */}
      <section className={styles.cardGrid}>
        <div className={styles.card}>
          <Newspaper className={`${styles.icon} ${styles.greenIcon}`} />
          <div>
            <p>Total Entities Monitored</p>
            <h2>245</h2>
          </div>
        </div>

        <div className={styles.card}>
          <AlertTriangle className={`${styles.icon} ${styles.yellowIcon}`} />
          <div>
            <p>New Adverse Hits (This Week)</p>
            <h2>32</h2>
          </div>
        </div>

        <div className={styles.card}>
          <AlertTriangle className={`${styles.icon} ${styles.redIcon}`} />
          <div>
            <p>High-Risk Mentions</p>
            <h2>14</h2>
          </div>
        </div>

        <div className={styles.card}>
          <RefreshCcw className={`${styles.icon} ${styles.blueIcon}`} />
          <div>
            <p>Last Data Refresh</p>
            <h2>3h ago</h2>
          </div>
        </div>
      </section>

      {/* === Filters === */}
      <section className={styles.filterBox}>
        <input
          type="text"
          placeholder="Search name, company, or keyword..."
          className={styles.input}
        />
        <select className={styles.input}>
          <option>All Risk Types</option>
          <option>Fraud</option>
          <option>Corruption</option>
          <option>Financial Crime</option>
          <option>Terrorism</option>
        </select>
        <select className={styles.input}>
          <option>All Countries</option>
          <option>US</option>
          <option>UK</option>
          <option>UAE</option>
          <option>Singapore</option>
        </select>
        <button className={styles.searchBtn}>
          <Search className="w-4 h-4 mr-2" /> Search
        </button>
      </section>

      {/* === Charts Section === */}
      <section className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3>Risk Category Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3>Adverse Mentions Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hits"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* === Recent Mentions Table === */}
      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <h3>Recent Adverse Media Mentions</h3>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Entity</th>
              <th>Risk Type</th>
              <th>Source</th>
              <th>Headline</th>
              <th>Date</th>
              <th>Risk Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe Ltd.</td>
              <td>Corruption</td>
              <td>Reuters</td>
              <td>“Firm under investigation…”</td>
              <td>Nov 3, 2025</td>
              <td>
                <span className={styles.high}>85</span>
              </td>
              <td>
                <a href="#" className={styles.link}>
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Ahmed Ali</td>
              <td>Terrorism</td>
              <td>BBC</td>
              <td>“Linked to extremist org…”</td>
              <td>Nov 2, 2025</td>
              <td>
                <span className={styles.high}>92</span>
              </td>
              <td>
                <a href="#" className={styles.link}>
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Stellar Bank</td>
              <td>Fraud</td>
              <td>Financial Times</td>
              <td>“Regulator probes bank…”</td>
              <td>Nov 1, 2025</td>
              <td>
                <span className={styles.medium}>67</span>
              </td>
              <td>
                <a href="#" className={styles.link}>
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
