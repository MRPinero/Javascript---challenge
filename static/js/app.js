//window.d3 = d3;
//const d3 = require('d3');
//d3.selectAll("p").style("color".d3.color("red").darker());

var tableData = data;

function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    tableData.forEach(function(data) {
        console.log(element);
    })
};
//from data.js
//var tableData = data;
// Get a reference to the table body

var tbody = d3.select("tbody");

// Console.log the ufo-sightning from data.js
console.log(data);

// Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
//import * as d3 from d3;


data.forEach(function(ufo_sightning) {
    console.log(ufo_sightning);
    var row = tbody.append("tr");
    Object.entries(ufo_sightning).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the ufo-sightning object
        var cell = row.append("td");
        cell.text(value);
    });
});

displayData(tableData);

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// You can also define the click handler inline
button.on("click", function() {
    //prevent refresh
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    var new_table = tableData.filter(sightning => sightning.datetime === dateInputText.property("value"))
    console.log(d3.event.target);
    displayData(new_table);
});

//Event listener to handle change and click
dateInputText.on("change", clickSelect);

//return table;