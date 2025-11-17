import { Folder } from "lucide-react";
import styles from "./batchScreening.module.css";

export default function BatchScreening() {
  return (
    <div className={styles.container}>
      {/* === Upload Area === */}
      <div className={styles.basketArea}>
        <div className={styles.header}>
          <h5>Upload Batch File</h5>
          <p>
            Upload a CSV or Excel file containing names or entities to screen.
          </p>
        </div>

        <div className={styles.basketDropZone}>
          <div className={styles.dropZoneHeader}>
            <Folder size={22} />
            <span>Click to upload or drag & drop</span>
          </div>
          <i className={styles.subtitle}>CSV, XLS, or XLSX (max 5MB)</i>
        </div>

        <div className={styles.dropZoneFooter}>
          <button>Start Screening</button>
        </div>
      </div>

      {/* === Statistics Cards === */}
      <div className={styles.statesWrapper}>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className={styles.statesCard}>
            <h5>Total Records</h5>
            <div className={styles.stateValue}>250</div>
            <p className={styles.stateSubtext}>Processed successfully</p>
          </div>
        ))}
      </div>

      {/* === Results Table === */}
      <div className={styles.searchResults}>
        <div className={styles.searchResultsHeader}>
          <h5>Search Results</h5>
          <button>Download Report</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name / Entity</th>
              <th>Aliases</th>
              <th>List Source</th>
              <th>Match Confidence</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Jonathan Doe</td>
              <td>OFAC SDN</td>
              <td>98%</td>
              <td className={styles.statusMatch}>Match Found</td>
              <td>View</td>
            </tr>
            <tr>
              <td>ABC Trading Ltd</td>
              <td>ABC Group</td>
              <td>UN Consolidated</td>
              <td>85%</td>
              <td className={styles.statusPotential}>Potential Match</td>
              <td>View</td>
            </tr>
            <tr>
              <td>Global Relief Org</td>
              <td>None</td>
              <td>EU Sanctions</td>
              <td>100%</td>
              <td className={styles.statusClear}>Clear</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
