import React,{Component} from "react"
import {Modal , Row , Col  } from "react-bootstrap"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import api from "../../api";

const inputstyle = { marginTop: "10px"}

export default class AjouterLiv extends Component{
    constructor(props){
        super( props)
        this.state={
            show : false
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
    modifierMDP(){
        if(document.getElementById("password").value.length<8){
            NotificationManager.error('La longeur du mot de passe doit étre supérieur à 8 ', 'Modifier Mot de Passe');
        }else if( document.getElementById("password").value !== document.getElementById("cpassword").value){
            NotificationManager.error('Les mots de passe saisie ne sont pas identique ', 'Modifier Mot de Passe');
        }else {

            api.post("/api/user/modifier",{
                "_id": localStorage.getItem("id"),
                "password":document.getElementById("password").value,
            }).then(res => {
                NotificationManager.success('Votre Mot de Passe à été Modifier', 'Modifier Mot de Passe');
                this.onClose()
            }).catch( (error) =>{
                NotificationManager.error('Vous devez renseigner tous les champs', 'Modifier Mot de Passe');
            })
        }
    }
    render() {
        return(

            <span>
                <button className="btn btn-lg" type="reset"  onClick={this.handleShow} > Changer mot de passe  </button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter un bon de livraison
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-group">

                            <div className="col-xs-7">
                                <label htmlFor="password"><h4>Nouveau mot de passe</h4></label>
                                <input type="password" className="form-control" name="password" id="password"
                                       placeholder={this.state.nom} title="enter your first name if any."/>
                            </div>

                            <div className="col-xs-7">
                                <label htmlFor="cpassword"><h4>Confirmer mot de passe</h4></label>
                                <input type="password"   className="form-control" name="cpassword" id="cpassword"
                                       placeholder={this.state.prenom} title="enter your last name if any."/>
                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Row>
                            <Col md={5}>
                                <button className="btn btn-success" onClick={() => {
                                    this.modifierMDP()
                                }} fill>Modifier </button>
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
            </span>
        )

    }
}