function initMap(){
    var location = {
        lat: 40.000,
        lng: -79.000
    }
    var options = {
        center: location,
        zoom: 9
    }
    
    if(navigator.geolocation){
        console.log('Here is the user location');

        navigator.geolocation.getCurrentPosition((loc) => {
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude;

            map = new google.maps.Map(document.getElementById("map"), options);
        },
        (err) => {
            console.log("User declined :(");
            map = new google.maps.Map(document.getElementById("map"), options);
        })
    }else{
        console.log('Geolocation not supported :(');
        map = new google.maps.Map(document.getElementById("map"), options);
    }
    var cityBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(49.246292, -123.116226) //Limit search to city of Vancouver
    )
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("input"), {
        bounds: 'cityBounds',
        componentRestrictions: {'country': ['CA']},
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

    for(var i = 0; i < markers.length; i++){
        bounds.extend(markers[i]);
    }
}

map.fitBounds(bounds);