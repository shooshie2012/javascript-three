// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
var tbody = d3.select("tbody");
function buildTable(dataArray){
    tbody.html("")
    var table = d3.select("#ufo-table");
      dataArray.forEach((datarow) => {
        // console.log(datarow)
        var trow = tbody.append('tr');
        Object.values(datarow).forEach((val) => {
            var cell = trow.append("td");
            cell.text(val);
            // console.log(val)
        }
        );       
    }); 
};
var filter_btn = d3.selectAll('#filter-btn');
function handleClick() {
    console.log("A button was clicked!");
    d3.event.preventDefault();
    var input_date = d3.select('#datetime').property("value");
    var input_city = d3.select('#city').property("value");
    var input_state = d3.select('#state').property("value");
    var input_country = d3.select('#country').property("value");
    var input_shape = d3.select('#shape').property("value");
    console.log(input_city);
    console.log(input_date);
    console.log(input_state);
    console.log(input_country);
    console.log(input_shape)
    let filtered_data = tableData;
    if (input_date){
        filtered_data = filtered_data.filter(row => row.datetime === input_date);
        console.log(filtered_data)
    };
    if (input_city){
        filtered_data = filtered_data.filter(row => row.city === input_city);
        console.log(filtered_data)
    };
    if (input_state){
        filtered_data = filtered_data.filter(row => row.state === input_state);
        console.log(filtered_data)
    };
    if (input_country){
        filtered_data = filtered_data.filter(row => row.country === input_country);
        console.log(filtered_data)
    }; 
    
    if (input_shape){
        filtered_data = filtered_data.filter(row => row.shape === input_shape);
        console.log(filtered_data)
    };
    buildTable(filtered_data)
  
    // We can use d3 to see the object that dispatched the 
    // an event always has a target which is what was clicked 
    console.log(d3.event.target);
  }
  
  // We can use the `on` function in d3 to attach an event to the handler function
  filter_btn.on("click", handleClick);
 
// executing the function
buildTable(tableData)
