import React, { Component } from "react";
import "./App.css";
import Buttons from "./components/buttons";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Alert from "./components/alert";
import Modal from "./components/modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="container">
          <div className="mt-3">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/buttons" component={Buttons} />
              <Route path="/alerts" exact component={Alert} />
              <Route path="/modals" exact component={Modal} />
              {/* <Route path="/movies-list/:id" component={MovieForm} /> */}
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
