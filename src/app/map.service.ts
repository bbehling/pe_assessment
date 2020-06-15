import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as data1 from "../../data/F01705150050.json";
import * as data2 from "../../data/F01705150090.json";
import * as weather from "../../data/weather.json";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  getData() {
    debugger;
    //const weatherData = this.getWeatherData().subscribe((response) => {
    //  debugger;
    //});
    let data = [];

    let newData1 = (data1 as any).default;
    newData1["weather"] = (weather as any).default;
    let newData2 = (data2 as any).default;
    newData2["weather"] = (weather as any).default;

    data.push(newData1);
    data.push(newData2);

    return data;
  }

  getWeatherData() {
    const headers = new HttpHeaders().set(
      "x-api-key",
      "L6BosLncdjpYWmpKXMgUb!BT0BC=emMU"
    );
    return this.http.get(
      //http://localhost:4200/api
      //https://api.meteostat.net/v2/stations/hourly?station=10637&start=2020-02-01&end=2020-02-04
      "https://api.meteostat.net/api/v2/stations/hourly?station=10637&start=2020-02-01&end=2020-02-04",
      { headers }
    );
  }
}
