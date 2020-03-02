import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import styles from "../styles/ColorBox.module.css";

class ColorBox extends Component {
  constructor() {
    super();
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });

    console.log(this.state.copied);
  }
  copy(color) {
    if (this.state.copied) {
      alert(color);
    }
  }
  render() {
    const { background, name, color } = this.props;
    const copied = this.state;
    console.log(copied);

    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.5;
    return (
      <CopyToClipboard
        text={color}
        onCopy={this.changeCopyState}
        onClick={this.copy(color)}
      >
        <div style={{ background }} className={styles.colorBox}>
          <div className={styles.colorBoxContent}>
            <button
              className={
                isLight
                  ? `${styles.copyButton} ${styles.darkText}`
                  : `${styles.copyButton}`
              }
            >
              copy
            </button>
            <span className={isDark && styles.lightText}>{name}</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
