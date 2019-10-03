import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
declare var google;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let cordenadas;
const directionsDisplay = new google.maps.DirectionsRenderer;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterContentInit {
  map;

  @ViewChild('mapElement', {static: true}) mapElement
  constructor() {}

  ngOnInit(): void {
  }

  loadMap(){
    navigator.geolocation.getCurrentPosition((location) => {

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: cordenadas = {lat: location.coords.latitude, lng: location.coords.longitude},
        zoom: 16
      });
      directionsDisplay.setMap(this.map);

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: {lat: location.coords.latitude, lng: location.coords.longitude},
        radius: 1000,
        type: ['parking']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    var myplace = {lat: -33.8665, lng: 151.1956};
  }

  ngAfterContentInit(): void {
    this.loadMap();
  
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      const directionsService = new google.maps.DirectionsService;
        directionsService.route({
          origin: cordenadas,
          destination: place.geometry.location,
          travelMode: 'DRIVING'
      }, (res, status) => {
          if(status == google.maps.DirectionsStatus.OK){
              directionsDisplay.setDirections(res);
          } else {
              console.warn(status);
          }

      });
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        place.vicinity + '<br>' + place.rating + '</div>');
      infowindow.open(this.map, this);
    });
  }
}
