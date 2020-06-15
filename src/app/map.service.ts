import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as data1 from "../../data/F01705150050.json";
import * as data2 from "../../data/F01705150090.json";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get("/v2/stations/hourly?station=72401&start=2015-05-15&end=2015-05-15")
      .pipe(
        map((response) => {
          let data = [];

          let newData1 = (data1 as any).default;
          newData1["weather"] = response;
          let newData2 = (data2 as any).default;
          newData2["weather"] = response;

          data.push(newData1);
          data.push(newData2);

          return data;
        })
      );
  }
}
