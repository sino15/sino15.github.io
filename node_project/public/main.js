// console.log('JS running on the FE!')



//   $.ajax({
//     url: '/geo',
//     type: 'GET',
//     success: function (response) {
//       console.log(response)
//     }
//   })


 navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position)

    var lat = position.coords.latitude
    var lng = position.coords.longitude

    fetchGeoWeather()

    console.log(lat, lng)
  })


  function fetchGeoWeather(lat, lng) {
    $.ajax({
      url: '/coords/lat/' + lat + '/lng/' + lng,
      type: 'GET',
      success: function(response)  {
        console.log(response)
      },
    })
  }


