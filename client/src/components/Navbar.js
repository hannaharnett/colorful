import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar(props) {
    const { title } = props;
    return (
        <div className={styles.nav}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.navLinks}>
                {props.children}
            </div>
        </div>
    )
}

export default Navbar;