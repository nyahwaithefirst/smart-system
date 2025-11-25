import React, { useState } from 'react';
import { Upload, FileText, Check, AlertCircle, Plus, Trash2 } from 'lucide-react';
import styles from './socialMedia.module.css';
import { serviceBaseUrl } from '../../constant/baseUrl';
import { getApi } from '../../apis';
import { repairAndParse } from '../../msc';

const SocialMedia = ({ setDataSubmitted, results, setResults }) => {
    const [activeTab, setActiveTab] = useState('manual'); // 'manual' or 'csv'
    const [isLoading, setLoading] = useState(false);

    // Manual form state
    const [manualRows, setManualRows] = useState([{
        "First Name": '',
        "Last Name": '',
        "Gender": '',
        "Date of Birth": '',
        "Country": '',
        "Nationality": '',
    }]);

    // CSV upload state
    const [csvFile, setCsvFile] = useState(null);
    const [csvData, setCsvData] = useState([]);
    const [csvHeaders, setCsvHeaders] = useState([]);
    const [columnMapping, setColumnMapping] = useState({
        "First Name": '',
        "Last Name": '',
        "Gender": '',
        "Date of Birth": '',
        "Country": '',
        "Nationality": '',
    });
    const [mappingComplete, setMappingComplete] = useState(false);

    const fieldLabels = {
        "First Name": 'First Name',
        "Last Name": 'Last Name',
        "Gender": 'Gender',
        "Date of Birth": 'Date of Birth',
        "Country": 'Country',
        "Nationality": 'Nationality',
    };

    // Auto-match column names
    const autoMatchColumns = (headers) => {
        const newMapping = { ...columnMapping };

        headers.forEach(header => {
            const normalizedHeader = header.toLowerCase().trim();

            // Try exact match first
            Object.keys(fieldLabels).forEach(fieldKey => {
                if (normalizedHeader === fieldKey.toLowerCase()) {
                    newMapping[fieldKey] = header;
                }
            });

            // Try partial match
            if (normalizedHeader.includes('First Name') || normalizedHeader.includes('First Name')) {
                newMapping.name1 = newMapping.name1 || header;
            } else if (normalizedHeader.includes('Last Name') || normalizedHeader.includes('Last Name')) {
                newMapping.name2 = newMapping.name2 || header;
            } else if (normalizedHeader.includes('Gender') || normalizedHeader.includes('Gender')) {
                newMapping.name3 = newMapping.name3 || header;
            } else if (normalizedHeader.includes('Date of Birth') || normalizedHeader.includes('Date of Birth')) {
                newMapping.name4 = newMapping.name4 || header;
            } else if (normalizedHeader.includes('Country') || normalizedHeader.includes('Country')) {
                newMapping.name5 = newMapping.name5 || header;
            } else if (normalizedHeader.includes('Nationality') || normalizedHeader.includes('Nationality')) {
                newMapping.name5 = newMapping.name5 || header;
            }
        });

        setColumnMapping(newMapping);
        checkMappingComplete(newMapping);
    };

    const checkMappingComplete = (mapping) => {
        const allMapped = Object.values(mapping).every(val => val !== '');
        setMappingComplete(allMapped);
    };

    // Handle CSV file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setCsvFile(file);
        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target.result;
            const lines = text.split('\n').filter(line => line.trim());

            if (lines.length === 0) return;

            // Parse CSV (simple parsing, assumes comma-separated)
            const headers = lines[0].split(',').map(h => h.trim());
            const data = lines.slice(1).map(line => {
                const values = line.split(',').map(v => v.trim());
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index] || '';
                });
                return row;
            });

            setCsvHeaders(headers);
            setCsvData(data);
            autoMatchColumns(headers);
        };

        reader.readAsText(file);
    };

    // Handle manual form input change
    const handleManualInputChange = (index, field, value) => {
        const newRows = [...manualRows];
        newRows[index][field] = value;
        setManualRows(newRows);
    };

    // Add new row to manual form
    const addManualRow = () => {
        setManualRows([...manualRows, {
            "First Name": 'First Name',
            "Last Name": 'Last Name',
            "Gender": 'Gender',
            "Date of Birth": 'Date of Birth',
            "Country": 'Country',
            "Nationality": 'Nationality',
        }]);
    };

    // Remove row from manual form
    const removeManualRow = (index) => {
        if (manualRows.length === 1) return;
        const newRows = manualRows.filter((_, i) => i !== index);
        setManualRows(newRows);
    };

    // Handle column mapping change
    const handleMappingChange = (fieldKey, csvColumn) => {
        const newMapping = {
            ...columnMapping,
            [fieldKey]: csvColumn
        };
        setColumnMapping(newMapping);
        checkMappingComplete(newMapping);
    };

    // Submit manual form
    const handleManualSubmit = (e) => {
        e.preventDefault();
        console.log('Manual form submitted:', manualRows);
        // alert(`Successfully submitted ${manualRows.length} row(s)! Check console for details.`);

        manualRows.forEach(async (row) => {

            let content = "";

            if (row["First Name"]) {
                content = row["First Name"];
            }

            if (row["Last Name"]) {

                if (content.length > 0) {
                    content += " " + row["Last Name"];
                }
                else {
                    content = row["Last Name"];
                }
            }

            const urlSocial = `${serviceBaseUrl}reservoir/social-media-profiling/${content}`;
            const responseSocial = await getApi(urlSocial);

            setResults((prev) => ({
                ...prev,
                socialMediaList: responseSocial,
            }));

            const urlAdverse = `${serviceBaseUrl}reservoir/adverse-media/${content}`;
            const responseAdverse = await getApi(urlAdverse);

            setResults((prev) => ({
                ...prev,
                adverseMediaList: responseAdverse,
            }));
        })

        //Simulate data screening
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setDataSubmitted(true);
        }, 2500)
    };

    // Submit CSV data
    const handleCsvSubmit = (e) => {
        e.preventDefault();

        if (!mappingComplete) {
            alert('Please map all columns before submitting.');
            return;
        }

        // Transform CSV data according to mapping
        const mappedData = csvData.map(row => {
            const mappedRow = {};
            Object.keys(columnMapping).forEach(fieldKey => {
                const csvColumn = columnMapping[fieldKey];
                mappedRow[fieldKey] = row[csvColumn] || '';
            });
            return mappedRow;
        });

        console.log('CSV data submitted:', mappedData);
        alert(`Successfully submitted ${mappedData.length} row(s) from CSV! Check console for details.`);
    };

    return (
        <div className={styles.container}>

            {/* Tab Navigation */}
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tab} ${activeTab === 'manual' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('manual')}
                >
                    <FileText className={styles.tabIcon} />
                    Manual Entry
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'csv' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('csv')}
                >
                    <Upload className={styles.tabIcon} />
                    CSV Upload
                </button>
            </div>

            {/* Manual Entry Form */}
            {activeTab === 'manual' && (
                <div className={styles.content}>
                    <form onSubmit={handleManualSubmit} className={styles.form}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.formTitle}>Manual Data Entry</h2>
                            <button
                                type="button"
                                onClick={addManualRow}
                                className={styles.addButton}
                            >
                                <Plus className={styles.buttonIcon} />
                                Add Row
                            </button>
                        </div>

                        {manualRows.map((row, rowIndex) => (
                            <div key={rowIndex} className={styles.rowCard}>
                                <div className={styles.rowHeader}>
                                    <span className={styles.rowNumber}>Row {rowIndex + 1}</span>
                                    {manualRows.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeManualRow(rowIndex)}
                                            className={styles.removeButton}
                                        >
                                            <Trash2 className={styles.buttonIcon} />
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className={styles.formGrid}>
                                    {Object.keys(fieldLabels).map((fieldKey) => (
                                        <div key={fieldKey} className={styles.formGroup}>
                                            <label htmlFor={`${fieldKey}-${rowIndex}`} className={styles.label}>
                                                {fieldLabels[fieldKey]}
                                            </label>
                                            <input
                                                type="text"
                                                id={`${fieldKey}-${rowIndex}`}
                                                value={row[fieldKey]}
                                                onChange={(e) => handleManualInputChange(rowIndex, fieldKey, e.target.value)}
                                                className={styles.input}
                                                placeholder={`Enter ${fieldLabels[fieldKey]}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className={styles.formActions}>
                            <button type="submit" className={styles.submitButton}>
                                {isLoading ? "Loading..." : "Run Screening"}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* CSV Upload */}
            {activeTab === 'csv' && (
                <div className={styles.content}>
                    <div className={styles.uploadSection}>
                        <h2 className={styles.formTitle}>CSV File Upload</h2>

                        <div className={styles.uploadArea}>
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileUpload}
                                className={styles.fileInput}
                                id="csv-upload"
                            />
                            <label htmlFor="csv-upload" className={styles.uploadLabel}>
                                <Upload className={styles.uploadIcon} />
                                <span className={styles.uploadText}>
                                    {csvFile ? csvFile.name : 'Click to upload CSV file'}
                                </span>
                                <span className={styles.uploadHint}>
                                    Supported format: CSV
                                </span>
                            </label>
                        </div>

                        {csvFile && csvHeaders.length > 0 && (
                            <>
                                <div className={styles.mappingSection}>
                                    <div className={styles.mappingHeader}>
                                        <h3 className={styles.mappingTitle}>Column Mapping</h3>
                                        {mappingComplete ? (
                                            <span className={styles.statusBadgeSuccess}>
                                                <Check className={styles.statusIcon} />
                                                All Mapped
                                            </span>
                                        ) : (
                                            <span className={styles.statusBadgeWarning}>
                                                <AlertCircle className={styles.statusIcon} />
                                                Incomplete
                                            </span>
                                        )}
                                    </div>

                                    <p className={styles.mappingDescription}>
                                        Map your CSV columns to the required fields. Auto-matching has been applied.
                                    </p>

                                    <div className={styles.mappingGrid}>
                                        {Object.keys(fieldLabels).map((fieldKey) => (
                                            <div key={fieldKey} className={styles.mappingRow}>
                                                <label className={styles.mappingLabel}>
                                                    {fieldLabels[fieldKey]}
                                                </label>
                                                <select
                                                    value={columnMapping[fieldKey]}
                                                    onChange={(e) => handleMappingChange(fieldKey, e.target.value)}
                                                    className={styles.mappingSelect}
                                                >
                                                    <option value="">-- Select Column --</option>
                                                    {csvHeaders.map((header) => (
                                                        <option key={header} value={header}>
                                                            {header}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.previewSection}>
                                    <h3 className={styles.previewTitle}>
                                        Data Preview ({csvData.length} rows)
                                    </h3>
                                    <div className={styles.tableContainer}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    {Object.keys(fieldLabels).map((fieldKey) => (
                                                        <th key={fieldKey} className={styles.tableHeader}>
                                                            {fieldLabels[fieldKey]}
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {csvData.slice(0, 5).map((row, index) => (
                                                    <tr key={index}>
                                                        {Object.keys(fieldLabels).map((fieldKey) => (
                                                            <td key={fieldKey} className={styles.tableCell}>
                                                                {row[columnMapping[fieldKey]] || '-'}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {csvData.length > 5 && (
                                            <p className={styles.previewNote}>
                                                Showing first 5 rows of {csvData.length} total rows
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.formActions}>
                                    <button
                                        onClick={handleCsvSubmit}
                                        className={styles.submitButton}
                                        disabled={!mappingComplete}
                                    >
                                        Submit CSV Data
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SocialMedia;