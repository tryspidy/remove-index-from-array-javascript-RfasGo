remove multiple index from array

var valuesArr = ["v1", "v2", "v3", "v4", "v5"];   
var removeValFromIndex = [0, 2, 4]; // ascending

removeValFromIndex.reverse().forEach(function(index) {
  valuesArr.splice(index, 1);
});