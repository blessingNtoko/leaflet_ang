import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  public map;
  public userLat: number;
  public userLng: number;

  constructor() { }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.userLat = pos.coords.latitude;
        this.userLng = pos.coords.longitude;
        console.log('lat&lng ->', this.userLat, this.userLng);
      });
    }
  }

  ngAfterViewInit() {
    this.initMap();
  }

  public initMap() {
    this.map = L.map('map', {
      center: [-26.2397131, 28.169468799999997],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
