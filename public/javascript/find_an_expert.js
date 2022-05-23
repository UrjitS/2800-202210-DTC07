/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 49.276389,
    lng: -123.122368
  };
  const center1 = {
    lat: 49.2738637,
    lng: -123.0986917
  };

  const place3 = {
    lat: 49.258706,
    lng: -122.892925
  };

  const place4 = {
    lat: 49.253229,
    lng: -122.893372
  };


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
    content: "<p style='font-weight: bold ;'>Bridge the gap Head Office</p>" +
      "<p>Thanks for using our demo App</p>" +
      "<p>Address: 11 xxx St,Vancouver</p>" +
      "<p>Contact: 778-xxx-xxxx</p>" +
      "<a href='https://www.bcit.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker1.addListener('click', function () {
    infoWindow.open(map, marker1);

  });

  const marker2 = new google.maps.Marker({
    position: center1,
    map: map,
    title: 'Center A'

  });

  var infoWindow2 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Changwhi Center</p>" +
      "<p>One of the biggest place where you can mditate</p>" +
      "<p>Address: 12 xxx St,Vancouver</p>" +
      "<p>Contact: 778-xxx-xxxx</p>" +
      "<a href='https://www.bcit.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker2.addListener('click', function () {
    infoWindow2.open(map, marker2);
  });

  // 3rd place

  const marker3 = new google.maps.Marker({
    position: place3,
    map: map,
    title: 'Center A'

  });

  var infoWindow3 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Local center 1</p>" +
      "<p>One of the biggest place where you can mditate</p>" +
      "<p>Address: 12 xxx St,Vancouver</p>" +
      "<p>Contact: 778-xxx-xxxx</p>" +
      "<a href='https://www.bcit.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker3.addListener('click', function () {
    infoWindow3.open(map, marker3);
  });

  //4th place


  const marker4 = new google.maps.Marker({
    position: place4,
    map: map,
    title: 'Center A'

  });

  var infoWindow4 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Local center 2</p>" +
      "<p>One of the biggest place where you can mditate</p>" +
      "<p>Address: 12 xxx St,Vancouver</p>" +
      "<p>Contact: 778-xxx-xxxx</p>" +
      "<a href='https://www.bcit.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker4.addListener('click', function () {
    infoWindow4.open(map, marker4);
  });


  // ------------------------------------search function-----------------------------
  var geocoder = new google.maps.Geocoder();


  // Search for the address when click the search button
  document.getElementById('submit').addEventListener('click', function () {
    console.log('submit 버튼 클릭 이벤트 실행');
    geocodeAddress(geocoder, map);
  });


  // change the coordinate on map
  function geocodeAddress(geocoder, resultMap) {
    console.log('geocodeAddress 함수 실행');

    var address = document.getElementById('address').value;

    geocoder.geocode({
      'address': address,
      componentRestrictions: {
        locality: 'Vancouver',
      }


    }, function (result, status) {
      console.log(result);
      console.log(status);

      if (status === 'OK') {
        resultMap.setCenter(result[0].geometry.location);
        resultMap.setZoom(13);
        var marker = new google.maps.Marker({
          map: resultMap,
          position: result[0].geometry.location
        });

        console.log('(latitude) : ' + marker.position.lat());
        console.log('(longitude) : ' + marker.position.lng());
      } else {
        alert('Error : ' + status);
      }
    });
  }
}

window.initMap = initMap;