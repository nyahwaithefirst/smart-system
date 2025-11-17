import styles from "./searchComponent.module.css";

export default function SearchComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <table>
          <thead>
            <tr>
              <th>Full Name or Entity</th>
              <th>List Source</th>
              <th>Country (Optional)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="e.g. John Doe or ABC Trading Ltd"
                />
              </td>
              <td>
                <select>
                  <option>All Sources</option>
                  <option>OFAC SDN</option>
                  <option>UN Consolidated</option>
                  <option>EU Sanctions</option>
                  <option>UK HMT</option>
                  <option>World Bank</option>
                </select>
              </td>
              <td>
                <input type="text" placeholder="e.g. Zimbabwe" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.searchBoxFooter}>
          <button>Search</button>
        </div>
      </div>

      <div className={styles.searchResults}>
        <div className={styles.searchResultsHeader}>
          <h5>Search Results</h5>
          <i>3 Results found</i>
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
