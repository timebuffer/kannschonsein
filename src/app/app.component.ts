import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Mark this component as standalone
  imports: [MatCardModule, MatButtonModule, RouterOutlet]  // Import required modules
})

export class AppComponent {
  title = 'kann-schon-sein';
}
