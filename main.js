const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView) 


function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", updatePerMonth)
}
function getData(data) {
    rideData = data;
    console.log(rideData);
} 
for ( var i = [0]; i <= [11]; ++i){
chartData.push(rideData[2017] [i] [i+1]);
}