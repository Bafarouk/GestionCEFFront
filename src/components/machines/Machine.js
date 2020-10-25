import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Table} from 'react-bootstrap';
import api from "../../api";

export default class machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machines:[]
        };
    }
    componentDidMount(){
        api.get("/api/machine/getAllMachine").then((res)=>{
            this.setState({machines:res.data});
        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    render() {
        return (
            <Card className="text-black " style={{color:"grey"}}>
                <Card.Body>
                    <Card.Title>Machines</Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Numéro Machine</th>
                            <th>Type de la machine</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.machines.map(machines =>
                                <tr>
                                    <td>{machines.num_machine}</td>
                                    <td>{machines.type_machine}</td>
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
