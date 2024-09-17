// src/app/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:3000/emails';  // URL of the backend API

  constructor(private http: HttpClient) { }

  // Fetch emails from backend API
  getEmails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
