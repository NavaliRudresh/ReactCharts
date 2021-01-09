import './App.css';
import Chart from './components/chart';
import { Component } from 'react';
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
  componentWillMount() {
    this.getChartData();
  }
  render() {
    return (
      <div className="App">
        <div className='chart1'><Chart chartData={this.state.chartData} /></div>

        <div style={styles.relative} className='donut'>
          <Doughnut data={data} options={options} />
          <div id="legend" />
        </div>
        <div style={styles.relative1} className='donut1'>
          <Doughnut data={data1} options={{
            title: {
              display: true,
              text: 'Age Limit', fontSize: 12.5,
            },
            legend: {
              position: 'right'
            }
          }} />
          <div id="legend" />
        </div>
      </div>
    );
  }



  getChartData() {
    this.setState({
      chartData: {

        labels: ['Week1', 'Week2', 'Week3', 'Week4'],
        datasets: [{
          label: 'Resolved',
          data: [5, 6, 8, 7
          ],
          borderColor: ['red'], lineTension: 0, backgroundColor: '#d7b28d', fill: true
        },

        {
          label: 'Active',
          data: [5, 8, 10, 6
          ],
          borderColor: ['orange'], lineTension: 0, backgroundColor: 'rgb(213, 209, 180)',
          fill: true
        },
        {
          label: 'Total',
          data: [10, 12, 18, 12],
          borderColor: ['blue'],
          backgroundColor: 'rgb(201, 218, 249)', fill: true,
          lineTension: 0
        },
        ],
      },
    })
  }
}

const styles = {
  relative: {
    position: 'absolute',
    height: '300px', width: '30%', border: '1px solid black', padding: '5px', margin: '1%'
  },
  relative1:
  {
    position: 'absolute',
    height: '300px', width: '30%', border: '1px solid black', padding: '5px', margin: '1% 1% 1% 60%'
  }
};
const options = {
  title: { display: true, },
  legend: {
    display: true,
    position: "right"
  }
};
const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["male", "Female"],
  datasets: [
    {
      data: [54.5, 45.5],
      backgroundColor: ['#779ee5', '#d87ae1'],
      hoverBackgroundColor: ['#779ee5', '#d87ae1']
    }
  ]
};

const data1 = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["<75", "<50", "<25", "<15", "<5"],
  datasets: [
    {
      data: [42.1, 22.1, 14.7, 10.5, 10.5],
      backgroundColor: ['orange', 'green', 'red', 'yellow', 'blue'],
      hoverBackgroundColor: ['orange', 'green', 'red', 'yellow', 'blue']
    }
  ]
};

export default App;