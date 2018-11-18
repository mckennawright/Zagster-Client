const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
  $.getJSON(BASE_URL + "/rides/count/per_month")
  var ctx= document.getElementById ('myChart').getContext('2d');

  var chart = new Chart(ctx, {
    type: line 

    data: {
      labels: ("total rides")
      datasets: [{
        labels: "Zagster Rides"
        backgroundColor: '#3f3f3f'
        data: }],
    }
  })
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
  console.log(data)

  function updatePerMonth(data)
  console.log(data)
}