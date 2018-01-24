import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './uikit.min.css';
import Chart from 'chart.js';
import './index.scss';
import api from './api';

UIkit.use(Icons);

const chartContainer = document.getElementById("chart-container");
const spinner = document.getElementsByClassName('spinner-container')[0];

function getData(packageName) {
  return api.getInfo(packageName);
}

function getInput(event) {
  event.preventDefault();
  chartContainer.classList.add('hidden');
  spinner.classList.remove('hidden');
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
      secondData = res.items[0];
      return res;
    })
    .then(() => prepareForGraph(firstData, secondData, package1, package2, factor));
}

function prepareForGraph(data1, data2, name1, name2, factor) {
  spinner.classList.add('hidden');
  chartContainer.classList.remove('hidden');
  drawGraph(factor, name1, name2, data1[factor], data2[factor]);
}

function drawGraph(factor, label1, label2, value1, value2) {
  const ctx = document.getElementById("chart");
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
  chartContainer.classList.add('hidden');
})();