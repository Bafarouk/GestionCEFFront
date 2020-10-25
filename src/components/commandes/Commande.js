import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Table} from 'react-bootstrap';
import api from "../../api";

export default class commande extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commandes:[]
        };
    }
    componentDidMount(){
        api.get("/api/commande/getAllCommande").then((res)=>{
            this.setState({commandes:res.data});
            console.log(res.data)

        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    render() {
        return (
            <Card className="text-black " style={{color:"grey"}}>
                <Card.Body>
                    <Card.Title>Commandes</Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Commande ID</th>
                            <th>Type produit</th>
                            <th>Quantites</th>
                            <th>User ID</th>
                            <th>Etat</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.commandes.map(commandes =>
                                <tr>
                                    <td>{commandes._id}</td>
                                    <td>{commandes.type_produit}</td>
                                    <td>{commandes.quantite}</td>
                                    <td>{commandes.user_id}</td>
                                    <td>{commandes.etat}</td>
                                    <td>{commandes.date}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}
