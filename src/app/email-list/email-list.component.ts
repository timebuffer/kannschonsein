// src/app/email-list/email-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
  standalone: true,  // Mark this component as standalone
  imports: [MatCardModule, MatButtonModule]  // Import required Angular Material modules
})
export class EmailListComponent implements OnInit {
  emails = [
    { subject: 'Email 1', from: 'sender1@example.com', snippet: 'This is a snippet of the email body.' },
    { subject: 'Email 2', from: 'sender2@example.com', snippet: 'Another snippet from a different email.' }
  ];

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((data: any[]) => {
      this.emails = data;
    });
  }
}



