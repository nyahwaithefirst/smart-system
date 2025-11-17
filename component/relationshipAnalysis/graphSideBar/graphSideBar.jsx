"use client";

import {
  Box,
  ChevronRight,
  ChevronsRight,
  Eye,
  PlusCircle,
  Search,
  Shapes,
  Square,
  SquareSigma,
  Text,
  User,
  View,
} from "lucide-react";
import styles from "./graphSideBar.module.css";
import { useState } from "react";

export default function GraphSideBar({ isSidebarOpen, closeSidebar }) {
  if (!isSidebarOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.closeBtn} onClick={() => closeSidebar()}>
          <ChevronsRight />
        </button>
        <div className={styles.header}>
          <button>
            <Search />
          </button>
          <div className={styles.tabs}>
            <div className={styles.tab}>Category</div>
            <div className={styles.tab}>Selection</div>
          </div>
        </div>
        <div className={styles.categoryItems}>
          {["Node Catogories", "Link Categories"].map((item, index) => (
            <CategoryItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ item }) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className={styles.categoryItem}>
      <button
        className={styles.categoryExpandBtn}
        onClick={() => setIsExpand(!isExpand)}
      >
        <ChevronRight />
        <span className={styles.title}>{item}</span>
        <span className={styles.badgeCount}>3</span>
      </button>
      {isExpand && (
        <div className={styles.itemList}>
          {[1, 2].map((i) => (
            <Item item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
function Item({ item }) {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className={styles.item}>
      <button
        className={styles.itemExpandBtn}
        onClick={() => setIsExpand(!isExpand)}
      >
        <ChevronRight />
        <span className={styles.symbol}>
          <img
            src="/assets/img/team-2.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </span>
        <span className={styles.title}>{item}</span>
      </button>
      {isExpand && (
        <div className={styles.itemProperties}>
          <h5 className={styles.itemHeader}>General Nodes Styles</h5>
          <div className={styles.symbolControlsContainer}>
            <button className={styles.btnStretch}>
              <Shapes />
              <span>Shape Selection</span>
            </button>
            <div className={styles.symbolControlsSub}>
              <button>
                <Square />
                <span>Color Shape</span>
              </button>
              <button>
                <Square />
                <span>Stroke Shape</span>
              </button>
              <button>
                <Text />
                <span>Label Text Color</span>
              </button>
              <button>
                <SquareSigma />
                <span>Label's Fill</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
