import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { isBackgroundLight } from './helperFunctions';
import styles from "../styles/ColorBox.module.css";

class ModifyColorBox extends Component {
  render() {
    const { background, name, onClick } = this.props;
    const isLight = isBackgroundLight(background);
    return (
      <div style={{ background: background }} className={styles.colorBox}>
        <div className={styles.colorBoxContent}>
          <span className={isLight ? `${styles.darkText}` : `${styles.lightText}`}>
          
            {name}
            <button
              className={styles.deleteButton}
              onClick={() => onClick(name)}
            >
              <FaTrashAlt className={isLight ? `${styles.darkText}` : `${styles.lightText}`} />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ModifyColorBox;
