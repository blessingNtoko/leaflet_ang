import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as leaf from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  public capitals = '/assets/data/usa-capitals.geojson';
  public customGeoJSON = '/assets/custom.geo.json';

  constructor(private http: HttpClient) { }

  public markersPlease(map: leaf.Map): void {
    this.http.get(this.customGeoJSON).subscribe((data: any) => {
      console.log('Data ->', data);
      for (const c of data.features) {
        const lat = c.geometry.coordinates[0][0][0][0];
        const lng = c.geometry.coordinates[1][0];
        const marker = leaf.marker([lng, lat]).addTo(map);
      }
    });
  }
}
