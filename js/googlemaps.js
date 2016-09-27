/**
 * Created by iamroot on 9/26/16.
 */
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6,
        disableDefaultUI: true,
        styles:[{
            featureType: 'all',
            stylers: [{
                saturation: -40
            }]
        }]
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(16);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }

    var address1 = new google.maps.places.Autocomplete(
        (document.getElementById('address1')), {
            types: ['geocode']
        }
    );

    var address2 = new google.maps.places.Autocomplete(
        (document.getElementById('address2')), {
            types: ['geocode']
        }
    );
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
