import React, { Component } from 'react';
import api from "../../api";
import img from "../../layouts/interventions.PNG";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Changermdp from "./Changermdp"
export default class Profile extends Component {
    constructor(props){
        super( props)
        this.state={
            loaded : false
        }
    }
    function() {

        var readURL = function(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    ('.avatar').attr('src', e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        }


        (".file-upload").on('change', function(){
            readURL(this);
        });
    }
    componentDidMount(){
        api.get("/api/user/findUser?mail="+localStorage.getItem("user")).then((res)=>{
            console.log(res.data[0])
            this.setState({nom :res.data[0].nom , prenom : res.data[0].prenom, mail : res.data[0].mail, cin : res.data[0].cin});
            this.setState({loaded : true});
            this.setState({user : res.data[0]});

        }).catch((error)=>{
            alert("Something went wrong!");
        })
    }
    modifier(){
        this.setState({loaded : false});

        let prenom = document.getElementById("prenom").value
        let nom = document.getElementById("nom").value
        let email = document.getElementById("email").value
        let cin = document.getElementById("cin").value
        if(nom){
            this.state.nom=nom
        }
        if(prenom){
            this.state.prenom = prenom
        }
        if(email){
            this.state.email =email
        }
        if(cin){
            this.state.cin = cin
        }

        this.setState({loaded : true});

        api.post("/api/user/modifier",{
            "_id": localStorage.getItem("id"),
            "prenom":this.state.prenom,
            "nom":this.state.nom,
            "cin":this.state.cin,
            "mail":this.state.mail
        }).then(res => {
            console.log(localStorage.getItem("id"))
            NotificationManager.success('Compte Modifié avec succées', 'Modifier compte');
        }).catch( (error) =>{
            // NotificationManager.error('Vous devez renseigner tous les champs', 'Modifier compte');
        })

    }
    render() {
        let body = ""
        let form = ""
        if(this.state.loaded === true){
            body = <div>
                        <p>   {this.state.nom} {this.state.prenom} </p>
                    </div>
            form = <div className="col-sm-9">

                <div className="form" >
                    <div className="form-group">

                        <div className="col-xs-7">
                            <label htmlFor="first_name"><h4>Nom</h4></label>
                            <input type="text" className="form-control" name="first_name" id="nom"
                                   placeholder={this.state.nom} title="enter your first name if any."/>
                        </div>

                        <div className="col-xs-7">
                            <label htmlFor="last_name"><h4>Prenom</h4></label>
                            <input type="text" className="form-control" name="last_name" id="prenom"
                                   placeholder={this.state.prenom} title="enter your last name if any."/>
                        </div>


                        <div className="col-xs-7">
                            <label htmlFor="last_name"><h4>Cin</h4></label>
                            <input type="text" className="form-control" name="cin" id="cin"
                                   placeholder={this.state.cin} title="enter your last name if any."/>
                        </div>

                        <div className="col-xs-7">
                            <label htmlFor="email"><h4>Adresse Email</h4></label>
                            <input type="email" className="form-control" name="email" id="email"
                                   placeholder={this.state.mail} title="enter your email."/>
                        </div>



                    </div>
                    <div className="form-group">
                        <div className="col-xs-12">
                            <br/>
                            <input type="button" className="btn btn-lg btn-success"  onClick={this.modifier.bind(this) } value="Enregistrer"/>
                            <button className="btn btn-lg" type="reset"  >  Annuler </button>
                            <Changermdp/>
                        </div>
                    </div>
                </div>
                <hr/>

            </div>
        }
        return (
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
                      id="bootstrap-css"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

                <h1 align="center"> Profile </h1>
                            <hr/>
                                <div className="container bootstrap snippet">
                                    <div className="row">
                                        <div className="col-sm-10"><h1>{body}</h1></div>
                                        <div className="col-sm-2"><a href="/users" className="pull-right"><img
                                            title="profile image" className="img-circle img-responsive"
                                            src={img}/></a>
                                        </div>
                                    </div>
                                    <div className="row">
            <div className="col-sm-3">
                <div className="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                         className="avatar img-circle img-thumbnail" alt="avatar"/>
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="text-center center-block file-upload"/>
                </div>
                <hr/>
                <br/>

            </div>
                                        {form}

    </div>
    </div>
                <NotificationContainer/>

    </div>
        )
    }
}
