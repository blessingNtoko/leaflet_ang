import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MarkerService } from '../services/marker.service';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  public map;
  public userLat: number;
  public userLng: number;

  constructor(private markerServe: MarkerService) { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.userLat = pos.coords.latitude;
        this.userLng = pos.coords.longitude;
        console.log('lat&lng ->', this.userLat , this.userLng);
      });
    }
  }

  ngAfterViewInit() {
    this.initMap();
    this.markerServe.markersPlease(this.map);
  }

  public initMap() {
    this.map = L.map('map', {
      center: [-26.2397131, 28.169468799999997],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
