import React, { Component } from "react";
import PaletteNavbar from "./PaletteNavbar";
import ColorPickerForm from "./ColorPickerForm";
import ModifyColorBox from "./ModifyColorBox";
import styles from "../styles/NewPaletteForm.module.css";
import ColorfulAPI from "./ColorfulAPI";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      name: ""
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor]
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: this.state.name,
      colors: this.state.colors
    };

    ColorfulAPI.createPalette(data);

    this.setState({
      name: "",
      colors: []
    });
  }
  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
    });
  }
  render() {
    const { colors = [], name } = this.state;
    return (
      <div className={styles["root"]}>
        <PaletteNavbar name="Create a palette" returnLink="All Palettes" />
        <div className={styles["container"]}>
          <div className={styles["color-picker"]}>
            <h1>Add new Color here!</h1>
            <ColorPickerForm addNewColor={this.addNewColor} />
          </div>
          <div className={styles["colors"]}>
            {colors.map(color => (
              <ModifyColorBox
                background={color.color}
                name={color.name}
                onClick={this.removeColor}
              />
            ))}
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.handleChange}
            ></input>
            <button type="submit">Save Palette</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPaletteForm;
