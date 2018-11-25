const BASE_URL = "https://zagster-service.herokuapp.com"
var chartData = []
var rideData = []
$(updateView) 


function updateView() {
    $.getJSON(BASE_URL + "/rides/count", updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/per_month", updatePerMonth)
}
function getData(data){
 rideData = data;
console.log(rideData);

 for (var i = 0; i <=11; ++i){
    chartData.push(rideData[2017] [i] [i+1]);

    var ctx = document.getElementById("doughnut");
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Rides per Month',
                data: chartData,
                backgroundColor: [
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
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
    </script> 