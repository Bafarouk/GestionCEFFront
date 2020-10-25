import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Table} from 'react-bootstrap';
import api from "../../api";

export default class Livraison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livraisons:[]
        };
    }
    componentDidMount(){
        api.get("/api/livraison/getAll").then((res)=>{
            this.setState({livraisons:res.data});
        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    render() {
        return (
            <Card className="text-black " style={{color:"grey"}}>
                <Card.Body>
                    <Card.Title>Livraisons</Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Qunatite</th>
                            <th>Type produit</th>
                            <th>Commande ID</th>
                            <th>Client</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.livraisons.map(livraison =>
                                <tr>
                                    <td>{livraison.quantite}</td>
                                    <td>{livraison.type_produit}</td>
                                    <td>{livraison.commande_id}</td>
                                    <td>{livraison.client}</td>
                                    <td>{livraison.date}</td>
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
