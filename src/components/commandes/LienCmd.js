import React, {Component} from "react";
import AjouterCmd from "./AjouterCmd"
export default class  LienCmd extends Component {
    render(){

        return(

            <div className="row">
                <div className="col-md-8">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Liste des Commandes </li>
                    </ol>
                </div>
                <div className="col-md-4">
                    <AjouterCmd />
                </div>
            </div>
        )

    }
}