import { Component, OnInit } from "@angular/core";
import { MapService } from "../map.service";
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
    const data = this.mapService.getData().subscribe((data) => {
      this.setMarkers(data);
    });
  };

  setMarkers(data) {
    let markerArray = [];

    const icon: any = L.icon({
      iconUrl:
        "https://cdn.jsdelivr.net/gh/bbehling/leafletNgWebComponent/elements/marker-icon-2x.png",
      iconSize: [27, 37],
    });

    data.forEach((incident) => {
      L.marker(
        [incident["address"]["latitude"], incident["address"]["longitude"]],
        { icon: icon }
      )
        .addTo(this.map)
        .bindPopup(
          `Address Properties: <pre>${JSON.stringify(
            incident["address"],
            null,
            1
          )}</pre>
          <br>
          Apparatus Properties: <pre>${JSON.stringify(
            incident["apparatus"],
            null,
            1
          )}</pre>
          <br>
          Description Properties: <pre><span>${JSON.stringify(
            incident["description"],
            null,
            1
          )}</span></pre>
          <br>
          Fire Department Properties: <pre>${JSON.stringify(
            incident["fire_department"],
            null,
            1
          )}</pre>
          <br>
          Weather: <pre>${JSON.stringify(incident["weather"], null, 1)}</pre>
          <br>
          Version: <pre>${JSON.stringify(incident["version"])}</pre>`
        );

      markerArray.push([
        incident["address"]["latitude"],
        incident["address"]["longitude"],
      ]);
    });
    this.map.fitBounds(markerArray);
  }
}
