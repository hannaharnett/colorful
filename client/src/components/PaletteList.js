import React, { Component } from "react";
import axios from "axios";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteList.module.css";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: []
    };
    this.getAllPalettes = this.getAllPalettes.bind(this);
  }
  getAllPalettes = () => {
    // load data from db into state
    return axios
      .get(`http://localhost:5000/api/palettes`)
      .then(result => {
        this.setState({
          palettes: result.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getAllPalettes();
  }
  render() {
    const { palettes = [] } = this.state;
    return (
      <div className={styles["root"]}>
        <div className={styles["container"]}>
          <nav className={styles["nav"]}>
            <h1 className={styles["title"]}>colorful</h1>
          </nav>
          <div className={styles["palettes"]}>
            {palettes.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteList;
