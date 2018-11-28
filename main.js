const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView)

function updateView(){
   $.getJSON(BASE_URL + "/rides/count", updateRideCount)
   $.getJSON(BASE_URL + "/rides/count/per_month", printData)
}


}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}