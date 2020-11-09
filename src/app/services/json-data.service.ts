import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Rx";

@Injectable()
export class JsonDataService {
  constructor(private http: HttpClient) {}
  public getJSON(fileName: string): Observable<any> {
    return this.http.get(`./assets/${fileName}.json`);
  }
}
