const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Blog', 'Percentage'],
  ['Java', 8],
  ['Web', 2],
  ['Python', 4],
  ['OOP', 2],
  ['Clean code', 8]
	]);

  // Optional; add a title and set the width and height of the chart
  var options = {legend: 'none', pieSliceText: 'label', 'width':550, 'height':400, 'backgroundColor':{fill:'transparent'},  is3D: true};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
  google.visualization.events.addListener(chart, 'select', selectHandler);
}

function selectHandler(e) {
  alert('A table row was selected');
}