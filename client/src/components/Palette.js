import React, { Component } from "react";
import ColorBox from "./ColorBox";
import styles from "../styles/Palette.module.css";
import PaletteNavbar from "./PaletteNavbar";
import ColorfulAPI from "./ColorfulAPI";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: [],
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    ColorfulAPI.getOnePalette(this.props.match.params.id).then(data => {
      console.log(data);
      this.setState({ palette: data });
    });
  }
  toggleModal() {
    this.setState({showModal: !this.state.showModal})
  }
  render() {
    const { colors = [], name, _id } = this.state.palette;
    return (
      <div className={styles.palette}>
        <PaletteNavbar
          open={this.state.showModal}
          toggleModal={this.toggleModal}
          name={name}
          id={_id}
          deleteLink="Delete Palette"
          returnLink="All Palettes"
          editLink="Update Palette"
        />
        <div className={styles.colors}>
          {colors.map((color, index) => (
            <ColorBox
              open={this.state.showModal}
              background={color.color}
              name={color.name}
              color={color.color}
              key={index}
              id={color.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Palette;
