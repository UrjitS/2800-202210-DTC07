/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 49.2816901,
    lng: -123.1097316
  };
  const center1 = {
    lat: 49.2659379,
    lng: -123.1774331
  };

  const place3 = {
    lat: 49.258706,
    lng: -122.892925
  };

  const place5 = {
    lat: 49.281620,
    lng: -123.076362
  };


  const place4 = {
    lat: 49.2526104,
    lng: -123.1791221
  };


  const place6 = {
    lat: 49.2526104,
    lng: -123.1791221
  };



  const place7 = {
    lat: 49.2344554,
    lng: -123.0884849
  };



  const place8 = {
    lat: 49.271427,
    lng: -123.070311
  };



  const place9 = {
    lat: 49.2325528,
    lng: -123.1444034
  };



  const place10 = {
    lat: 49.234683,
    lng: -123.046900
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
    title: 'ZENDEN Meditation'

  });

  var infoWindow = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>ZENDEN Meditation</p>" +
      "<p>Address: 33 Water St, Vancouver, BC V6B 1R4</p>" +
      "<p>Contact: +16046123355</p>" +
      "<a href='http://zendenmeditation.com/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker1.addListener('click', function () {
    infoWindow.open(map, marker1);

  });

  const marker2 = new google.maps.Marker({
    position: center1,
    map: map,
    title: 'Transcendental Meditation'

  });

  var infoWindow2 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Transcendental Meditation</p>" +
      "<p>Address: 328 W 8th Ave, Vancouver, BC V5Y 3X2</p>" +
      "<p>Contact: +16042632655</p>" +
      "<a href='http://ca.tm.org/vancouver'>Homepage</a>"
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
    title: 'Nirvanami Yoga and Wellness'

  });

  var infoWindow4 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Nirvanami Yoga and Wellness</p>" +
      "<p>Address: 1255 Bidwell St, Vancouver, BC V6G 2K8</p>" +
      "<p>Contact: +16044048033</p>" +
      "<a href='http://www.nirvanami.com/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker4.addListener('click', function () {
    infoWindow4.open(map, marker4);
  });


  //5th place

  const marker5 = new google.maps.Marker({
    position: place5,
    map: map,
    title: 'Meditate Vancouver'

  });

  var infoWindow5 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Meditate Vancouver</p>" +
      "<p>Address: 5840 Oak St, Vancouver, BC V6M 2V9</p>" +
      "<p>Contact: +17789958636</p>" +
      "<a href='http://www.meditatevancouver.com/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker5.addListener('click', function () {
    infoWindow5.open(map, marker5);
  });


  //6th place

  const marker6 = new google.maps.Marker({
    position: place6,
    map: map,
    title: 'Kadampa Meditation Centre Vancouver'

  });

  var infoWindow6 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Kadampa Meditation Centre Vancouver</p>" +
      "<p>Address: 1833 Victoria Diversion, Vancouver, BC V5N 2K2</p>" +
      "<p>Contact: +16042212271</p>" +
      "<a href='https://meditateinvancouver.org/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker6.addListener('click', function () {
    infoWindow6.open(map, marker6);
  });



  //7th place

  const marker7 = new google.maps.Marker({
    position: place7,
    map: map,
    title: 'Sahaja-Yoga Meditation Burnaby'

  });

  var infoWindow7 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Sahaja-Yoga Meditation Burnaby</p>" +
      "<p>Address: 5707 Gilpin St, Burnaby, BC V5G 2J1</p>" +
      "<p>Contact: +16047158888</p>" +
      "<a href='http://meditationburnaby.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker7.addListener('click', function () {
    infoWindow7.open(map, marker7);
  });



  //8th place

  const marker8 = new google.maps.Marker({
    position: place8,
    map: map,
    title: 'Lightwork Meditation'

  });

  var infoWindow8 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Lightwork Meditation</p>" +
      "<p>Address: Vancouver, BC V6J 2M4</p>" +
      "<p>Contact: +16047634112</p>" +
      "<a href='http://www.lightwork.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker8.addListener('click', function () {
    infoWindow8.open(map, marker8);
  });



  //9th place

  const marker9 = new google.maps.Marker({
    position: place9,
    map: map,
    title: 'Nalandabodhi Foundation'

  });

  var infoWindow9 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Nalandabodhi Foundation</p>" +
      "<p>Address: 4610 Earles St, Vancouver, BC V5R 3R2</p>" +
      "<p>Contact: +16046759282</p>" +
      "<a href='http://vancouver.nalandabodhi.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker9.addListener('click', function () {
    infoWindow9.open(map, marker9);
  });


  //10th place

  const marker10 = new google.maps.Marker({
    position: place10,
    map: map,
    title: 'Nalandabodhi Foundation'

  });

  var infoWindow10 = new google.maps.InfoWindow({
    content: "<p style='font-weight: bold ;'>Nalandabodhi Foundation</p>" +
      "<p>Address: 2215 E Pender St, Vancouver, BC V5L 1X5</p>" +
      "<p>Contact: +16048771808</p>" +
      "<a href='http://vancouver.nalandabodhi.ca/'>Homepage</a>"
  });


  // Add a click listener to open the info window when the marker is clicked.
  marker10.addListener('click', function () {
    infoWindow10.open(map, marker10);
  });


  // ------------------------------------search function-----------------------------
  var geocoder = new google.maps.Geocoder();


  // Search for the address when click the search button
  document.getElementById('submit').addEventListener('click', function () {
    geocodeAddress(geocoder, map);
  });


  // change the coordinate on map
  function geocodeAddress(geocoder, resultMap) {

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
