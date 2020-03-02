import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/ModifyPaletteNavbar.module.css";

class ModifyPaletteNavbar extends Component {
  render() {
    const { name, linkOne, linkTwo, id } = this.props;
    const cancelLink = id ? `/api/palettes/${id}` : "/api/palettes";
    return (
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/api/palettes" className={styles.paletteNavLink}>
            {linkOne}
          </Link>
          <Link to={cancelLink} className={styles.paletteNavLink}>
            {linkTwo}
          </Link>
        </div>
        <h1 className={styles.title}>{name}</h1>
      </div>
    );
  }
}

export default ModifyPaletteNavbar;
