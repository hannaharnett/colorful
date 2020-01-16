import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";
import ColorfulAPI from "./ColorfulAPI";

class PaletteNavbar extends Component {
  render() {
    const { name, rightLink, leftLink, id } = this.props;
    return (
      <div className={styles["navbar"]}>
        <Link to="/api/palettes" className={styles["palette-nav-link"]}>
          {leftLink}
        </Link>
        <h1 className={styles["title"]}>{name}</h1>
        <Link
          className={styles["palette-nav-link"]}
          onClick={() => {
            ColorfulAPI.deletePalette(id);
          }}
        >
          {rightLink}
        </Link>
      </div>
    );
  }
}

export default PaletteNavbar;
