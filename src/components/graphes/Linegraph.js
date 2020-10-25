import React ,{Component} from "react"
import {Line}   from 'react-chartjs-2' ;


export default class Linegraph extends Component {
    constructor(props){
        super(props);
        this.state = {
            title    : "Nombre des interventions par mois",
            labels   : ["Janvier","février","mars","avril","mai","juin","juillet" ,"août","septembre","octobre","novembre" ,"décembre"],
            data     : [1,5,2,2,6,2,1,4,0,6,3,1],
            bg       : "rgba(0, 0, 0, 0)",
            ptBg     : "rgba(7, 188, 12, 0.7)",
            borderW  :  2,
            borderC  :  "rgb(7, 188, 12)",
        }
    }


    render(){
        return(
            <div className="card">
                <div className="header">
                    <h4 className="title">{this.state.title}</h4>
                </div>
                <div className="content">
                    <div>
                        <Line
                            option={
                                {responsive : true, animation : true}
                            }
                            data={{
                                labels : this.state.labels,
                                datasets : [{
                                    label : this.state.title,
                                    backgroundColor : this.state.bg,
                                    pointBackgroundColor	: this.state.ptBg,
                                    pointBorderWidth : 1,
                                    borderWidth : this.state.borderW,
                                    borderColor : this.state.borderC,
                                    data : this.state.data
                                }]
                            }}
                            height={70}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
