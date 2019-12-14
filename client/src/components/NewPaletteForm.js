import React, { Component } from "react";
import axios from "axios";

import PaletteNavbar from "./PaletteNavbar";
import ColorPickerForm from "./ColorPickerForm";
import ColorBox from "./ColorBox";
import styles from "../styles/NewPaletteForm.module.css";

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      name: ""
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

    axios
      .post(`http://localhost:5000/api/palettes/new`, data)
      .then(result => {
        console.log(result);
        this.setState({
          name: "",
          colors: []
        });
        this.props.history.push("/api/palettes");
      })
      .catch(err => {
        console.log("Error in Create Palette!");
      });
  }
  render() {
    const { colors = [], name } = this.state;
    return (
      <div className={styles["root"]}>
        <PaletteNavbar name="Create a palette" />
        <div className={styles["container"]}>
          <div className={styles["color-picker"]}>
            <h1>Add new Color here!</h1>
            <ColorPickerForm addNewColor={this.addNewColor} />
          </div>
          <div className={styles["colors"]}>
            {colors.map(color => (
              <ColorBox background={color.color} />
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
