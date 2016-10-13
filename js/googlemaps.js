/*
 * Google Map API
 */
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat : 40.714232,lng: -73.9612889},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        // ROADMAP
        //TERRAIN
    });

    var marker = new google.maps.Marker({
        position:{
            lat : 40.714232,lng: -73.9612889
        },
        map: map,
        draggable:true,
    });

    var infoWindow = new google.maps.InfoWindow({map:map});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker.setPosition(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
            map.setZoom(13);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    var searchButton = document.getElementById('go');
    var searchbox = new google.maps.places.SearchBox(document.getElementById('mapSearch1'));

    // console.log("here");

    google.maps.event.addListener(searchbox,'places_changed',function(){
        //console.log("here1");
        var places = searchbox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for(i=0;place=places[i];i++){
            //console.log(place.geometry.location);
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);
        }

        map.fitBounds(bounds);
        map.setZoom(13);

    });


}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}




/*
 * using D3, load the data that user have been searched from Firebase, 
 * overay on the google map.
 */
d3.json("masp-export.json",function(error,data){
    if (error) throw error;
    
    var overlay = new google.maps.OverlayView();
    
    // Add the container when the overlay is added to the map.
    overlay.onAdd = function() {
    var layer = d3.select(this.getPanes().overlayLayer).append("div")
        .attr("class", "masp-export");

    // Draw each marker as a separate SVG element.
    overlay.draw = function() {
      var projection = this.getProjection(),
          padding = 10;

      var marker = layer.selectAll("svg")
          .data(d3.entries(data))
          .each(transform) // update existing markers
        .enter().append("svg")
          .each(transform)
          .attr("class", "marker");

      // Add a circle.
      marker.append("circle")
          .attr("r", 4.5)
          .attr("cx", padding)
          .attr("cy", padding);

      // Add a label.
      marker.append("text")
          .attr("x", padding + 7)
          .attr("y", padding)
          .attr("dy", ".31em")
          .text(function(d) { return d.key; });

      function transform(d) {

        var places = d.getPlaces();
        var bounds = new google.mapa.LatLngBounds();
        var i, place;

        for(i=0; place= places[i];i++){
            bounds.extend(place.geometry.location);
        }


        // d = 
        // d = new google.maps.LatLng(d.value[1], d.value[0]);
        // d = projection.fromLatLngToDivPixel(d);
        // return d3.select(this)
        //     .style("left", (d.x - padding) + "px")
        //     .style("top", (d.y - padding) + "px");
      }
    };
  };

  // Bind our overlay to the map…
  overlay.setMap(map);

});

