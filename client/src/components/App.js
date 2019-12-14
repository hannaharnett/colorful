import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import PaletteList from "./PaletteList";
import Palette from "./Palette";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/api/palettes"
            render={routeProps => <PaletteList {...routeProps} />}
          ></Route>
          <Route
            exact
            path="/api/palettes/new"
            render={routeProps => <NewPaletteForm {...routeProps} />}
          ></Route>
          <Route
            exact
            path="/api/palettes/:id"
            render={routeProps => <Palette {...routeProps} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
