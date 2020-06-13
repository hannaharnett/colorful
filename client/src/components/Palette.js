import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ColorBox from "./ColorBox";
import styles from "../styles/Palette.module.css";
import Portal from './Portal';
import Navbar from './Navbar';
import Button from './Button';
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
    const { showModal } = this.state;

    return (
      <div className={styles.palette}>
        <Navbar title={name}>
          <Link to="/api/palettes">All palettes</Link>
          <Link to={_id ? `/api/palettes/${_id}` : "/api/palettes"} onClick={this.toggleModal}>Delete palette</Link>
          {showModal ? (
            <Portal>
            <div className={`modal ${styles.modalContainer}`}>
                <h2>Are you sure you want to delete this Palette?</h2>
                <div className={styles.modalButtons}>
                  <Button text="Yes" onClick={() => ColorfulAPI.deletePalette(_id)} filled />
                  <Button text="No" onClick={this.toggleModal} />
                </div>
            </div> 
            </Portal>
        ) : null}
          <Link to={`/api/palettes/edit/${_id}`}>Edit palette</Link>
        </Navbar>
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
