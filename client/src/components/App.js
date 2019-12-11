import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import PaletteList from "./PaletteList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: []
    };
    this.loadData = this.loadData.bind(this);
  }
  loadData = () => {
    return axios
      .get(`http://localhost:5000/api/palettes`)
      .then(result => {
        this.setState({
          palettes: result.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.loadData();
  }
  render() {
    const { palettes } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/api/palettes"
            render={routeProps => (
              <PaletteList palettes={palettes} {...routeProps} />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
