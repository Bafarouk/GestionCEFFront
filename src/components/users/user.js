import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Table} from 'react-bootstrap';
import api from "../../api";
import Deletebtn from "./Deletebtn"
export default class user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            loaded : true
        };
    }
    componentDidMount(){
        api.get("/api/user/getAllUser").then((res)=>{
            this.setState({users:res.data , loaded : true});
            console.log(res.data)
        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }

    delete(e){
        console.log(document.getElementById("del").value)

        // api.delete("/api/user/deleteUser?id=").then(res => {
        //     console.log(res.data)
        // NotificationManager.success('Utilisateur Supprimé', 'Supprimer Utilisateur');
        // }).catch( (error) =>{
        //     NotificationManager.error('Erreur lors de la suppresion', 'Supprimer Utilisateur');
        // })
        e.preventDefault()
    }

    render() {
        let body =" "
        if (this.state.loaded){
            body =                             this.state.users.map((users , key ) =>{
                    return(
                        <tr>
                            <td>{users.nom}</td>
                            <td>{users.prenom}</td>
                            <td>{users.cin}</td>
                            <td>{users.mail}</td>
                            <td>{users.role}</td>
                            <td>
                                <Deletebtn />
                            </td>
                        </tr>
                    )
                }
            )
        }
        return (
            <Card className="text-black " style={{color:"grey"}}>
                <Card.Body>
                    <Card.Title>Utilisateurs</Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Numéro CIN</th>
                            <th>Adresse Mail</th>
                            <th>Role</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            body
                        }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}
