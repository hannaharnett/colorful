import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";

class PaletteNavbar extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className={styles["navbar"]}>
        <Link to="" className={styles["palette-nav-link"]}>
          Edit Palette
        </Link>
        <h1 className={styles["title"]}>{name}</h1>
        <Link to="/api/palettes" className={styles["palette-nav-link"]}>
          All Palettes
        </Link>
      </div>
    );
  }
}

export default PaletteNavbar;
