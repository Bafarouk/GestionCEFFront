import React, { Component } from 'react';
import api from "../api";
import Linegraph from "./graphes/Linegraph";
import BarGraph from "./graphes/BarGraphe";
import PieGraph from "./graphes/PieGraphe";
import {Row, Col} from "react-bootstrap";

const inputstyle = { marginTop: "20px"}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livraisons:[],
            loaded : false
        };
    }
    componentDidMount(){
        api.get("/api/commande/getAllCommande").then((res)=>{
            this.setState({commandes:res.data , loaded : true});
            console.log(res.data)

        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    render() {
        return (
            <div>
                <h1 align="center"> Statistique </h1>
                <Row>
                    <Col className="col-md-12 container-fluid" style={inputstyle} >
                        <Linegraph/>
                    </Col>
                </Row>

                <Row>
                    <Col className="col-md-8 container-fluid"  style={inputstyle}>
                        <BarGraph/>
                    </Col>
                    <Col className="col-md-6 container-fluid " style={inputstyle}>
                    </Col>
                </Row>


            </div>

        )
    }
}
