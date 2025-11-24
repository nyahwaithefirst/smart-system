"use client";

import { useState } from "react";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  AlertTriangleIcon,
  Award,
  BarChart3,
  Bell,
  BookOpen,
  CreditCard,
  DollarSign,
  Facebook,
  FileText,
  Flag,
  Globe2,
  Layers,
  LucideAlertTriangle,
  Mail,
  MapPin,
  Network,
  Search,
  Settings,
  Shield,
  TrendingUp,
  User2,
  UserCheck,
  Users,
} from "lucide-react";
import styles from "./page.module.css";
import NameScreeningEngine from "../../component/nameScreeningEngine/nameScreeningEngine";
import ClientRiskProflingEngine from "../../component/clientRiskProfilingEngine/clientRiskProfilingEngine";
import EntityRiskProflingEngine from "../../component/entityRiskProfilingEngine/entityRiskProfilingEngine";
import EntityNameScreeningEngine from "../../component/entityNameScreeningEngine/entityNameScreeningEngine";
import FlaggingRulesEngine from "../../component/flaggingRulesEngine/flaggingRulesEngine";
import FlaggingRulesConfigurations from "../../component/flaggingRulesConfigurations/flaggingRulesConfigurations";
import AccountRules from "../../component/accountRules/accountRules";
import Sidebar from "../../component/sidebar/sidebar";
import FraudDetection from "../../component/fraudDetection/fraudDection";
import TopBar from "../../component/topBar/topBar";

export default function Page() {
  const [expandedItems, setExpandedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  return (
    <div className={styles.container}>
      <Sidebar
        menuStructure={menuStructure}
        toggleExpand={toggleExpand}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
        expandedItems={expandedItems}
      />
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>
            {selectedItem
              ? contentData[selectedItem]?.title
              : "Compliance Management Dashboard"}
          </h2>
          <p className={styles.headerSubtitle}>
            {selectedItem
              ? "Explore the features and capabilities of this module"
              : "Select a module from the sidebar to view its features and capabilities"}
          </p>
        </div>

        <div className={styles.content}>
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "ns-clients" && (
              <div className={styles.contentWrapper}>
                <NameScreeningEngine />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "ns-entity" && (
              <div className={styles.contentWrapper}>
                <EntityNameScreeningEngine />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "risk-profiling-client" && (
              <div className={styles.contentWrapper}>
                <ClientRiskProflingEngine />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "risk-profiling-entity" && (
              <div className={styles.contentWrapper}>
                <EntityRiskProflingEngine />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "suspicious-flagging" && (
              <div className={styles.contentWrapper}>
                <FlaggingRulesEngine />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "suspicious-flagging-config" && (
              <div className={styles.contentWrapper}>
                <FlaggingRulesConfigurations />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "by-account-config" && (
              <div className={styles.contentWrapper}>
                <AccountRules />
              </div>
            )}
          {selectedItem &&
            contentData[selectedItem] &&
            selectedItem === "fraud-detection" && (
              <div className={styles.contentWrapper}>
                <FraudDetection />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

const menuStructure = [
  {
    id: "name-screening",
    title: "Name Screening",
    icon: <Search className="w-5 h-5" />,
    children: [
      {
        id: "ns-clients",
        title: "Name Screening for Clients",
        icon: <Users className="w-4 h-4" />,
      },
      {
        id: "ns-entity",
        title: "Name Screening for Entity",
        icon: <Shield className="w-4 h-4" />,
      },
      {
        id: "relationship-analysis",
        title: "Relationship Analysis",
        icon: <Network className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "transaction-monitoring",
    title: "Transaction Monitoring",
    icon: <Activity className="w-5 h-5" />,
    children: [
      {
        id: "suspicious-flagging",
        title: "Suspicious Flagging",
        icon: <Flag className="w-4 h-4" />,
      },
      {
        id: "suspicious-flagging-config",
        title: "Flagging Configuration",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        id: "by-account-config",
        title: "Account Configuration",
        icon: <User2 className="w-4 h-4" />,
      },
      {
        id: "fraud-detection",
        title: "Fraud Detection Rules",
        icon: <AlertCircle className="w-4 h-4" />,
      },
      {
        id: "client-activity",
        title: "Client Activity",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        id: "fraud-activity",
        title: "Fraud Activity",
        icon: <AlertTriangle className="w-4 h-4" />,
      },
      {
        id: "financial-crime",
        title: "Financial Crime Reports",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "transaction-detection",
        title: "Transaction Detection",
        icon: <DollarSign className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "kyc",
    title: "KYC",
    icon: <UserCheck className="w-5 h-5" />,
    children: [
      {
        id: "social-media",
        title: "Social Media",
        icon: <Facebook className="w-4 h-4" />,
      },
      {
        id: "criminal-record",
        title: "Criminal Record",
        icon: <AlertTriangleIcon className="w-4 h-4" />,
      },
      {
        id: "risk-profiling-client",
        title: "Risk Profiling Client",
        icon: <BarChart3 className="w-4 h-4" />,
      },
      {
        id: "risk-profiling-entity",
        title: "Risk Profiling Entity",
        icon: <Layers className="w-4 h-4" />,
      },
      {
        id: "address-verification",
        title: "Address Verification",
        icon: <MapPin className="w-4 h-4" />,
      },
      {
        id: "id-verification",
        title: "ID Verification",
        icon: <CreditCard className="w-4 h-4" />,
      },
      {
        id: "credit-score",
        title: "Credit Score",
        icon: <Award className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "escalation",
    title: "Escalation",
    icon: <LucideAlertTriangle className="w-5 h-5" />,
    children: [
      {
        id: "document-management",
        title: "Document Management",
        icon: <FileText className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "adverse-media",
    title: "Adverse Media",
    icon: <Globe2 className="w-5 h-5" />,
    children: [
      {
        id: "adverse-media",
        title: "Adverse Media",
        icon: <BookOpen className="w-4 h-4" />,
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    icon: <Globe2 className="w-5 h-5" />,
    children: [
      {
        id: "dmt-complaince",
        title: "DMT Compliance",
        icon: <Settings className="w-4 h-4" />,
      },
      {
        id: "financial-crime",
        title: "Financial Crime",
        icon: <AlertCircle className="w-4 h-4" />,
      },
      {
        id: "training-and-awareness",
        title: "Training and Awareness",
        icon: <Mail className="w-4 h-4" />,
      },
      {
        id: "Agent Barring",
        title: "Agent Barring",
        icon: <User2 className="w-4 h-4" />,
      },
      {
        id: "goAML",
        title: "goAML Requests",
        icon: <FileText className="w-4 h-4" />,
      },
      {
        id: "reporting",
        title: "Reporting",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        id: "monitoring",
        title: "Monitoring",
        icon: <Activity className="w-4 h-4" />,
      },
      {
        id: "internal",
        title: "Correspondences",
        icon: <Mail className="w-4 h-4" />,
      },
    ],
  },
];

const contentData = {
  "ns-clients": {
    title: "Name Screening for Clients",
    features: [
      "Real-time screening against global watchlists",
      "PEP (Politically Exposed Persons) identification",
      "Sanctions list matching",
      "Adverse media monitoring",
      "Automated risk scoring",
      "Continuous monitoring and updates",
    ],
  },
  "ns-entity": {
    title: "Name Screening for Entity",
    features: [
      "Corporate entity screening",
      "Beneficial ownership identification",
      "Business sanctions checking",
      "Corporate structure analysis",
      "Shell company detection",
      "Jurisdictional risk assessment",
    ],
  },
  "relationship-analysis": {
    title: "Relationship Analysis",
    features: [
      "Network visualization and mapping",
      "Connected parties identification",
      "Ownership structure analysis",
      "Transaction pattern analysis",
      "Hidden relationship detection",
      "Risk contagion assessment",
    ],
  },
  "suspicious-flagging": {
    title: "Suspicious Flagging Rules",
    features: [
      "Customizable rule engine",
      "Pattern recognition algorithms",
      "Threshold-based alerts",
      "Behavioral anomaly detection",
      "Multi-parameter rule configuration",
      "Real-time flag generation",
    ],
  },
  "suspicious-flagging-config": {
    title: "Flagging Rules Configurations",
    features: [
      "Customizable rule engine",
      "Pattern recognition algorithms",
      "Threshold-based alerts",
      "Behavioral anomaly detection",
      "Multi-parameter rule configuration",
      "Real-time flag generation",
    ],
  },
  "by-account-config": {
    title: "By Account Configurations",
    features: [
      "Customizable rule engine",
      "Pattern recognition algorithms",
      "Threshold-based alerts",
      "Behavioral anomaly detection",
      "Multi-parameter rule configuration",
      "Real-time flag generation",
    ],
  },
  "fraud-detection": {
    title: "Fraud Detection Rules",
    features: [
      "Machine learning fraud models",
      "Identity theft detection",
      "Account takeover prevention",
      "Payment fraud identification",
      "Velocity checks",
      "Device fingerprinting integration",
    ],
  },
  "client-activity": {
    title: "Client Activity",
    features: [
      "Comprehensive activity dashboard",
      "Transaction history visualization",
      "Behavioral profiling",
      "Activity timeline tracking",
      "Geographic activity mapping",
      "Unusual pattern alerts",
    ],
  },
  "fraud-activity": {
    title: "Fraud Activity",
    features: [
      "Fraud case management",
      "Investigation workflow tools",
      "Evidence collection and storage",
      "Fraud trend analytics",
      "Recovery tracking",
      "Cross-channel fraud detection",
    ],
  },
  "financial-crime": {
    title: "Financial Crime Reports",
    features: [
      "SAR (Suspicious Activity Report) generation",
      "Regulatory report templates",
      "Automated report submission",
      "Compliance documentation",
      "Audit trail maintenance",
      "Report status tracking",
    ],
  },
  "transaction-detection": {
    title: "Transaction Detection",
    features: [
      "Real-time transaction monitoring",
      "Structuring detection",
      "Large transaction alerts",
      "Cross-border transaction analysis",
      "Currency exchange monitoring",
      "Rapid movement detection",
    ],
  },
  "social-media": {
    title: "Social Media Screening",
    features: [
      "Multi-platform social media analysis",
      "Reputation risk assessment",
      "Content sentiment analysis",
      "Network connection mapping",
      "Adverse content detection",
      "Ongoing social monitoring",
    ],
  },
  "criminal-record": {
    title: "Criminal Record Check",
    features: [
      "Global criminal database access",
      "Court record searches",
      "Conviction history verification",
      "Ongoing criminal monitoring",
      "Warrant and arrest record checks",
      "International crime database integration",
    ],
  },
  "risk-profiling-client": {
    title: "Risk Profiling Client",
    features: [
      "Client risk categorization (Low/Medium/High)",
      "Entity risk assessment",
      "Dynamic risk scoring",
      "Risk factor identification",
      "Industry-specific risk models",
      "Continuous risk reassessment",
    ],
  },
  "risk-profiling-entity": {
    title: "Risk Profiling Entity",
    features: [
      "Client risk categorization (Low/Medium/High)",
      "Entity risk assessment",
      "Dynamic risk scoring",
      "Risk factor identification",
      "Industry-specific risk models",
      "Continuous risk reassessment",
    ],
  },
  "address-verification": {
    title: "Address Verification",
    features: [
      "Global address validation",
      "Proof of residence verification",
      "Geographic risk assessment",
      "Utility bill validation",
      "Property ownership verification",
      "Address consistency checks",
    ],
  },
  "id-verification": {
    title: "ID Verification",
    features: [
      "Government-issued ID authentication",
      "Document tampering detection",
      "Biometric verification",
      "Liveness detection",
      "Cross-reference validation",
      "Multi-document verification",
    ],
  },
  "credit-score": {
    title: "Credit Score Assessment",
    features: [
      "Credit bureau integration",
      "Credit history analysis",
      "Payment behavior assessment",
      "Debt-to-income ratio calculation",
      "Credit utilization monitoring",
      "Financial health indicators",
    ],
  },
  "document-management": {
    title: "Document Management",
    features: [
      "Centralized document repository",
      "Secure document storage",
      "Version control and tracking",
      "Document classification",
      "Automated retention policies",
      "Quick search and retrieval",
    ],
  },
};
