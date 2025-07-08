import { Component } from '@angular/core';
import { TicketsComponent } from '../tickets/tickets/tickets.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [TicketsComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
