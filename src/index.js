import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'
import Chart from 'chart.js';
import './index.scss';
import './api';



UIkit.use(Icons);

const ctx = document.getElementById("chart");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19],
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