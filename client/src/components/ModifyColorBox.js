import React, { Component } from "react";
import chroma from "chroma-js";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../styles/ModifyColorBox.module.css";

class ModifyColorBox extends Component {
  render() {
    const { background, name, onClick } = this.props;
    const isDark = chroma(background).luminance() < 0.08;
    return (
      <div style={{ background: background }} className={styles.editMode}>
        <div className={styles.colorBoxContent}>
          <span className={isDark && styles.lightText}>
            {name}
            <button
              className={styles.deleteButton}
              onClick={() => onClick(name)}
            >
              <FaTrashAlt className={isDark && styles.lightText} />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ModifyColorBox;
