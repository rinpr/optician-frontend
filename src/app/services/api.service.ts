import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = "http://localhost:8080"

  constructor(private http : HttpClient) { }

  getBills() {
    return this.http.get<Bill[]>(`${this.apiUrl}/bills-data`)
  }

  setBill(bill: Bill) {
    return bill
  }
}
