import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data1 from "../../data/F01705150050.json";
import * as data2 from "../../data/F01705150090.json";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  getData() {
    let data = [];
    data.push((data1 as any).default);
    data.push((data2 as any).default);

    return data;
  }
}
