"use client";

import React from "react";
import styles from "./analyticsComponent.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, AlertTriangle, Globe2, Users } from "lucide-react";

const COLORS = ["#ef4444", "#f97316", "#3b82f6", "#0ea5e9", "#94a3b8"];

const riskData = [
  { name: "Fraud", value: 40 },
  { name: "Corruption", value: 25 },
  { name: "Financial Crime", value: 15 },
  { name: "Terrorism", value: 10 },
  { name: "Sanctions Evasion", value: 10 },
];

const trendData = [
  { month: "Jun", mentions: 50 },
  { month: "Jul", mentions: 85 },
  { month: "Aug", mentions: 120 },
  { month: "Sep", mentions: 95 },
  { month: "Oct", mentions: 145 },
  { month: "Nov", mentions: 130 },
];

const sentimentData = [
  { name: "Negative", value: 70 },
  { name: "Neutral", value: 20 },
  { name: "Positive", value: 10 },
];

const regionData = [
  { region: "US", mentions: 45 },
  { region: "UK", mentions: 35 },
  { region: "UAE", mentions: 25 },
  { region: "Kenya", mentions: 20 },
  { region: "Singapore", mentions: 15 },
];

export default function AnalyticsComponent() {
  return (
    <main className={styles.main}>
      {/* ===== Overview Cards ===== */}
      <section className={styles.cardGrid}>
        <div className={styles.card}>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: "#e0f2fe" }}
          >
            <TrendingUp className={styles.icon} style={{ color: "#0284c7" }} />
          </div>
          <div>
            <h4>Total Mentions</h4>
            <h2>435</h2>
          </div>
        </div>

        <div className={styles.card}>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: "#fee2e2" }}
          >
            <AlertTriangle
              className={styles.icon}
              style={{ color: "#dc2626" }}
            />
          </div>
          <div>
            <h4>High-Risk Alerts</h4>
            <h2>82</h2>
          </div>
        </div>

        <div className={styles.card}>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: "#fef3c7" }}
          >
            <Globe2 className={styles.icon} style={{ color: "#f59e0b" }} />
          </div>
          <div>
            <h4>Sources Tracked</h4>
            <h2>152</h2>
          </div>
        </div>

        <div className={styles.card}>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: "#dcfce7" }}
          >
            <Users className={styles.icon} style={{ color: "#16a34a" }} />
          </div>
          <div>
            <h4>Active Entities</h4>
            <h2>97</h2>
          </div>
        </div>
      </section>

      {/* ===== Charts Section ===== */}
      <section className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3>Adverse Mentions Trend</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="mentions"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3>Risk Type Distribution</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {riskData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ===== Bottom Charts ===== */}
      <section className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <h3>Sentiment Breakdown</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label
              >
                {sentimentData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3>Mentions by Region</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={regionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="region" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="mentions" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
}
