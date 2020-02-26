import React, { Component } from "react";
import { ChromePicker } from "react-color";
import styles from "../styles/ColorPickerForm.module.css";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#2835c0",
      newColorName: ""
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    const isColorNameUnique = () =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== newColor.name.toLowerCase()
      );
    const isColorUnique = () =>
      this.props.colors.every(
        ({ color }) => color.toLowerCase() !== newColor.color.toLowerCase()
      );
    if (isColorUnique(newColor.color) && isColorNameUnique(newColor.name)) {
      this.props.addNewColor(newColor);
      this.setState({ newColorName: "" });
    } else {
      window.alert("Both color and name must be unique!");
    }
  }
  render() {
    const { currentColor, newColorName } = this.state;
    const { fullPalette } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={styles["form-container"]}>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <div className={styles["submit-color"]}>
            <input
              type="text"
              name="newColorName"
              value={newColorName}
              onChange={this.handleChange}
              required
              disabled={fullPalette}
            />
            <button type="submit" disabled={fullPalette}>
              {fullPalette ? "Palette is full" : "Add color"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ColorPickerForm;
