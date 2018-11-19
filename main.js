onst BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", updatePerMonth)

}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
     console.log(data)
}

function updatePerMonth(data) {
    console.log(data[2016][0])
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
    
      
        data: {
            labels: ["total rides"],
            datasets: [{
                label: "Zagster Rides",
                backgroundColor: '#3f3f3f',
                borderColor: '#FC4A1A',
                data: [data[2016][0][9],data[2016][1][10],data[2016][2][11]],
            }]
        },
        options: {}
    });
}