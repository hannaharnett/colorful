import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Navbar from './Navbar';
import styles from "../styles/PaletteList.module.css";

import ColorfulAPI from "../utils/ColorfulAPI";

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
        if (this._isMounted) {
          this.setState({ palettes: data });
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { palettes = [] } = this.state;
    return (
      <div className={styles.root}>
        <Navbar title="colorful" >
          <Link to="/new">Create</Link>
        </Navbar>
        <div className={styles.container}>
          <ul className={styles.palettes}>
            {palettes.map(palette => (
              <li key={palette._id}><MiniPalette {...palette} /></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PaletteList;
