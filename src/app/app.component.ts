import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterLink, RouterOutlet, RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
