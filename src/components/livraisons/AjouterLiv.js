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
            show : false,
            loaded : false
        }
        this.handleShow = this.handleShow.bind(this)
    }
    componentDidMount(){
        api.get("/api/commande/getAllCommande").then((res)=>{
            this.setState({commandes:res.data , loaded : true});
        }).catch((error)=>{
            alert("Something went wrong!");
        })
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
        let commande_id = document.getElementById("commande_id").value
        let code_livraison = document.getElementById("code_livraison").value
        let client = document.getElementById("client").value
        let date = document.getElementById("date").value
        let quantite = document.getElementById("quantite").value
        let type_produit = ""
        this.state.commandes.map((cmd , key ) => {
            if(cmd._id === commande_id){
                type_produit = cmd.quantite
                document.getElementById("type_produit").value=cmd.type_produit
            }
        })
        console.log( document.getElementById("type_produit").value)

        if ( code_livraison ==="" || client ==="" || date ==="" || quantite ===""  || (commande_id ==="*") ){
            NotificationManager.error('Vous devez renseigner tous les champs', 'Ajout Intervention');
        }else {
            api.post("/api/livraison/addLivraison",{
                "quantite":document.getElementById("quantite").value,
                "type_produit":document.getElementById("type_produit").value,
                 "commande_id" : document.getElementById("commande_id").value,
                     "code_livraison" : document.getElementById("code_livraison").value,
                 "client" : document.getElementById("client").value,
                 "date" : document.getElementById("date").value
            }).then(res => {
                NotificationManager.success('Livraison ajoutée', 'Ajout Livraison');
                this.onClose()
            })
          }
        }
    render() {
        let list = ""
        if(this.state.loaded){
            list =       <select className="form-control" id="commande_id" style={inputstyle}>
                            <option value="*">Commande</option>
                            {
                                this.state.commandes.map((cmd , key ) => {
                                    return(
                                        <option value={cmd._id}>  {cmd._id} </option>
                                    );
                                })
                            }
                        </select>
        }
        return(

            <div>
                <button className="btn btn-black" onClick={this.handleShow} >Ajouter un bon de Livraison</button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter un bon de livraison
                    </Modal.Header>
                    <Modal.Body>
                        <input type="number" id="code_livraison" placeholder="Code livraison" className="form-control" style={inputstyle} required/>
                        <input type="number" id="quantite" placeholder="Quantite livrée" className="form-control" style={inputstyle} required/>
                        {list}
                        <input type="text" id="client" placeholder="Client" className="form-control" style={inputstyle} required/>
                        <input type="date" id="date"   className="form-control" style={inputstyle} required/>
                        <input type="text" id="type_produit" placeholder="type_produit" className="form-control" hidden style={inputstyle} required/>
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