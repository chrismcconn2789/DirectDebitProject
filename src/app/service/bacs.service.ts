import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACs } from '../models/BACs.model';

@Injectable({
  providedIn: 'root'
})
export class BacsService {

  baseUrl = "https://localhost:7112/api/BACs";

  constructor(private http: HttpClient) { }

  // Get All Records
  getAllRecords(): Observable<BACs[]> {
    return this.http.get<BACs[]>(this.baseUrl);
  }

  deleteRecord(policyRef: string): Observable<BACs> {
    return this.http.delete<BACs>(this.baseUrl + '/' + policyRef);
  }
}
