import React,{Component} from "react"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import api from "../../api";

export default class Deletebtn extends Component{
    componentDidMount() {
        console.log("5165"+this.props.user_id)
    }

    delete(){
        console.log("5165 this.props.user_id")

        // api.delete("/api/user/deleteUser?id=").then(res => {
        //     console.log(res.data)
        // NotificationManager.success('Utilisateur Supprimé', 'Supprimer Utilisateur');
        // }).catch( (error) =>{
        //     NotificationManager.error('Erreur lors de la suppresion', 'Supprimer Utilisateur');
        // })
    }
    render() {
        return(

            <div>
                <button   onClick={this.delete}><i className="fa fa-trash"></i></button>
                <NotificationContainer/>
            </div>
        )
    }
}