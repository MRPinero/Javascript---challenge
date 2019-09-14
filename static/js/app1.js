// Get references to the tbody element, input field and button
let $tbody = document.querySelector("tbody");
let $dateInput = document.querySelector("#date");
let $cityInput = document.querySelector("#city");
let $stateInput = document.querySelector("#state");
let $countryInput = document.querySelector("#country");
let $shapeInput = document.querySelector("#shape");
let $searchButton = document.querySelector("#search");


// Add event listener to the search button, call handleSearchClick
$searchButton.addEventListener("click", handleSearchClick);

// Set ufoData to data
let ufoData = dataSet;

// renderTable renders the ufoData to the tbody
function renderTable() {
    $tbody.innerHTML = "";
    for (let i = 0; i < ufoData.length; i++) {
        // Get current ufo info object and its fields
        let info = ufoData[i];
        let fields = Object.keys(info);
        // Create a new row in the tbody
        let $row = $tbody.insertRow(i);
        for (let j = 0; j < fields.length; j++) {
            // For every field in info object, create new cell and set its inner
            // text to be the current value at the current info field
            let field = fields[j];
            let $cell = $row.insertCell(j);
            $cell.innerText = info[field];
        }
    }
}

// // From data.js
// // Fetch data from your server and turn it into an array
// $.ajax({
//     type: "GET",
//     url: "data.csv",
//     success: CSVToHTMLTable
// });

// //Parse data
// var data = Papa.parse(data).data;

// // Select tbody 
// var tbody = d3.select("tbody");

// //Console.log the sightnings data from data.js
// console.log(UFO_sightnings);

// // Loop through the "data" to add to the table in html
// data.forEach(function(UFO_sighting) {
//     console.log(UFO_sightnings);
// });

// // Using Object.entries to get key, value data inside of the table
// //function displayData(data) {
// // tbody.text("")
// data.forEach(function(UFO_sighting) {
//             console.log(UFO_sighting);
//             var row = tbody.append("tr");
//             Object.entries(UFO_sighting).forEach(function([key, value]) {
//                 console.log(key, value)
//                 var cell = row.append("td");
//                 cell.text(value);
//             });;

//             displayData(tableData)

//             // //select the web user's input and the filter button
//             // var dateInputText = d3.select("#datetime")
//             // var button = d3.select("filter-btn")

//             // // filter data with date that the user inputs
//             // function clickSelect() {
//             //     //don't refresh the page!
//             //     d3.event.preventDefault();
//             //     //print the value that was input
//             //     console.log(dateInputText.property("value"));
//             //     //create a new table showing only the filterd data
//             //     var new_table = tableData.filter(sighting => sighting.datetime === dateInputText.property("value"))
//             //         //display the new table
//             //     displayData(new_table);
//             // }

//             // // event listener to handle change and click
//             // dateInputText.on("change", clickSelect)