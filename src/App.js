import React, { Component } from 'react';
import Login from "./components/Login";
import './App.css';
import Container from 'react-bootstrap/Container';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter as Router } from "react-router-dom";
import Switch from "react-router-dom/Switch"
import Route from "react-router-dom/Route"

class App extends Component {

  render() {
    return (
        <div className="bg">
            <Container>
                <Router>
                    <Switch>
                        <Route path="/" exact strict component={Login}></Route>
                        <Route path="/"  component={MainLayout}></Route>
                    </Switch>
                </Router>

            </Container>
        </div>
    );
  }
}

export default App;
