import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ColorBox from "./ColorBox";
import styles from "../styles/Palette.module.css";
import PaletteNavbar from "./PaletteNavbar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      palette: [],
      error: null
    };
    this.getPalette = this.getPalette.bind(this);
  }
  getPalette = () => {
    return axios
      .get(`http://localhost:5000/api/palettes/${this.props.match.params.id}`)
      .then(result => {
        this.setState({
          palette: result.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getPalette();
  }
  render() {
    const { colors = [], name } = this.state.palette;
    return (
      <div className={styles["palette"]}>
        <PaletteNavbar name={name} />
        <div className={styles["colors"]}>
          {colors.map(color => (
            <ColorBox
              background={color.color}
              name={color.name}
              key={color.name}
              id={color.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Palette;
