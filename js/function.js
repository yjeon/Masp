// TODO Mimize js use

/*==================================================================================================*/
/*                                        Front-end functs                                          */
/*==================================================================================================*/

// Need to clean this up...
(function($) {
    $.fn.extend( {
        leanModal: function(options) {
            var defaults={top:100,overlay:0.5,closeButton:null};
            var overlay=$("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options=$.extend(defaults,options);
            return this.each(
                function() {
                    var o=options;
                    $(this).click(
                        function(e) {
                            var modal_id=$(this).attr("href");
                            $("#lean_overlay").click(
                                function() {
                                    close_modal(modal_id)
                                }
                            );
                            $(o.closeButton).click(
                                function() {
                                    close_modal(modal_id)
                                }
                            );
                            var modal_height=$(modal_id).outerHeight();
                            var modal_width=$(modal_id).outerWidth();
                            $("#lean_overlay").css({"display":"block",opacity:0});
                            $("#lean_overlay").fadeTo(200,o.overlay);
                            $(modal_id).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":o.top+"px"});
                            $(modal_id).fadeTo(200,1);
                            e.preventDefault()
                        }
                    )
                }
            );
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(200);
                $(modal_id).css({"display":"none"})
            }
        } //end of leanModal
    })
})(jQuery);

// loads loginmodal upon click.
$(function(){
	  $('#loginform').submit(function(e){
		    return false;
	  });
	  $('#modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });

});

// Pops up the sign up window
function signUp() {
    document.getElementById("signUpContainer").style.display = "block";
    document.getElementById("signInContainer").classList.add('hidden');
    document.getElementById("signUpContainer").classList.remove('hidden');
}

function signIn() {
    document.getElementById("signInContainer").style.display = "block";
    document.getElementById("signUpContainer").classList.add('hidden');
    document.getElementById("signInContainer").classList.add('hidden');
}

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "30%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// TODO Adding personal css support...
document.getElementById("bluerect").addEventListener("click", changeThemeBlue);
document.getElementById("brownrect").addEventListener("click", changeThemeBrown);
document.getElementById("whiterect").addEventListener("click", changeThemeWhite);
function changeThemeBlue() {
    document.body.style.backgroundColor = "blue";
}
function changeThemeBrown() {
    document.body.style.backgroundColor = "brown";
}
function changeThemeWhite() {
    document.body.style.backgroundColor = "white";
}

/*==================================================================================================*/
/*                                              Firebase                                            */
/*==================================================================================================*/
(function() {
    // Initialize firebase
    const config = {
        apiKey: "AIzaSyCuWAvUnbjSAGD7XqansTe2tUoqPORncl0",
        authDomain: "masp-9a79d.firebaseapp.com",
        databaseURL: "https://masp-9a79d.firebaseio.com",
        storageBucket: "masp-9a79d.appspot.com",
        messagingSenderId: "686393566018"
    }; firebase.initializeApp(config);

    // HTML elements
    const txtEmail    = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const loginbtn    = document.getElementById('loginbtn');
    const btnSignUp   = document.getElementById('btnSignUp');
    const btnSignOut  = document.getElementById('btnSignOut');
    const modaltrigger= document.getElementById('modaltrigger');

    //add login event
    loginbtn.addEventListener('click', e => {
        const email   = txtEmail.value;
        const pass    = txtPassword.value;
        const auth    = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));
    });

    //Add Sign up
    btnSignUp.addEventListener('click', e => {
        const email   = txtEmail.value;
        const pass    = txtPassword.value;
        const auth    = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.then(e => window.location.href="index.html");
        promise.catch(e => console.log(e.message));
    });

    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
            console.log("here we go!");
            console.log(firebaseUser.email);
            btnSignOut.classList.remove('hidden');
            btnSignUp.classList.add('hidden');
            modaltrigger.classList.add('hidden');
            document.getElementById('signInContainer').classList.add('hidden');
        }
        else{
            console.log('not logged in');
            btnSignOut.classList.add('hidden');
            loginbtn.classList.remove('hidden');
            btnSignUp.classList.remove('hidden');
            modaltrigger.classList.remove('hidden');
        }
    });
}());


/*==================================================================================================*/
/*                                              Google Maps                                         */
/*==================================================================================================*/

/**
 * Created by iamroot on 9/26/16.
 */
function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var origin_place_id   = null;
    var destin_place_id   = null;
    var travel_mode       = 'DRIVING';

    var origin_input      = document.getElementById('address1');
    var destin_input      = document.getElementById('address2');

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 12,
        disableDefaultUI: true,
        styles:[{
            featureType: 'all',
            stylers: [{
                saturation: -40
            }]
        }]
    });
    directionsDisplay.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(8);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }

    var origin_autocomplete = new google.maps.places.Autocomplete(origin_input);
    var destin_autocomplete = new google.maps.places.Autocomplete(destin_input);
    origin_autocomplete.bindTo('bounds', map);
    destin_autocomplete.bindTo('bounds', map);

    function expandViewportToFitPlace(map, place) {
        if(place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
        }
    }

    origin_autocomplete.addListener('place_changed', function() {
        var place = origin_autocomplete.getPlace();
        if(!place.geometry) {
            window.alert("place contains no geom.");
            return;
        }
        expandViewportToFitPlace(map, place);

        origin_place_id = place.place_id;
        route(origin_place_id, destin_place_id, travel_mode, directionsService, directionsDisplay);
    });

    destin_autocomplete.addListener('place_changed', function() {
        var place = destin_autocomplete.getPlace();
        if(!place.geometry) {
            window.alert("place contains no geom.");
            return;
        }
        expandViewportToFitPlace(map, place);

        destin_place_id = place.place_id;
        route(origin_place_id, destin_place_id, travel_mode, directionsService, directionsDisplay);
    });

    function route(origin_place_id, destin_place_id, travel_mode, directionsService, directionsDisplay) {
        if(!origin_place_id || !destin_place_id) {
            return;
        }
        directionsService.route({
            origin: {'placeid': origin_place_id},
            destination: {'placeid': destin_place_id},
            travelMode: travel_mode
        }, function(response, status) {
            if(status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
