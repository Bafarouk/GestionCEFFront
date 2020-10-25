import React,{Component} from "react"
import {Modal , Row , Col  } from "react-bootstrap"
import {NotificationContainer, NotificationManager} from "react-notifications";
import api from "../../api";
const inputstyle = { marginTop: "10px"}

export default class AjouterInt extends Component{
    constructor(props){
        super( props)
        this.state={
            show : false,
            loaded : false

        }
        this.handleShow = this.handleShow.bind(this)
    }
    componentWillMount() {
        api.get("/api/machine/getAllMachine").then((res)=>{
            this.setState({machines:res.data , loaded : true});
        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }

    handleShow() {this.setState({show  : true }); }
    onClose = () => {this.setState({show: false}); }

    ajouter(){
        let num_intervention = document.getElementById("num_intervention").value
        let nom_client = document.getElementById("nom_client").value
        let nature_intervention = document.getElementById("nature_intervention").value
        let cadre_intervention = document.getElementById("cadre_intervention").value
        let msg_erreur = document.getElementById("msg_erreur").value
        let prestation = document.getElementById("prestation").value
        let statut_intervention = document.getElementById("statut_intervention").value
        let intervenant = document.getElementById("intervenant").value
        let machine_id = document.getElementById("machine_id").value

        if ( num_intervention || nom_client|| (nature_intervention === "*")|| (cadre_intervention === "*")|| msg_erreur|| prestation|| statut_intervention|| intervenant || (machine_id ==="*") ){
            NotificationManager.error('Vous devez renseigner tous les champs', 'Ajout Intervention');
        }else {
            api.post("/api/intervention/addIntervention", {
                "num_intervention"  :document.getElementById("num_intervention").value,
                "nom_client":document.getElementById("nom_client").value,
                "nature_intervention":document.getElementById("nature_intervention").value,
                "cadre_intervention":document.getElementById("cadre_intervention").value,
                "msg_erreur":document.getElementById("msg_erreur").value,
                "prestation":document.getElementById("prestation").value,
                "statut_intervention":document.getElementById("statut_intervention").value,
                "intervenant" :document.getElementById("intervenant").value,
                "user_id" : localStorage.getItem("id"),
                "machine_id" : document.getElementById("machine_id").value
            }).then( res => {
                NotificationManager.success('Intervention ajoutée', 'Ajout Intervention');
                this.onClose()
            })
        }



    }
    render() {
        let list = ""
        if(this.state.loaded){
            list =       <select className="form-control" id="machine_id" style={inputstyle}>
                <option value="*">Machine</option>
                {
                    this.state.machines.map((mch , key ) => {
                        return(
                            <option value={mch._id}>  {mch.num_machine} </option>
                        );
                    })
                }
            </select>
        }
        return(

            <div>
                <button className="btn btn-black" onClick={this.handleShow} >Ajouter Intervention</button>
                <Modal show={this.state.show}>
                    <Modal.Header>
                        Ajouter une Intervention
                    </Modal.Header>
                    <Modal.Body>
                        <input type="number" id="num_intervention" placeholder="Numéro intervention" className="form-control" style={inputstyle} required/>
                        <input type="text" id="nom_client" placeholder="Nom client" className="form-control" style={inputstyle} required/>

                        <select className="form-control" id="cadre_intervention" style={inputstyle}>
                            <option value="*">Cadre intervention</option>
                            <option value="Contrat de maintenance">  Contrat de maintenance </option>
                            <option value="Marché / BC"> Marché / BC	 </option>
                        </select>

                        <input type="text" id="msg_erreur" placeholder="Message d'erreur" className="form-control" style={inputstyle} required/>
                        <input type="text" id="prestation" placeholder="Prestation" className="form-control" style={inputstyle} required/>

                        <select className="form-control" id="statut_intervention" style={inputstyle}>
                            <option value="*">Statut intervention</option>
                            <option value="Cloturée">  Cloturée </option>
                            <option value="Non cloturée"> Non cloturée</option>
                        </select>

                        <input type="text" id="intervenant" placeholder="Intervenant" className="form-control" style={inputstyle} required/>

                        <select className="form-control" id="nature_intervention" style={inputstyle}>
                            <option value="*">Nature intervention</option>
                            <option value="Curative">  Curative </option>
                            <option value="Préventive"> Préventive	 </option>
                            <option value="Installation et Configuration"> Installation et Configuration </option>
                        </select>

                            {list}
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