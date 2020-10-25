import React, {Component} from "react";
import { NavLink} from "react-router-dom";
import api from "../api";


export default class Menu extends Component {

    constructor(props){
        super( props)
        this.state={
            user_type : "",
            loaded : false
        }
    }
    componentWillMount() {
        api.get("/api/user/findUser?mail="+localStorage.getItem("user")).then(res =>{
            this.setState({user_type : res.data[0].role , loaded : true })
            console.log(this.state.user_type)
        })
    }

    render() {
        let body="";
        if ((this.state.user_type == "utilisateur") && ( this.state.loaded)) {

            body = <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/Home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Statistiques</span>
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link" to="/commande">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des commandes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/machine">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des machines</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/intervention">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des interventions</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/livraison">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des livraisons</span></NavLink>
                </li>
            </ul>
        }
        if ((this.state.user_type == "administrateur") && ( this.state.loaded)) {
            body = <ul className="sidebar navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/Home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Statistiques</span>
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link" to="/commande">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des commandes</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des utilisateurs</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/machine">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des machines</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/intervention">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des interventions</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/livraison">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Liste des livraisons</span></NavLink>
                </li>
            </ul>
        }
        return (
            <div>
                {body}
            </div>
        )
    }
}