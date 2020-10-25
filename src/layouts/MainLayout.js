import React, { Component } from "react";
import { BrowserRouter as Router, Route , Redirect } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "../components/home";
import Profile from "../components/profile/Profile";
import Commande from "../components/commandes/Commande"
import Machine from "../components/machines/Machine"
import Intervention from "../components/interventions/Intervention"
import User from "../components/users/user"
import Menu from "../components/Menu"
import LienCmd from "../components/commandes/LienCmd"
import LienMch from "../components/machines/LienMch"
import LienInt from "../components/interventions/LienInt"
import LienUser from "../components/users/LienUser"
import LienLiv from "../components/livraisons/LienLiv"
import Livraison from "../components/livraisons/Livraison"
import api from "../api";

export default class MainLayout extends Component {
    constructor(props){
        super( props)
        this.state={
            loaded : false,
            redirect : ""
        }
    }
    componentWillMount() {
        api.get("/api/user/findUser?mail="+localStorage.getItem("user")).then( res => {
            localStorage.setItem("id" ,res.data[0]._id );
        })
    }


    render() {
            return (

                <Router>
                    {this.state.redirect}
                    <Route path="/" exact strict render={()=>{
                        return(<Login />)
                    }}/>

                    <Route path="/profile" exact strict render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <Profile  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>

                    <Route path="/home" exact strict  render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <Home/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>

                    <Route path="/commande" exact strict render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <LienCmd />
                                            <Commande />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                    <Route path="/machine" exact strict  render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <LienMch/>
                                            <Machine/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                    <Route path="/intervention" exact strict  render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <LienInt/>
                                            <Intervention/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                    <Route path="/user" exact strict render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <LienUser/>
                                            <User/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                    <Route path="/livraison" exact strict render={()=>{
                        return(
                            <div >
                                <Header/>
                                <div id="wrapper">
                                    <Menu/>
                                    <div id="content-wrapper">
                                        <div className="container-fluid">
                                            <LienLiv/>
                                            <Livraison/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}/>
                </Router>


            );
  }
}
