import React from "react";
import { Link } from "react-router-dom";
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
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) return name;
    return `${name.substring(0, maxLength)}...`;
  };
  return (
    <div className={styles.root}>
      <Link to={`/api/palettes/${_id}`}>
        <div className={styles.miniColorBoxes}>{miniColorBoxes}</div>
        <h1 className={styles.title}>{truncateName(name, 16)}</h1>
      </Link>
    </div>
  );
}

export default MiniPalette;
