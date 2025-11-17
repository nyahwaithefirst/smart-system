"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  AlertOctagon,
  Bell,
  ChartArea,
  FileText,
  HelpingHand,
  LayoutDashboard,
  LogOutIcon,
  Mail,
  PackageSearch,
  Search,
  SearchCodeIcon,
  Settings,
  User,
  X,
} from "lucide-react";
import SettingsComponent from "../../../../../component/general/settingsComponent/settingsComponent";
import HelpComponent from "../../../../../component/general/helpComponent/helpComponent";
import DashboardComponent from "../../../../../component/adverserMedia/dashboardComponent/dashboardComponent";
import SearchComponent from "../../../../../component/adverserMedia/searchComponent/searchComponent";
import AlertFeedsComponent from "../../../../../component/adverserMedia/alertFeedsComponent/alertFeedsComponent";
import AnalyticsComponent from "../../../../../component/adverserMedia/analyticsComponent/analyticsComponent";
import ReportComponent from "../../../../../component/adverserMedia/reportComponent/reportComponent";

export default function Page() {
  const [itemIndex, setItemIndex] = useState(1);

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <div className={styles.logoWrapper}>
            <img src="/assets/img/logo.png" />
          </div>
        </div>
        <div className={styles.itemsWrapper}>
          <div>
            <div className={styles.itemsHeader}>MENU</div>
            <ul className={styles.items}>
              <li
                className={`${styles.item} ${
                  itemIndex === 1 && styles.itemActive
                }`}
                onClick={() => setItemIndex(1)}
              >
                <LayoutDashboard className={styles.icon} />
                <span>Dashboard</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 2 && styles.itemActive
                }`}
                onClick={() => setItemIndex(2)}
              >
                <SearchCodeIcon className={styles.icon} />
                <span>Search</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 3 && styles.itemActive
                }`}
                onClick={() => setItemIndex(3)}
              >
                <AlertOctagon className={styles.icon} />
                <span>Alert Feed</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 4 && styles.itemActive
                }`}
                onClick={() => setItemIndex(4)}
              >
                <ChartArea className={styles.icon} />
                <span>Analytics</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 5 && styles.itemActive
                }`}
                onClick={() => setItemIndex(5)}
              >
                <FileText className={styles.icon} />
                <span>Reports</span>
              </li>
            </ul>
          </div>
          <div>
            <div className={styles.itemsHeader}>GENERAL</div>
            <ul className={styles.items}>
              <li
                className={`${styles.item} ${
                  itemIndex === 6 && styles.itemActive
                }`}
                onClick={() => setItemIndex(6)}
              >
                <Settings className={styles.icon} />
                <span>Settings</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 7 && styles.itemActive
                }`}
                onClick={() => setItemIndex(7)}
              >
                <HelpingHand className={styles.icon} />
                <span>Help</span>
              </li>
              <li
                className={`${styles.item} ${
                  itemIndex === 8 && styles.itemActive
                }`}
                onClick={() => setItemIndex(8)}
              >
                <LogOutIcon className={styles.icon} />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile app link */}
        <div className={styles.sidebarFooterWrapper}>
          <div className={styles.sidebarFooter}>
            <h5>Download Our Mobile App</h5>
            <li
              style={{
                marginBottom: "1rem",
                color: "#aaa",
                fontWeight: "lighter",
              }}
            >
              T&C Apply
            </li>
            <button>Download</button>
          </div>
        </div>
      </div>

      {/* main content area */}
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.searchBar}>
            <Search />
            <input type="text" placeholder="Type here to begin searching..." />
            <button>
              <X />
            </button>
          </div>

          <div className={styles.userContainer}>
            <button className={styles.iconBtn}>
              <Mail />
            </button>
            <button className={styles.iconBtn}>
              <Bell />
            </button>
            <div className={styles.userProfile}>
              <div className={styles.profileIcon}>
                <User className={styles.icon} />
              </div>
              <div className={styles.profileInfo}>
                <h5>Totok Michael</h5>
                <p>nyahwailloyd10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        {itemIndex === 1 && <DashboardComponent />}
        {itemIndex === 2 && <SearchComponent />}
        {itemIndex === 3 && <AlertFeedsComponent />}
        {itemIndex === 4 && <AnalyticsComponent />}
        {itemIndex === 5 && <ReportComponent />}

        {/* General */}
        {itemIndex === 6 && <SettingsComponent />}
        {itemIndex === 7 && <HelpComponent />}
      </div>
    </div>
  );
}
