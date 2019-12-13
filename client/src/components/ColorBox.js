import React, { Component } from "react";
import styles from "../styles/ColorBox.module.css";

class ColorBox extends Component {
  render() {
    const { background } = this.props;
    return (
      <div
        style={{ background: background }}
        className={styles["color-box"]}
      ></div>
    );
  }
}

export default ColorBox;
