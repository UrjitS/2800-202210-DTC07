/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 49.276389, lng:  -123.122368};
  const center1 = { lat: 49.2738637, lng:  -123.0986917};

  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru, //      center: curLatLng
    scrollwheel: false,

  });




  // The marker, positioned at Uluru
  const marker1 = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Bridge the gap Head Office'

  });

  var infoWindow = new google.maps.InfoWindow({
    content:
        "<p style='font-weight: bold ;'>Bridge the gap Head Office</p>"
        + "<p>Thanks for using our demo App</p>"
        + "<p>Address: 11 xxx St,Vancouver</p>"
        + "<p>Contact: 778-xxx-xxxx</p>"
        + "<a href='https://www.bcit.ca/'>Homepage</a>"
  });


 // Add a click listener to open the info window when the marker is clicked.
 marker1.addListener('click', function() {
  infoWindow.open(map, marker1);
  
});











const marker2 = new google.maps.Marker({
  position: center1,
  map: map,
  title: 'Center A'

});

var infoWindow2 = new google.maps.InfoWindow({
  content:
      "<p style='font-weight: bold ;'>Changwhi Center</p>"
      + "<p>One of the biggest place where you can mditate</p>"
      + "<p>Address: 12 xxx St,Vancouver</p>"
      + "<p>Contact: 778-xxx-xxxx</p>"
      + "<a href='https://www.bcit.ca/'>Homepage</a>"
});


// Add a click listener to open the info window when the marker is clicked.
marker2.addListener('click', function() {
infoWindow2.open(map, marker2);
});

}

window.initMap = initMap;
