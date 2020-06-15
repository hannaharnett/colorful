import React, { Component } from "react";
import ColorPickerForm from "./ColorPickerForm";
import ModifyColorBox from "./ModifyColorBox";
import styles from "../styles/BuildPalette.module.css";
import ColorfulAPI from "./ColorfulAPI";
import Button from './Button';

class BuildPalette extends Component {
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
        this.handleChange = this.handleChange.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        if(this.props.id) {
            ColorfulAPI.getOnePalette(this.props.id).then(data => {
                this.setState({
                    colors: data.colors,
                    name: data.name,
                    id: data._id
                });
            });
        }
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    addNewColor(newColor) {
        this.setState({
          colors: [...this.state.colors, newColor]
        });
    }
    removeColor(colorName) {
        this.setState({
          colors: this.state.colors.filter(color => color.name !== colorName)
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = {
          name: this.state.name,
          colors: this.state.colors
        };
        
        if(!this.state.id) {
            ColorfulAPI.createPalette(data);
        } else {
            ColorfulAPI.updatePalette(this.state.id, data)
        }
        
        this.setState({
          name: "",
          colors: [],
          id: ""
        });
    }
    passTitleToChild() {
        this.props.callbackFromParent(this.state.name);
    }
    render() {
        const { colors = [], name, id } = this.state;
        const { maxColors } = this.props;
        const fullPalette = colors.length >= maxColors;
        if(id) {this.passTitleToChild()}
        return (
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
                      required
                      autoComplete="off"
                      placeholder="Palette name"
                    />
                    <Button text="Save" filled />
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.colors}>
              {colors.map(color => (
                <ModifyColorBox
                  background={color.color}
                  name={color.name}
                  onClick={this.removeColor}
                  key={color.name}
                />
              ))}
            </div>
          </div> 
        );
    }
}

export default BuildPalette;