import React from "react";
import { Link } from "react-router-dom";
import { isBackgroundLight, truncateName } from '../utils/helperFunctions';
import styles from "../styles/MiniPalette.module.css";

function MiniPalette(props) {
  const { name, colors, _id } = props;
  const miniColorBoxes = colors.map((color, index) => (
    <div
      className={styles.miniColors}
      style={{
        backgroundColor: color.color
      }}
      key={index}
    />
  ));
  const background = colors[0].color;
  const isLight = isBackgroundLight(background);

  return (
    <div className={styles.root} style={{ backgroundColor: background }} >
      <div className={styles.miniPaletteContent}>
        <Link to={`/${_id}`} className={styles.miniLink} aria-label={name} >
          <div className={styles.miniColorBoxes}>{miniColorBoxes}</div>
        </Link>
        <span className={`${styles.title} ${isLight ? `${styles.darkText}` : `${styles.lightText}`}`}>{truncateName(name, 18)}</span>
      </div>
    </div>
  );
}

export default MiniPalette;

