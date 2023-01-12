import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PNRserviceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/fetch')
  }

  singleData(data:any){
    return this.http.get('http://localhost:3000/fetch/'+ data.PNR)
  }
}
