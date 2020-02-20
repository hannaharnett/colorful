import React, { Component } from "react";
import chroma from "chroma-js";
import styles from "../styles/ColorBox.module.css";

class ModifyColorBox extends Component {
  render() {
    const { background, name, onClick } = this.props;
    const isDark = chroma(background).luminance() < 0.08;
    return (
      <div style={{ background: background }} className={styles["edit-mode"]}>
        <div className={styles["color-box-content"]}>
          <button
            className={styles["delete-button"]}
            onClick={() => onClick(name)}
          >
            X
          </button>
          <span className={styles[isDark && "dark-text"]}>{name}</span>
        </div>
      </div>
    );
  }
}

export default ModifyColorBox;
