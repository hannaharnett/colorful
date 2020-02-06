import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";
import ColorfulAPI from "./ColorfulAPI";

class PaletteNavbar extends Component {
  render() {
    const { name, editLink, deleteLink, returnLink, id } = this.props;
    return (
      <div className={styles["navbar"]}>
        <Link to="/api/palettes" className={styles["palette-nav-link"]}>
          {returnLink}
        </Link>
        <Link
          to={`/api/palettes/edit/${id}`}
          className={styles["palette-nav-link"]}
        >
          {editLink}
        </Link>
        <Link
          className={styles["palette-nav-link"]}
          onClick={() => {
            ColorfulAPI.deletePalette(id);
          }}
        >
          {deleteLink}
        </Link>
        <h1 className={styles["title"]}>{name}</h1>
      </div>
    );
  }
}

export default PaletteNavbar;
