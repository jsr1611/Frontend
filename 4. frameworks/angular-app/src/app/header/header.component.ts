import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserDetailsComponent } from '../user-details/user-details.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, UserDetailsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
onUserDetailsEvent(event: any){
  console.log(`event: ${event}`);
}
}
