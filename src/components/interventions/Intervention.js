import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Table} from 'react-bootstrap';
import api from "../../api";

export default class intervention extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interventions:[]
        };
    }
    componentDidMount(){
        api.get("/api/intervention/getAllIntervention").then((res)=>{
            this.setState({interventions:res.data});
        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    render() {
        return (
            <Card className="text-black " style={{color:"grey"}}>
                <Card.Body>
                    <Card.Title>Interventions</Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Numéro de l'intervention</th>
                            <th>Nom du client</th>
                            <th>Nature de l'intervention</th>
                            <th>Le cadre de l'intervention</th>
                            <th>Message d'erreur</th>
                            <th>Prestation</th>
                            <th>Statut de l'intervention</th>
                            <th>Date</th>
                            <th>L'intervenant</th>
                            <th>Editeur</th>
                            <th>Numéro Machine</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.interventions.map(interventions =>
                                <tr>
                                    <td>{interventions.num_intervention}</td>
                                    <td>{interventions.nom_client}</td>
                                    <td>{interventions.nature_intervention}</td>
                                    <td>{interventions.cadre_intervention}</td>
                                    <td>{interventions.msg_erreur}</td>
                                    <td>{interventions.prestation}</td>
                                    <td>{interventions.statut_intervention}</td>
                                    <td>{interventions.date}</td>
                                    <td>{interventions.intervenant}</td>
                                    <td>{interventions.user_id}</td>
                                    <td>{interventions.machine_id}</td>

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
