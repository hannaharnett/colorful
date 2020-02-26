import React, { Component } from "react";
import chroma from "chroma-js";
import { FaTrashAlt } from "react-icons/fa";
import styles from "../styles/ColorBox.module.css";

class ModifyColorBox extends Component {
  render() {
    const { background, name, onClick } = this.props;
    const isDark = chroma(background).luminance() < 0.08;
    return (
      <div style={{ background: background }} className={styles["edit-mode"]}>
        <div className={styles["color-box-content"]}>
          <span className={styles[isDark && "light-text"]}>
            {name}
            <button
              className={styles["delete-button"]}
              onClick={() => onClick(name)}
            >
              <FaTrashAlt className={styles[isDark && "light-text"]} />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default ModifyColorBox;
