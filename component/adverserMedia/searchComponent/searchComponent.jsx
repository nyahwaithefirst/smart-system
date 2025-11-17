"use client";
import React from "react";
import styles from "./searchComponent.module.css";
import {
  Search,
  Globe,
  Calendar,
  AlertTriangle,
  ExternalLink,
} from "lucide-react";

const mockResults = [
  {
    entity: "John Doe Ltd.",
    riskType: "Corruption",
    source: "Reuters",
    headline: "Firm under investigation for bribery in South Africa",
    date: "Nov 3, 2025",
    riskScore: 85,
    sentiment: "Negative",
    url: "#",
  },
  {
    entity: "Stellar Bank",
    riskType: "Fraud",
    source: "Financial Times",
    headline: "Central Bank probes Stellar Bank for accounting irregularities",
    date: "Nov 2, 2025",
    riskScore: 72,
    sentiment: "Negative",
    url: "#",
  },
  {
    entity: "Ahmed Ali",
    riskType: "Terrorism",
    source: "BBC",
    headline: "Ahmed Ali linked to terror financing network",
    date: "Nov 1, 2025",
    riskScore: 91,
    sentiment: "Critical",
    url: "#",
  },
];

export default function SearchComponent() {
  return (
    <main className={styles.main}>
      {/* Search Filters */}
      <section className={styles.searchSection}>
        <div className={styles.filters}>
          <input
            type="text"
            placeholder="Search for individual, company, or keyword..."
            className={styles.input}
          />
          <select className={styles.input}>
            <option>All Risk Types</option>
            <option>Fraud</option>
            <option>Corruption</option>
            <option>Terrorism</option>
            <option>Financial Crime</option>
          </select>
          <select className={styles.input}>
            <option>All Countries</option>
            <option>US</option>
            <option>UK</option>
            <option>UAE</option>
            <option>Kenya</option>
            <option>Singapore</option>
          </select>
          <input type="date" className={styles.input} />
          <button className={styles.searchBtn}>
            <Search className="w-4 h-4 mr-2" /> Search
          </button>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsHeader}>
          <h3>Search Results</h3>
          <p>3 results found</p>
        </div>

        <div className={styles.resultsList}>
          {mockResults.map((result, idx) => (
            <div key={idx} className={styles.resultCard}>
              <div className={styles.cardHeader}>
                <h4>{result.entity}</h4>
                <span
                  className={
                    result.riskScore > 80
                      ? styles.high
                      : result.riskScore > 60
                      ? styles.medium
                      : styles.low
                  }
                >
                  Risk: {result.riskScore}
                </span>
              </div>

              <p className={styles.headline}>{result.headline}</p>

              <div className={styles.meta}>
                <div>
                  <Globe className="w-4 h-4 mr-1" />
                  {result.source}
                </div>
                <div>
                  <Calendar className="w-4 h-4 mr-1" />
                  {result.date}
                </div>
                <div>
                  <AlertTriangle
                    className={`w-4 h-4 mr-1 ${styles.alertIcon}`}
                  />
                  {result.riskType}
                </div>
              </div>

              <div className={styles.actions}>
                <a href={result.url} className={styles.link}>
                  View Source <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <span className={styles.sentiment}>
                  Sentiment: {result.sentiment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
