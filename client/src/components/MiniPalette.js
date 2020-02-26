import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/MiniPalette.module.css";

function MiniPalette(props) {
  const { name, colors, _id } = props;
  const miniColorBoxes = colors.map(color => (
    <div
      className={styles["mini-colors"]}
      style={{
        backgroundColor: color.color
      }}
      key={color.name}
    />
  ));
  const truncateName = (name, maxLength) => {
    if (name.length <= maxLength) return name;
    return `${name.substring(0, maxLength)}...`;
  };
  return (
    <div className={styles["root"]}>
      <Link to={`/api/palettes/${_id}`}>
        <div className={styles["mini-color-boxes"]}>{miniColorBoxes}</div>
        <h1 className={styles["title"]}>{truncateName(name, 14)}</h1>
      </Link>
    </div>
  );
}

export default MiniPalette;
