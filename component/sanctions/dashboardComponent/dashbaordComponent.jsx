import styles from "./dashbaordComponent.module.css";

export default function DashboardComponent() {
  const states = [{ color: "#dc2626" }];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Dashboard</h5>
        <p>Plan, prioritize and accomplish your tasks with ease</p>
      </div>
      <div className={styles.statesWrapper}>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={styles.statesCard}>
            <h5>Total Searches</h5>
            <div style={{ fontWeight: "bold", fontSize: "1.879rem" }}>
              1.240
            </div>
            <div>1.8% this month</div>
          </div>
        ))}
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>Search Trends</div>
          <div className={styles.chartBody}>[Bar Chart Placeholder]</div>
        </div>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>Match Distribution</div>
          <div className={styles.chartBody}>[Donut Chart Placeholder]</div>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <div className={styles.tableHeader}>Recent Searches</div>
          <table>
            <thead>
              <tr>
                <th>Name / Entity</th>
                <th>List Source</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jonh Doe</td>
                <td>OFAC SND</td>
                <td>Clear</td>
                <td>View</td>
              </tr>
              <tr>
                <td>ABC Trading Ltd</td>
                <td>UN Consolidated</td>
                <td>Potential Match</td>
                <td>View</td>
              </tr>
              <tr>
                <td>Global Relief Org</td>
                <td>EU Sanctions</td>
                <td>Match Found</td>
                <td>View</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
