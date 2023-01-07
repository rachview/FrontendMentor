import '../scss/main.scss';
import data from './data.json' assert { type: 'json' };

//Testing
//console.log(days);
//days.forEach((x) => console.log(x.day));
//days.forEach((x) => console.log(x.amount));

//Finding the max amount and changing it from orange to teal
function argMax(arr) {
  return arr
    .map((element, index) => [element, index])
    .reduce((teal, orange) => (orange[0] > teal[0] ? orange : teal))[1];
}

//Dates and Amounts
//Populating with JSON data
const dates = data.map((data) => data.day);
const amounts = data.map((data) => data.amount);
//console.log(dates);
//console.log(amounts);

//Set colors for chart
//An orange default
const color = amounts.map((x) => 'hsl(10, 79%, 65%)');

//background of hover
const bgColor = 'hsl(25, 47%, 15%)';

//Changing the max color
color[argMax(amounts)] = 'hsl(186, 34%, 60%)';

//Chart.js setup
//Change default font (this must be before the new chart)
Chart.defaults.font.family = `'DM Sans', sans-serif`;

//Start chart js
const expensesChart = new Chart('expensesChart', {
  type: 'bar',
  data: {
    labels: dates, //setting dates from data.json
    datasets: [
      {
        //Setting the look of the bars, using color variable (defaults to orange)
        //Border radius to curve edges, borderSkipped allows all sides of the bar to curve.
        //Data used to populate the chart: amounts from data.json
        backgroundColor: color,
        borderRadius: 2,
        borderColor: color,
        borderSkipped: false,
        data: amounts,
      },
    ],
  },
  options: {
    //These options change the layout of the chart
    //Turn off legend, turn off the grid and the border of the x and y axes
    //On y axis turn off the information/ticks on the axis
    //On hover change cursor
    //Tooltip change background color
    //Responsive set to true
    responsive: true,
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? 'pointer'
        : 'default';
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: bgColor,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: { display: false },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});
