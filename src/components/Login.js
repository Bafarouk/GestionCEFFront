import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import api from "../api";
import {NotificationContainer, NotificationManager} from "react-notifications";
import 'react-notifications/lib/notifications.css';

const inputstyle = { marginTop: "150px" , marginLeft : "350px"}

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            username:"",
			password:""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
       if (localStorage.getItem("jwt")){
           localStorage.removeItem("jwt")
       }

    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }
    handleSubmit() {
        localStorage.setItem("user" , this.state.username )

        const JsonObject = JSON.parse(JSON.stringify({
            username:this.state.username,
			password:this.state.password
        }));
        api.post('/api/user/signin',JsonObject)
            .then((res)=>{
                localStorage.setItem("jwt","lzqvbsdkvhbdsvlsqugkydsgflkdf")
                window.location = "/home" ;
            }).catch((error)=>{
            NotificationManager.error('Vérifier votre adresse ou mot de passe', 'Authentification');
        });
    }
  render() {
    return (
            <Card className="col-md-5"  style={inputstyle}>
                <Card.Body>
                    <Card.Title>Authentification</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control type="text" placeholder="Adresse Email" required onChange={this.handleUsernameChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" onChange={this.handlePasswordChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Button variant="dark" onClick={this.handleSubmit} className="border border-white">
                                S'authentifier
                            </Button>
                            {/*<Button variant="white" className="border border-dark">*/}
                            {/*    Register*/}
                            {/*</Button>*/}
                        </Form.Group>
                    </Form>
                </Card.Body>
                <NotificationContainer/>

            </Card>
    )
  }
}
