import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../interface/email.interface';

type CustomerPayload = Company['destination'][number]; // destino[0]

@Injectable({ providedIn: 'root' })
export class EmailService {
  private http = inject(HttpClient);

  private baseUrl = 'http://backendofficialeqs.eqsinternational.com';

  sendCompany(payload: Company) {
    return this.http.post(`${this.baseUrl}/Backend/EmailCompany`, payload);
  }

  sendCustomer(payload: CustomerPayload) {
    return this.http.post(`${this.baseUrl}/Backend/EmailCustomer`, payload);
  }
}