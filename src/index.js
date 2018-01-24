import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'
import Chart from 'chart.js';
import './index.scss';
import api from './api';

UIkit.use(Icons);

const ctx = document.getElementById("chart");

function getData(packageName) {
  return api.mockEndPoint(packageName)
}

let first = [];
let second = [];

getData('facebook/react')
  .then(res=>{
    first = res.items[0];
    return res;
  })
  .then(getData('react/react-redux'))
  .then(res=>{
    second = res.items[0];
    return res;
  })
  .then(()=>prepareForGraph(first, second));

function prepareForGraph(firstPackage, secondPackage) {
  const evaluatingFactor = 'stargazers_count';
  drawGraph(evaluatingFactor, 'facebook/react', 'react/react-redux', firstPackage[evaluatingFactor], secondPackage[evaluatingFactor]);
}

function drawGraph(factor, label1, label2, value1, value2) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [label1, label2],
      datasets: [{
        label: `# of ${factor}`,
        data: [value1, value2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}