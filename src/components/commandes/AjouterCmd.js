import React,{Component} from "react"
import {Modal , Row , Col  } from "react-bootstrap"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import api from "../../api";
const inputstyle = { marginTop: "10px"}

export default class AjouterCmd extends Component{
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
    ajouter(){
          api.post("/api/commande/addCommande",{
            "quantite":document.getElementById("qte").value,
            "type_produit":document.getElementById("type").value,
            "user_id":"5cc996232ad8d91d80dccffc",
            "etat":document.getElementById("etat").value
          }).then(res => {
            NotificationManager.success('Commande ajoutée', 'Ajout Commande');
            this.onClose()
          }).catch( (error) =>{
            NotificationManager.error('Vous devez renseigner tous les champs', 'Ajout Commande');
          })
    }
    render() {
        return(

            <div>
                <button className="btn btn-black" onClick={this.handleShow} >Ajouter Commande</button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter une nouvelle Commande
                    </Modal.Header>
                    <Modal.Body>


                        <select className="form-control" id="type" style={inputstyle}>
                            <option value="*">Type Produit</option>
                            <option value="consommable">  Consommable </option>
                            <option value="facture BT"> Facture BT	 </option>
                            <option value="facture MT"> Facture MT	 </option>
                            <option value="enveloppe droite"> Enveloppe Droite	 </option>
                            <option value="enveloppe gauche"> Enveloppe Gauche	 </option>
                            <option value="facture ADN"> Facture ADM	 </option>

                        </select>
                        <input type="number" id="qte" placeholder="Quantité" className="form-control" style={inputstyle} required/>
                        <select className="form-control" id="etat" style={inputstyle}>
                            <option value="*">Etat</option>
                            <option value="en cours">  En cours </option>
                            <option value="finie"> Fini	 </option>
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