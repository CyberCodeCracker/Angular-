import { Component } from '@angular/core';
import { HeaderComponent } from './dashboard/header/header.component';
import { ServerComponent } from './dashboard/server/server.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportComponent } from './dashboard/support/support.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardItemComponent, HeaderComponent, ServerComponent, TrafficComponent, SupportComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
