import React,{Component} from "react"
import {Modal , Row , Col  } from "react-bootstrap"
import {NotificationContainer, NotificationManager} from "react-notifications";
import api from "../../api";
const inputstyle = { marginTop: "10px"}

export default class AjouterUser extends Component{
    constructor(props){
        super( props)
        this.state={
            show : false,
        }
        this.handleShow = this.handleShow.bind(this)
    }
    handleShow() {
        this.setState({
            show     : true
        });
    }

    onClose = () => {
        this.setState({show: false});
    }

    ajouter(){
        api.post("/api/user/add",{
            "nom":document.getElementById("nom").value,
            "prenom":document.getElementById("prenom").value,
            "cin":document.getElementById("cin").value,
            "mail":document.getElementById("mail").value,
            "password":document.getElementById("cin").value,
            "role":document.getElementById("role").value
        }).then(res => {
            console.log(res.data)
            NotificationManager.success('Utilisateur ajouté', 'Ajout Utilisateur');
            this.onClose()
        }).catch( (error) =>{
            NotificationManager.error('Vous devez renseigner tous les champs', 'Ajout Utilisateur');
        })
    }

    render() {
        return(

            <div>
                <button className="btn btn-black" onClick={this.handleShow} >Ajouter Utilisateur</button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter un nouveau utilisateur
                    </Modal.Header>
                    <Modal.Body>

                        <input id="nom" placeholder="Nom" className="form-control" style={inputstyle} required/>
                        <input id="prenom" placeholder="Prénom" className="form-control" style={inputstyle} required/>
                        <input type="number" id="cin" placeholder="Numéro CIN" className="form-control" style={inputstyle} required/>
                        <input type="email" id="mail" placeholder="Adresse Mail" className="form-control" style={inputstyle} required/>
                        <select className="form-control" id="role" style={inputstyle}>
                            <option value="*">Rôle </option>
                            <option value="administrateur">  Administrateur </option>
                            <option value="utilisateur"> Utilisateur </option>
                        </select>

                    </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col md={5}>
                                <button className="btn btn-success" onClick={() => {
                                    this.ajouter()
                                }} fill>Ajouter</button>
                            </Col>
                            <Col md={3}>
                                <button className="btn btn-danger" onClick={() => {
                                    this.onClose()
                                }} fill>Annuler</button>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
                <NotificationContainer/>

            </div>
        )

    }
}