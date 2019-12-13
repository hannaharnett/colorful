import React, { Component } from "react";
import { ChromePicker } from "react-color";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "",
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
      name: this.state.newColorName,
      color: this.state.currentColor
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
        </div>
        <input
          name="newColorName"
          type="text"
          value={newColorName}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull ? "grey" : currentColor
          }}
        >
          {paletteIsFull ? "Palette full" : "Add Color"}
        </input>
      </form>
    );
  }
}

export default ColorPickerForm;
