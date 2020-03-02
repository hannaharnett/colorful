import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteList.module.css";

import ColorfulAPI from "./ColorfulAPI";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: []
    };
  }
  componentDidMount() {
    ColorfulAPI.getAllPalettes().then(data => {
      this.setState({ palettes: data });
    });
  }
  componentDidUpdate(prevProps) {
    // only update if the data has changed
    if (prevProps.palettes !== this.state.palettes) {
      ColorfulAPI.getAllPalettes().then(data => {
        this.setState({ palettes: data });
      });
    }
  }
  render() {
    const { palettes = [] } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <h1 className={styles.title}>colorful</h1>
            <div className={styles.navLinks}>
              <Link to="/api/palettes/new" className={styles.link}>
                create
              </Link>
            </div>
          </nav>
          <div className={styles.palettes}>
            {palettes.map(palette => (
              <MiniPalette key={palette._id} {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteList;
