import React from 'react';


import {Doughnut} from 'react-chartjs-2';
import {DoughnutData} from '../api/DoughnutData';

export default class DoughnutWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numData: []
    };
  }
  componentDidMount() {
    this.numsTracker = Tracker.autorun(() => {
      const nums  = DoughnutData.find().fetch();
      const numData = [];
      nums.forEach( function (arrayItem, i) {
          numData[i] = arrayItem.data;
      });
      this.setState({ numData });
    });
  }
  componentWillUnmount() {
    this.numsTracker.stop();
  }

  getDoughnutData() {
    const ddata = this.state.numData;
    const dougnuts = {
      labels: [
        'Red',
        'Green',
        'Yellow'
      ],
      datasets: [{
        data: ddata,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };
    return dougnuts;
  }

  render() {
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={this.getDoughnutData()} />
      </div>
    );
  }
};

