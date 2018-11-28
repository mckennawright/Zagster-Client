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
    $("h#2count").html(data.count)
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

        function updateRideCount(data) {
            $("h2#count").html(data.count);
            $("h2#count").css('visibility', 'visible')
}

function displayChart() {
    var ctx = document.getElementById("horizontalBar").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: 'Number of Rides Per Month',
            data: chartData
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

