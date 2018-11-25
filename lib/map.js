function initMap() {
  var location = {lat: -23.598211, lng: -46.676644}
  var map =  new google.maps.Map(document.getElementById("map"),{zoom: 4, center: location});
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
