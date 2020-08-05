import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Modal from './Modal';
import styles from "../styles/ColorPickerForm.module.css";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#453886",
      newColorName: "",
      duplicates: false
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
      this.setState({ duplicates: true }, () => {
        setTimeout(() => this.setState({ duplicates: false }), 3000)
      });
    }
  }
  render() {
    const { currentColor, newColorName, duplicates } = this.state;
    const { fullPalette } = this.props;
    return (
      <div>
        {duplicates ? (
          <Modal onModalClose={() => this.setState({ duplicates: false })}>
            <h1>Both name and color must be unique!</h1>
          </Modal>
        ) : null}

        <form onSubmit={this.handleSubmit} className={styles.formContainer}>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <div className={styles.submitColor}>
            <input
              type="text"
              name="newColorName"
              value={newColorName}
              onChange={this.handleChange}
              required
              disabled={fullPalette}
              autoComplete="off"
              placeholder={fullPalette ? "Palette is full" : "Color name"}
            />
            <button type="submit" disabled={fullPalette} aria-label="Add color">
              +
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ColorPickerForm;
