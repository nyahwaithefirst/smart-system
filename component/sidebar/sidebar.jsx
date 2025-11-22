import { AlertTriangle, ChevronDown, ChevronRight, FileText, Shield } from "lucide-react"
import styles from "./sidebar.module.css";

const Sidebar = ({ menuStructure, toggleExpand,
    handleItemClick, selectedItem,
    expandedItems }) => {

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className={styles.logo}>
                    <span className={styles.logoSmart}>Smart</span>
                    <span className={styles.logoAnalysi}>Analysi</span>
                </div>
            </div>

            <nav className={styles.nav}>
                <div className={styles.menuLabel}>
                    <p>MENU</p>
                </div>

                {menuStructure.map((item) => (
                    <div key={item.id} className={styles.menuItem}>
                        <button
                            onClick={() => toggleExpand(item.id)}
                            className={`${styles.menuButton} ${expandedItems[item.id] ? styles.menuButtonExpanded : ""
                                }`}
                        >
                            <div className={styles.menuButtonContent}>
                                <span
                                    className={
                                        expandedItems[item.id] ? styles.iconExpanded : styles.icon
                                    }
                                >
                                    {item.icon}
                                </span>
                                <span className={styles.menuTitle}>{item.title}</span>
                            </div>
                            {expandedItems[item.id] ? (
                                <ChevronDown className={styles.chevron} />
                            ) : (
                                <ChevronRight className={styles.chevron} />
                            )}
                        </button>

                        {expandedItems[item.id] && (
                            <div className={styles.submenu}>
                                {item.children.map((child) => (
                                    <button
                                        key={child.id}
                                        onClick={() => handleItemClick(child.id)}
                                        className={`${styles.submenuButton} ${selectedItem === child.id
                                            ? styles.submenuButtonActive
                                            : ""
                                            }`}
                                    >
                                        <span
                                            className={
                                                selectedItem === child.id
                                                    ? styles.submenuIconActive
                                                    : styles.submenuIcon
                                            }
                                        >
                                            {child.icon}
                                        </span>
                                        <span>{child.title}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <div className={styles.generalSection}>
                    <p className={styles.generalLabel}>GENERAL</p>
                    <button className={styles.generalButton}>
                        <Shield className="w-5 h-5" />
                        <span>Settings</span>
                    </button>
                    <button className={styles.generalButton}>
                        <FileText className="w-5 h-5" />
                        <span>Help</span>
                    </button>
                    <button className={styles.generalButton}>
                        <AlertTriangle className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;