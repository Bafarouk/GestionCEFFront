import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import steg from "../steg.png"

export default class Header extends Component {
    removeJWT(){
        localStorage.removeItem("jwt")
    }
  render() {
    return (
        <React.Fragment>
            <Navbar  expand="lg">
                <Navbar.Brand  className="border-bottom border-primary text-primary">STEG</Navbar.Brand>
                <img src={steg} width="200" height="60" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button variant="outline-light"><NavLink to="/profile" style={{color:"black"}}> Profile </NavLink></Button>

                        <Button variant="outline-light"><NavLink to="/" onClick={this.removeJWT} style={{color:"black"}}> Déconnexion </NavLink></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <hr className="border border-white"/>
        </React.Fragment>
    )
  }
}
