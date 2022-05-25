/**
 * Initializes the map and sets new coordinate points
 */
function initMap() {
    var location = {
        lat: 40.000,
        lng: -79.000
    }
    var options = {
        center: location,
        zoom: 9
    }

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((loc) => {
                location.lat = loc.coords.latitude;
                location.lng = loc.coords.longitude;

                map = new google.maps.Map(document.getElementById("map"), options);
            },
            (err) => {
                map = new google.maps.Map(document.getElementById("map"), options);
            })
    } else {
        console.log('Geolocation not supported :(');
        map = new google.maps.Map(document.getElementById("map"), options);
    }

    autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"), {
        componentRestrictions: {
            'country': ['CA']
        },
        fields: ['geometry', 'name'],
        types: ['establishment']

    })

    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        new google.maps.Marker({
            position: place.geometry.location,
            title: place.name,
            map: map
        })
    })

    var markers = [];
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
        bounds.extend(markers[i]);
    }
}