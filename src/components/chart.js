import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData

        }
    }

    render() {
        return (
            <div className='chart'>
                <Line
                    data={this.state.chartData}
                    width={85}
                    height={20}


                    //   borderColor = {'rgb(81, 133, 236)'}
                    //   borderWidth = {'500px'}
                    options={{
                        
                        title: {
                            display: true,
                            text: 'Total Active and Resolved', fontSize: 25,
                        }, hover: {
                            mode: 'nearest',
                            intersect: true
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 20,
                                    min: 0,
                                    stepSize: 5,
                                    fontSize: 15
                                }
                            }],
                            xAxes: [{ ticks: { fontSize: 15, fontFamily: " sans-serif", fontColor: '#000', fontStyle: '500' } }]
                        },

                        legend: {
                            display: true, position: 'right'
                        },
                    }

                    }
                />
            </div>
        )
    }

}

export default Chart;
