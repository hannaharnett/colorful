import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteNavbar.module.css";
import Portal from './Portal';
import ColorfulAPI from "./ColorfulAPI";

class PaletteNavbar extends Component {
  render() {
    
    const { name, editLink, deleteLink, returnLink, id, open, toggleModal } = this.props;
    console.log(open)
    return (
      <div className={styles.navbar}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.navLinks}>
          <Link to="/api/palettes" className={styles.paletteNavLink}>
            {returnLink}
          </Link>
          {open ? (
            <Portal>
              <div className={`modal ${styles.modal}`}>
                <h2 className={styles.modalText}>Are you sure you want to delete this Palette?</h2>
                <div>
                  <button className={`${styles.btn} ${styles.confirm}`} aria-label="delete" onClick={() => ColorfulAPI.deletePalette(id)}>
                    Yes
                  </button>
                  <button className={`${styles.btn} ${styles.cancel}`} aria-label="close" onClick={toggleModal}>No</button>
                </div>
              </div> 
            </Portal>
          ): null}
          <Link to={id ? `/api/palettes/${id}` : "/api/palettes"}
            className={styles.paletteNavLink} onClick={this.props.toggleModal}>{deleteLink}</Link>
          <Link
            to={`/api/palettes/edit/${id}`}
            className={styles.paletteNavLink}
          >
            {editLink}
          </Link>
        </div>
      </div>
    );
  }
}

export default PaletteNavbar;
