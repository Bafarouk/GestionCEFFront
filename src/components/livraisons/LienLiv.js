import React, {Component} from "react";
import AjouterLiv from "./AjouterLiv"

export default class  LienLiv extends Component {
    render(){

        return(
            <div className="row">
                <div className="col-md-8">

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Liste des Livraisons </li>
                    </ol>
                </div>
                <AjouterLiv/>
            </div>
        )

    }
}