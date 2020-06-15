import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isBackgroundLight } from './helperFunctions';
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
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }
  render() {
    const { background, name, color } = this.props;
    const {copied} = this.state

    const isLight = isBackgroundLight(background);   
    return (
      <CopyToClipboard
        text={color}
        onCopy={this.changeCopyTimer}
      >
        <div style={{ background }} className={styles.colorBox}>
        {copied ? (
          <Portal>
            <div className="modal">
              <h1>{`${color}`}</h1>
            </div>
          </Portal>) 
        : null }
          <div className={styles.colorBoxContent}>
            <button
              className={`
              ${styles.copyButton}
              ${isLight ? `${styles.darkText}` : `${styles.lightText}`}
              `}
            >
              copy
            </button>
            <span className={isLight ?`${styles.darkText}` : `${styles.lightText}` }>
              {name}
            </span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
