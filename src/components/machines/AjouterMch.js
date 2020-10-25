import React,{Component} from "react"
import {Modal , Row , Col  } from "react-bootstrap"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import api from "../../api";
const inputstyle = { marginTop: "10px"}

export default class AjouterMch extends Component{
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

        api.post("/api/machine/addMachine",{
            "num_machine":document.getElementById("num_machine").value,
            "type_machine":document.getElementById("type_machine").value
        }).then(res => {
            console.log(res.data)
            NotificationManager.success('Machine ajoutée', 'Ajout Machine');
            this.onClose()
        }).catch( (error) =>{
            NotificationManager.error('Vous devez renseigner tous les champs', 'Ajout Machine');
        })
    }
    render() {
        return(

            <div>
                <button className="btn btn-black" onClick={this.handleShow} >Ajouter Machine</button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter une nouvelle Machine
                    </Modal.Header>
                    <Modal.Body>
                        <input type="number" id="num_machine" placeholder="Numéro machine" className="form-control" style={inputstyle} required/>
                        <select className="form-control" id="type_machine" style={inputstyle}>
                            <option value="*">Type machine </option>
                            <option value="impression">  Impression </option>
                            <option value="emballage"> Emballage </option>
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