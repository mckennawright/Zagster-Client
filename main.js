const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView(){
   $.getJSON(BASE_URL + "/rides/count", updateRideCount)
   $.getJSON(BASE_URL + "/rides/count/per_month", printData)
}

function printData(data) {
    [{"Jan":20},{"Feb":31},{"Mar":79},{"Apr":88},{"May":156},{"Jun":301},{"July":405},{"Aug":187},{"Sept":401},{"Oct":353},{"Nov":113},{"Dec":79}]
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}