import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";
import ColorfulAPI from "./ColorfulAPI";

class ModifyPaletteNavbar extends Component {
  render() {
    const { name, linkOne, linkTwo, linkThree, id } = this.props;
    return (
      <div className={styles["navbar"]}>
        <Link to="/api/palettes" className={styles["palette-nav-link"]}>
          {linkOne}
        </Link>
        <Link
          className={styles["palette-nav-link"]}
          onClick={() => {
            ColorfulAPI.deletePalette(id);
          }}
        >
          {linkTwo}
        </Link>
        <Link to={"/api/palettes"} className={styles["palette-nav-link"]}>
          {linkThree}
        </Link>
        <h1 className={styles["title"]}>{name}</h1>
      </div>
    );
  }
}

export default ModifyPaletteNavbar;
