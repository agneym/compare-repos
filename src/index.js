import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'
import Chart from 'chart.js';
import './index.scss';
import api from './api';

UIkit.use(Icons);

const ctx = document.getElementById("chart");

function getData(packageName) {
  return api.getInfo(packageName);
}

function getInput(event) {
  event.preventDefault();
  const package1 = document.querySelector('#package1').value;
  const package2 = document.querySelector('#package2').value;
  const factor = document.querySelector('#factor').value;
  let firstData = [];
  let secondData = [];
  getData(package1)
    .then(res => {
      firstData = res.items[0];
      return res;
    })
    .then(()=>getData(package2))
    .then(res => {
      console.log(package2, res.items[0]);
      secondData = res.items[0];
      return res;
    })
    .then(() => prepareForGraph(firstData, secondData, package1, package2, factor));
}

function prepareForGraph(data1, data2, name1, name2, factor) {
  console.log(data1, data2);
  drawGraph(factor, name1, name2, data1[factor], data2[factor]);
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

(function(){
  const form = document.querySelector('#input-form');
  form.addEventListener('submit', getInput);
})();