import React, { Component } from "react";
import ColorBox from "./ColorBox";
import styles from "../styles/Palette.module.css";
import PaletteNavbar from "./PaletteNavbar";

import ColorfulAPI from "./ColorfulAPI";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: []
    };
  }
  componentDidMount() {
    ColorfulAPI.getOnePalette(this.props.match.params.id).then(data => {
      console.log(data);
      this.setState({ palette: data });
    });
  }
  render() {
    const { colors = [], name, _id } = this.state.palette;
    return (
      <div className={styles["palette"]}>
        <PaletteNavbar
          name={name}
          id={_id}
          deleteLink="Delete Palette"
          returnLink="All Palettes"
          editLink="Edit Palette"
        />
        <div className={styles["colors"]}>
          {colors.map(color => (
            <ColorBox
              background={color.color}
              name={color.name}
              color={color.color}
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
