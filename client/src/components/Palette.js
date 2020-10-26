import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ColorBox from "./ColorBox";
import styles from "../styles/Palette.module.css";
import Modal from './Modal';
import Navbar from './Navbar';
import Button from './Button';
import ColorfulAPI from "../utils/ColorfulAPI";

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
    ColorfulAPI.getOnePalette(this.props.match.params.id)
      .then(data => {
        this.setState({ palette: data });
      })
      .catch(error => {
        window.location.assign("/")
      });
  }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal })
  }
  render() {
    const { colors = [], name, _id } = this.state.palette;
    const { showModal } = this.state;

    return (
      <div className={styles.palette}>
        <Navbar title={name}>
          <Link to="/">All palettes</Link>
          <Link to={_id ? `/${_id}` : "/"} onClick={this.toggleModal}>Delete palette</Link>
          <Link to={`/edit/${_id}`}>Edit palette</Link>
        </Navbar>
        {showModal ? (
          <Modal onModalClose={this.toggleModal}>
            <h1>Are you sure you want to delete this Palette?</h1>
            <div className={styles.modalButtons}>
              <Button text="Yes" onClick={() => ColorfulAPI.deletePalette(_id)} filled />
              <Button text="No" onClick={this.toggleModal} />
            </div>
          </Modal>
        ) : null}
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
