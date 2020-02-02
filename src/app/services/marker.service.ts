import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriversService } from './drivers.service';
import * as leaf from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  public socialHubs: any;
  public userLat: number;
  public userLng: number;

  constructor(
    private http: HttpClient,
    private socials: DriversService
    ) { }

  public markersPlease(map: leaf.Map): void {
    this.socialHubs = this.socials.getDrivers();
    console.log('Hubs', this.socialHubs);

    this.socialHubs.forEach((hub: any) => {
      console.log(hub);
      const lat = hub['location']['lat'];
      const lng = hub['location']['lng'];
      const marker = leaf.circleMarker([lat, lng]).addTo(map);
      console.log('user location ->', this.userLat, this.userLng);
      // const userMark = leaf.marker([this.userLat, this.userLng]).addTo(map);
    });
  }
}
