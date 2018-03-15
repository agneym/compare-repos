import Chart from 'chart.js';

class Graph {
  constructor() {}
  drawGraph(factor, label1, label2, value1, value2) {
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
}

export default Graph;