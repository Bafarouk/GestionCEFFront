import React ,{Component} from "react"
import {Bar}   from 'react-chartjs-2' ;
import api from "../../api";


class BarGraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            title    :  "Nombre des Commandes par Type du produit",
            labels   :  ["Consommable","Facture BT","Facture MT","Enveloppe Droite","Enveloppe Gauche","facture ADM"],
            label   :  "Nombre Commande",
            data     :  [],
            ptW      : 2,
            bg     :"rgba(52, 152, 219, 0.5)",
            borderW     :2,
            borderC     : "rgb(52, 152, 219)",
            loaded : false
        }
    }
    componentDidMount(){
        api.get("/api/commande/getAllCommande").then((res)=>{
            let c = 0 ;
            let mt = 0 ;
            let bt = 0 ;
            let ed = 0 ;
            let eg = 0 ;
            let adm = 0 ;
            let data = []
            res.data.map(cmd => {
                if(cmd.type_produit === "consommable"){
                    c+=1 ;
                }
                if(cmd.type_produit === "facture BT"){
                    bt+=1 ;
                }
                if(cmd.type_produit === "facture MT"){
                    mt+=1 ;
                }
                if(cmd.type_produit === "facture ADN"){
                    adm+=1 ;
                }
                if(cmd.type_produit === "enveloppe droite"){
                    ed+=1 ;
                }
                if(cmd.type_produit === "enveloppe gauche"){
                    eg+=1 ;
                }
            })
            data.push(c)
            data.push(bt)
            data.push(mt)
            data.push(ed)
            data.push(eg)
            data.push(adm)
            data.push(0)
            this.setState({data : data ,loaded : true});
        })

    }

    render(){
        let barGraph = ""
        if(this.state.loaded){
            barGraph = <Bar
                option={
                    {responsive : true, animation : true}
                }
                data={{
                    labels : this.state.labels,
                    datasets : [{
                        label : this.state.label,
                        backgroundColor : this.state.bg,
                        pointBorderWidth : this.state.ptW,
                        borderWidth : this.state.borderW,
                        borderColor : this.state.borderC,
                        data : this.state.data
                    }]
                }}
            />
        }
        return(
            <div className="card">
                <div className="header">
                    <h4 className="title">{this.state.title}</h4>
                </div>
                <div className="content">
                    <div>
                        {barGraph}
                    </div>
                </div>
            </div>
        );
    }
}

export default BarGraph;