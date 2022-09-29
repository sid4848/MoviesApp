import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MoviesForm from "./components/moviesForm";
import React from "react";
import LoginForm from "./components/common/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path={"/login"} component={LoginForm}></Route>
            <Route path={"/movies/:id"} component={MoviesForm}></Route>
            <Route path={"/movies"} component={Movies}></Route>
            <Route path={"/customers"} component={Customers}></Route>
            <Route path={"/rentals"} component={Rentals}></Route>
            <Route path={"/not-found"} component={NotFound}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
