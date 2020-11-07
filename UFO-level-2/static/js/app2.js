// from data.js
var tdata = data;
var tbody = d3.select("tbody");
function BuildData(data) {
    tbody.html("");
    data.forEach((filter) => {
        var row = tbody.append("tr");
        Object.entries(filter).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
});
}
BuildData(tdata);
var filters = {};
​
function updateFilters() {
  var selectedElement = d3.select(this).select("input");
  console.log(selectedElement);
  var selectedValue = selectedElement.property("value");
  console.log(selectedValue);
  var filterID = selectedElement.attr("id");
  if (selectedValue) {
    filters[filterID] = selectedValue;
  }
  else {
    delete filters[filterID];
  }
  clickData();
}
​
function clickData() {
  var filterData = tdata;
  Object.entries(filters).forEach(([key, value]) => {
    filterData = filterData.filter(row => row[key] === value)
  });
    BuildData(filterData);
    console.log(datetimeFilter);
    console.log(datetimeInput)
};
​
d3.selectAll(".filter").on("change", updateFilters)
​