import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ColorPickerForm from "./ColorPickerForm";
import ModifyColorBox from "./ModifyColorBox";
import styles from "../styles/EditPalette.module.css";
import ColorfulAPI from "./ColorfulAPI";
import Navbar from "./Navbar";

class EditPalette extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      name: "",
      id: ""
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeColor = this.removeColor.bind(this);
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
  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter(color => color.name !== colorName)
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
    const { colors = [], name, id } = this.state;
    const { maxColors } = this.props;
    const fullPalette = colors.length >= maxColors;
    return (
      <div className={styles.root}>
        <Navbar title={name} >
          <Link to="/api/palettes">All palettes</Link>
          <Link to={`/api/palettes/${id}`}>Cancel</Link>
        </Navbar>
        <div className={styles.container}>
          <div className={styles.colorPickerContainer}>
            <ColorPickerForm
              addNewColor={this.addNewColor}
              fullPalette={fullPalette}
              colors={colors}
            />
            <div className={styles.formContainer}>
              <form onSubmit={this.handleSubmit}>
                <div className={styles.submit}>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                    placeholder="Palette name"
                  ></input>
                  <button type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.colors}>
            {colors.map((color, index) => (
              <ModifyColorBox
                background={color.color}
                name={color.name}
                onClick={this.removeColor}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EditPalette;
