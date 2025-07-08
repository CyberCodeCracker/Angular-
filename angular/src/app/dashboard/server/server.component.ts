import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  currentStatus = 'online';
  imagePath = "status.png";
  imageAlt = "A signal symbol";
  headerContent = "Server Status";
}
