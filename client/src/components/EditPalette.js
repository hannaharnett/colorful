import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import BuildPalette from "./BuildPalette";

function EditPalette(props) {
  const [title, setTitle] = useState();
  function titleCallback(titleFromChild) {
    setTitle(titleFromChild)
  }
  const id = props.match.params.id;
  return (
    <div className='new-and-edit-root'>
      <Navbar title={title}>
        <Link to="/">All palettes</Link>
        <Link to={`/${id}`}>Cancel</Link>
      </Navbar>
      <BuildPalette callbackFromParent={titleCallback} id={id} />
    </div>
  );
}

export default EditPalette;
