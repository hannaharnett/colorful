import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import BuildPalette from './BuildPalette';

function NewPaletteForm() {
  return (
    <div className='new-and-edit-root'>
      <Navbar title="New palette">
        <Link to="/api/palettes">Cancel</Link>
      </Navbar>
      <BuildPalette />
    </div>
  );
}

export default NewPaletteForm;
