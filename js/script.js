// DARK MODE
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("normal");
});


//CHART PART
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Blog", "Percentage"],
    ["Java", 8],
    ["Web", 2],
    ["Python", 4],
    ["OOP", 2],
    ["Clean code", 8],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    legend: "none",
    pieSliceText: "label",
    width: 550,
    height: 400,
    backgroundColor: { fill: "transparent" },
    is3D: true,
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
  google.visualization.events.addListener(chart, "select", selectHandler);
}

function selectHandler(e) {
  alert("A table row was selected");
}

// SOCIAL MEDIA PART
var social = document.getElementById("link-list");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    social.style.visibility = "visible";
    social.style.opacity = "1";
  } else {
    social.style.visibility = "hidden";
    social.style.opacity = "0";
  }
}

// TOP BUTTON
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// VALIDATE FORM
function validateForm() {
  var message = document.forms["contact-form"]["message"].value;
  if (message.length < 100) {
    alert("Please write a message at least 100 character. If your message is shorten than 100 characters, maybe you want to write your ideas about anything :)\nYou should write "+ (100-message.length)+" characters...");
    return false;
  }
}