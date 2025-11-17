"use client";

import { useRef, useState } from "react";
import GraphSideBar from "../../../../../component/relationshipAnalysis/graphSideBar/graphSideBar";
import styles from "./page.module.css";
import {
  Bean,
  Bell,
  ChevronsLeft,
  Cloud,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  Fullscreen,
  Map,
  Minus,
  Notebook,
  Plus,
  PlusCircle,
  RefreshCcw,
  Scissors,
  Search,
  Settings,
  Trash,
  Trash2,
  Upload,
} from "lucide-react";
import GraphViewComponent from "../../../../../component/graph/graphViewComponent/graphViewComponent";

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const graphSidebarRef = useRef(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.graphArea}>
        <GraphViewComponent />
        <div className={styles.topBarContainer}>
          <div className={styles.leftBar}>
            <div className={styles.brand}>
              <img src="/assets/img/logo.png" />
            </div>
            <h5>Relationship Analysis</h5>
            <button>
              <Cloud />
            </button>
            <button>
              <Settings />
            </button>
            <button>
              <Bell />
            </button>
            <button>
              <Upload />
            </button>
          </div>
          <div className={styles.rightBar}>
            <button className={styles.btnRightEdge}>
              <PlusCircle />
            </button>
            <button className={styles.btnRightEdge}>
              <RefreshCcw />
            </button>
            <button>
              <CornerUpLeft />
            </button>
            <button className={styles.btnRightEdge}>
              <CornerUpRight />
            </button>
            <button className={styles.btnRightEdge}>
              <Search />
            </button>
            <button>
              <Copy />
            </button>
            <button>
              <Scissors />
            </button>
            <button>
              <Notebook />
            </button>
            <button>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sidebarBtn}>
        <button onClick={() => openSidebar()}>
          <ChevronsLeft style={{ color: "white" }} />
        </button>
      </div>
      <GraphSideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div
        style={{ right: isSidebarOpen && "27.2rem" }}
        className={styles.mapContainer}
      >
        <div className={styles.map}>
          <img src="https://tse3.mm.bing.net/th/id/OIP.uqp8MvTZ6SBv5C-nXuBN7AHaFM?rs=1&pid=ImgDetMain&o=7&rm=3" />
        </div>
        <div className={styles.mapControls}>
          <button>
            <Minus />
          </button>
          <button>26%</button>
          <button>
            <Plus />
          </button>
          <button>
            <Fullscreen />
          </button>
          <button>
            <Map />
          </button>
        </div>
      </div>
    </div>
  );
}
