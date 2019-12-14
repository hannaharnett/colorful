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
      palette: [],
      editing: false
    };
    this.getPalette = this.getPalette.bind(this);
  }
  getPalette() {
    console.log(this.props.match.params.id);
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
  }
  componentDidMount() {
    this.getPalette();
  }
  render() {
    const { colors = [], name, _id } = this.state.palette;
    return (
      <div className={styles["palette"]}>
        <PaletteNavbar
          name={name}
          id={_id}
          rightLink="Edit Palette"
          leftLink="All Palettes"
        />
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
