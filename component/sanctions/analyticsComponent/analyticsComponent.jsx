"use client";

import styles from "./analyticsComponent.module.css";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register ChartJS elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AnalyticsComponent() {
  // === Chart Data ===
  const trendData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Searches",
        data: [120, 180, 150, 220, 260, 190, 300],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(34,197,94,0.1)",
        fill: true,
        tension: 0.35,
      },
    ],
  };

  const matchBreakdown = {
    labels: ["Clear", "Potential", "Match"],
    datasets: [
      {
        data: [89, 7, 4],
        backgroundColor: ["#3b82f6", "#facc15", "#f1f5f9"],
        borderWidth: 0,
      },
    ],
  };

  const topLists = {
    labels: ["OFAC SDN", "UN", "EU", "UK HMT", "World Bank"],
    datasets: [
      {
        label: "Hits",
        data: [19, 10, 7, 5, 2],
        backgroundColor: "#3b82f6",
        borderRadius: 6,
        barThickness: 16,
      },
    ],
  };

  return (
    <main className={styles.main}>
      {/* === KPI Cards === */}
      <section className={styles.kpiGrid}>
        <div className={`${styles.kpiCard} ${styles.kpiGreen}`}>
          <p>Total Searches (This Month)</p>
          <h2>1,842</h2>
        </div>
        <div className={`${styles.kpiCard} ${styles.kpiRed}`}>
          <p>Positive Matches</p>
          <h2>23</h2>
        </div>
        <div className={`${styles.kpiCard} ${styles.kpiYellow}`}>
          <p>Potential Matches</p>
          <h2>46</h2>
        </div>
        <div className={`${styles.kpiCard} ${styles.kpiBlue}`}>
          <p>Top Source</p>
          <h2>OFAC SDN</h2>
        </div>
      </section>

      {/* === Top Charts === */}
      <section className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3>Search Trend (Last 7 Days)</h3>
          <Line
            data={trendData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { color: "rgba(0,0,0,0.05)" } },
                y: { grid: { color: "rgba(0,0,0,0.05)" } },
              },
            }}
          />
        </div>
        <div className={styles.chartCard}>
          <h3>Match Breakdown</h3>
          <Doughnut
            data={matchBreakdown}
            options={{
              cutout: "65%",
              plugins: {
                legend: { position: "bottom", labels: { boxWidth: 12 } },
              },
            }}
          />
        </div>
      </section>

      {/* === Bottom Section === */}
      <section className={styles.chartGrid}>
        <div className={styles.chartCard}>
          <h3>Top Sanction Lists by Hits</h3>
          <Bar
            data={topLists}
            options={{
              indexAxis: "y",
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { display: false } },
              },
            }}
          />
        </div>

        <div className={styles.tableCard}>
          <h3>Recent Activity</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>Searched for "John Doe"</td>
                <td>Nov 3, 2025</td>
              </tr>
              <tr>
                <td>Compliance Team</td>
                <td>Uploaded batch screening</td>
                <td>Nov 2, 2025</td>
              </tr>
              <tr>
                <td>Sarah</td>
                <td>Viewed match details</td>
                <td>Nov 1, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
