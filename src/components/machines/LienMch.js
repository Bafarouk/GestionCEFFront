import React, {Component} from "react";
import AjouterMch from "./AjouterMch"

export default class  LienMch extends Component {
    render(){

        return(
            <div className="row">
                <div className="col-md-8">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Liste des Machines </li>
             </ol>
            </div>
        <div className="col-md-4">
            <AjouterMch/>
        </div>
        </div>
        )

    }
}