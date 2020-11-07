// from data.js
var tableData = data;

var tbody = d3.select("tbody")
tableData.forEach(function(data_js){
    var row = tbody.append("tr");
    
    Object.entries(data_js).forEach(function([key, value]){
        var cell = row.append("td").text(value);
    });
});

var button = d3.select("#filter-btn");
var button2 = d3.select("clear-btn");


button.on("click", function(){
    
    var tbody = d3.select("tbody");
    var date_time = d3.select("#datetime");
    var date_input = date_time.property("value");
    var city = d3.select("#city");
    var city_input = city.property("value");
    var state = d3.select("#state");
    var state_input = state.property("value");
    var country = d3.select("#country");
    var country_input = country.property("value"); 
    var shape = d3.select("#shape");
    var shape_input = shape.property("value");
    
    var New_data = tableData.filter(data_js => data_js.datetime === date_input);
    
    var tbody = d3.select("tbody")
    tbody.html("");
    
    New_data.forEach(function(data_js){
        var row = tbody.append("tr");
     Object.entries(data_js).forEach(function([key, value]){
         var cell = row.append("td").text(value);
         
         
     })
    })
});
