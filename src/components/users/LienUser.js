import React, {Component} from "react";
import AjouterUser from "./AjouterUser"

export default class  LienUser extends Component {
    render(){

        return(
            <div className="row">
                <div className="col-md-8">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Liste des Utilisateurs </li>
                    </ol>
                </div>
                <div className="col-md-4">
                    <AjouterUser/>
                </div>
            </div>
        )

    }
}