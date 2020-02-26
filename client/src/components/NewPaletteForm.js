import React, { Component } from "react";
import ModifyPaletteNavbar from "./ModifyPaletteNavbar";
import ColorPickerForm from "./ColorPickerForm";
import ModifyColorBox from "./ModifyColorBox";
import styles from "../styles/NewPaletteForm.module.css";
import ColorfulAPI from "./ColorfulAPI";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
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
    const { maxColors } = this.props;
    const fullPalette = colors.length >= maxColors;
    console.log(colors.length);
    console.log(maxColors);
    return (
      <div className={styles["root"]}>
        <ModifyPaletteNavbar
          name="Create a palette"
          linkOne="All Palettes"
          linkTwo="Cancel"
        />
        <div className={styles["container"]}>
          <div className={styles["color-picker-container"]}>
            <ColorPickerForm
              className={styles["color-picker"]}
              addNewColor={this.addNewColor}
              fullPalette={fullPalette}
              colors={colors}
            />
            <div className={styles["form-container"]}>
              <form onSubmit={this.handleSubmit}>
                <div className={styles["submit"]}>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                    required
                  ></input>
                  <button type="submit">Save Palette</button>
                </div>
              </form>
            </div>
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
        </div>
      </div>
    );
  }
}

export default NewPaletteForm;
