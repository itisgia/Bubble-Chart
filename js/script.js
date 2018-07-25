google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    console.log('has loaded');

    var data = google.visualization.arrayToDataTable([

            ["Student", "Age", "Height", "Pet", "CodeLang"],
            ["A", 22, 168,  "Dog", 1],
            ["B", 23, 170,  "Dog", 2],
            ["C", 21, 188,  "Pidgeon" ,3],
            ["D", 25, 171,  "Meerkat", 2],
            ["E", 20, 154,  "Horse", 1],
            ["F", 21, 158,  "Lion", 1],
            ["G", 26, 166,  "Fox", 2],
            ["H", 30, 198,  "Rabbit", 1]
      ]);


  var options = {
    title: "Datas From Survey",
    hAxis: {
      title: "Age Of Students"
    },
    vAxis: {
      title: "Height Of Students"
    },
    bubble: {
      textStyle: {
        fontSize:12
      }
    }
}
const chart = new google.visualization.BubbleChart(document.getElementById('chartContainer'));
chart.draw(data, options);
}
