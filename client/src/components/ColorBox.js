import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import Portal from './Portal';
import styles from "../styles/ColorBox.module.css";

class ColorBox extends Component {
  constructor() {
    super();
    this.state = { copied: false };
    this.changeCopyTimer = this.changeCopyTimer.bind(this);
  }
  changeCopyTimer() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { background, name, color } = this.props;
    const {copied} = this.state

    const isDark = chroma(background).luminance() <= 0.08;
    const isLight = chroma(background).luminance() >= 0.5;
    return (
      <CopyToClipboard
        text={color}
        onCopy={this.changeCopyTimer}
      >
        <div style={{ background }} className={styles.colorBox}>
        {copied ? (
          <Portal>
            <div className="modal">
              <h1>{`COPIED ${color}`}</h1>
            </div>
          </Portal>) 
        : null }
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
            <span className={isDark ? styles.lightText : undefined}>
              {name}
            </span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
