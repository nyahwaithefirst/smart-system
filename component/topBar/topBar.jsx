import { useState, useRef, useEffect } from "react";
import { Bell, Mail, Search, User2 } from "lucide-react";
import styles from "./topBar.module.css";

const TopBar = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.topBar}>
            <div className={styles.topBarRight}>
                <Search size={18} className={styles.topIcon} />
                <Bell size={18} className={styles.topIcon} />
                <Mail size={18} className={styles.topIcon} />

                {/* USER DROPDOWN */}
                <div
                    className={styles.userSection}
                    onClick={() => setOpen(!open)}
                    ref={dropdownRef}
                >
                    <User2 size={20} className={styles.userIcon} />
                    <span className={styles.username}>Lloyd Nyahwai</span>

                    {open && (
                        <div className={styles.dropdownMenu}>
                            <div className={styles.dropdownItem}>My Account</div>
                            <div className={styles.dropdownItem}>Settings</div>
                            <div className={styles.dropdownItem}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
