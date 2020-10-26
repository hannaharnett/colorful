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
            path="/"
          >
            <PaletteList />
          </Route>
          <Route
            path="/new"
          >
            <NewPaletteForm />
          </Route>
          <Route
            path="/edit/:id"
            render={routeProps => <EditPalette {...routeProps} />}
          ></Route>
          <Route
            path="/:id"
            render={routeProps => <Palette {...routeProps} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
