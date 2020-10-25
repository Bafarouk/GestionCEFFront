import React, {Component} from "react";
import AjouterInt from "./AjouterInt"

export default class  LienInt extends Component {
    render(){

        return(
            <div className="row">
                <div className="col-md-8">

                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Liste des Interventions </li>
            </ol>
                </div>
                <AjouterInt/>
            </div>
        )

    }
}