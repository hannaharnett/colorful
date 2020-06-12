import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PaletteList from "./PaletteList";
import Palette from "./Palette";
import NewPaletteForm from "./NewPaletteForm";
import EditPalette from "./EditPalette";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/api/palettes"
          >
            <PaletteList />
          </Route>
          <Route
            path="/api/palettes/new"
          >
            <NewPaletteForm />
          </Route>
          <Route
            path="/api/palettes/edit/:id"
            render={routeProps => <EditPalette {...routeProps} />}
          ></Route>
          <Route
            path="/api/palettes/:id"
            render={routeProps => <Palette {...routeProps} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
