import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";
import ColorfulAPI from "./ColorfulAPI";

class PaletteNavbar extends Component {
  render() {
    const { name, editLink, deleteLink, returnLink, id } = this.props;
    return (
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link to="/api/palettes" className={styles.paletteNavLink}>
            {returnLink}
          </Link>
          <Link
            to={id ? `/api/palettes/${id}` : "/api/palettes"}
            className={styles.paletteNavLink}
            onClick={() => {
              const result = window.confirm("Are you sure you wanna delete?");
              if (result) {
                ColorfulAPI.deletePalette(id);
              }
            }}
          >
            {deleteLink}
          </Link>
          <Link
            to={`/api/palettes/edit/${id}`}
            className={styles.paletteNavLink}
          >
            {editLink}
          </Link>
        </div>

        <h1 className={styles.title}>{name}</h1>
      </div>
    );
  }
}

export default PaletteNavbar;
