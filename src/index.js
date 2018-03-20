import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './uikit.min.css';
import Graph from './Graph.js';
import insertIntoTable from './insertIntoTable';
import './index.scss';
import api from './api';

UIkit.use(Icons);

const chartContainer = document.getElementById("chart-container");
const spinner = document.getElementsByClassName('spinner-container')[0];
const graph = new Graph();

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
    .then(() => {
      prepareForGraph(firstData, secondData, package1, package2, factor);
      prepareForTable(firstData, secondData, package1, package2);
    });
}

function prepareForGraph(data1, data2, name1, name2, factor) {
  spinner.classList.add('hidden');
  chartContainer.classList.remove('hidden');
  graph.drawGraph(factor, name1, name2, data1[factor], data2[factor]);
}

function prepareForTable(data1, data2, name1, name2) {
  const package1Heading = document.getElementById('package1-table');
  const package2Heading = document.getElementById('package2-table');
  const table = document.getElementById('content-body');
  insertIntoTable(table, package1Heading, package2Heading, data1, data2, name1, name2);
}

(function(){
  const form = document.querySelector('#input-form');
  form.addEventListener('submit', getInput);
  chartContainer.classList.add('hidden');
})();