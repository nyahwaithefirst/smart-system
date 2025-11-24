import { Bell, Mail, Search, User2 } from "lucide-react";
import styles from "./topBar.module.css";

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.topBarRight}>
                <Search size={18} className={styles.topIcon} />

                <Bell size={18} className={styles.topIcon} />

                <Mail size={18} className={styles.topIcon} />

                <div className={styles.userSection}>
                    <User2 size={20} className={styles.userIcon} />
                    <span className={styles.username}>John Doe</span>
                </div>
            </div>
        </div>
    )
}

export default TopBar;