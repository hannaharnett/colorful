import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Navbar from './Navbar';
import styles from "../styles/PaletteList.module.css";

import ColorfulAPI from "./ColorfulAPI";

class PaletteList extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      palettes: []
    };
  }
  componentDidMount() {
    this._isMounted = true;
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
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { palettes = [] } = this.state;
    return (
      <div className={styles.root}>
        <Navbar title="colorful" >
          <Link to="/api/palettes/new">Create</Link>
        </Navbar>
        {/* <nav className={styles.nav}>
            <h1 className={styles.title}>COLORFUL</h1>
            <div className={styles.navLinks}>
              <Link to="/api/palettes/new" className={styles.link}>
                Create
              </Link>
            </div>
          </nav> */}
        <div className={styles.container}>
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
