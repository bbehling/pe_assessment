import { Component, OnInit } from "@angular/core";
import { MapService } from "../map.service";
import * as esri from "esri-leaflet";
import * as L from "leaflet";

@Component({
  selector: "leaflet-component",
  templateUrl: "./leaflet.component.html",
  styleUrls: ["./leaflet.component.css"],
  providers: [MapService],
})
export class LeafletComponent implements OnInit {
  constructor(private mapService: MapService) {}

  title = "";
  features;
  map = null;

  ngOnInit() {
    this.map = L.map("map", {
      zoomControl: false,
      center: L.latLng(35.29, -112),
      zoom: 5,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.getData();
  }

  getData = () => {
    const data = this.mapService.getData();
    //this.setMarkers(data);
  };

  setMarkers(data) {}
}
