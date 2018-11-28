const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

    $.when ($.getJSON(BASE_URL + "/rides/count/per_month" , prepareCountsPerMonth),
    ).then
    (displayChart);

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)

    function prepareCountsPerMonth(data) {
        chartData.push(data['2017'][0]['1']);
        chartData.push(data['2017'][1]['2']);
        chartData.push(data['2017'][2]['3']);
        chartData.push(data['2017'][3]['4']);
        chartData.push(data['2017'][4]['5']);
        chartData.push(data['2017'][5]['6']);
        chartData.push(data['2017'][6]['7']);
        chartData.push(data['2017'][7]['8']);
        chartData.push(data['2017'][8]['9']);
        chartData.push(data['2017'][9]['10']);
        chartData.push(data['2017'][10]['11']);
        chartData.push(data['2017'][11]['12']);
       
        console.log(data['2017'][0]['1']);
        console.log(chartData);
}