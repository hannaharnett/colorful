import React, { Component } from "react";
import PaletteNavbar from "./PaletteNavbar";
import ColorPickerForm from "./ColorPickerForm";
import ColorBox from "./ColorBox";
import styles from "../styles/NewPaletteForm.module.css";
import ColorfulAPI from "./ColorfulAPI";

class EditPalette extends Component {
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
  componentDidMount() {
    ColorfulAPI.getOnePalette(this.props.match.params.id).then(data => {
      console.log(data);
      this.setState({
        colors: data.colors,
        name: data.name,
        id: data._id
      });
    });
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
    const newData = {
      name: this.state.name,
      colors: this.state.colors
    };

    ColorfulAPI.updatePalette(this.state.id, newData);

    this.setState({
      name: "",
      colors: [],
      id: ""
    });
  }
  render() {
    const { colors = [], name } = this.state;
    return (
      <div className={styles["root"]}>
        <PaletteNavbar
          name={name}
          returnLink="All Palettes"
          deleteLink="Delete Palette"
        />
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
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPalette;
