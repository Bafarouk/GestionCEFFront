// // import React ,{Component} from "react"
// // import PieChart from 'react-minimal-pie-chart';
// // export default class PieGraphe extends Component{
// //
// //     render() {
// //         return(
// //             <div className="card">
// //                 <div className="header">
// //                     <h4 className="title">"this.state.title}"</h4>
// //                 </div>
// //                 <div className="content " width="50px" height="5px">
// //                     <PieChart
// //                         data={[
// //                             { title: 'One', value: 10, color: '#E38627' },
// //                             { title: 'Two', value: 15, color: '#C13C37' },
// //                             { title: 'Three', value: 20, color: '#6A2135' },
// //                         ]}
// //                     />
// //                 </div>
// //             </div>
// //         )
// //     }
// //
// // }
//
// import React, {Component} from 'react';
// import LineChart from "react-chartjs"
// class PieChart extends Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         var chartOptions: {
//
//
//             // Boolean - If we should show the scale at all
//
//
//             showScale: true,
//             // Boolean - Whether to show a dot for each point
//             pointDot: true,
//             showLines: false,
//             title: {
//                 display: true,
//                 text: 'Chart.js Line Chart'
//             },
//             legend: {
//                 display: true,
//                 labels: {
//                     boxWidth: 50,
//                     fontSize: 10,
//                     fontColor: '#bbb',
//                     padding: 5,
//
//                 }
//             }
//         }
//
//         var chartData= {
//             labels: ['1', '2', '3', '4'],
//             datasets: [
//                 {
//                     label: 'Current lag',
//                     fill: false,
//                     lineTension: 0.1,
//                     backgroundColor: "rgba(75,192,192,0.4)",
//                     borderColor: "rgba(75,192,192,1)",
//                     borderCapStyle: 'butt',
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: 'miter',
//                     data: [50, 35, 60, 67]
//                 }
//             ]
//         }
//
//
//         return (
//             <div className="">
//                 <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
//             </div>
//         );
//     }
// }
// export default PieChart;