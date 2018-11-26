const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView(){
   $.getJSON(BASE_URL + "/rides/count", updateRideCount)
   $.getJSON(BASE_URL + "/rides/count/per_month", printData)
}

function printData(data) {
    [{"January":20},
    {"Febuary":31},
    {"March":79},
    {"April":88},
    {"May":156},
    {"June":301},
    {"July":405},
    {"August":187},
    {"September":401},
    {"October":353},
    {"November":113},
    {"December":79}]
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}