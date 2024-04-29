import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav'
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BroadcastService, EventKeys } from '../services/broadcast.service';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatButtonModule,
        MatInputModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit{
  loggedInUserName: string = "logged_in_user";
  constructor(private broadcastService: BroadcastService) {  }
  ngOnInit(): void {}

  @Output() notify = new EventEmitter();

  onLoginClicked(){
    console.log(`UserDetailsComponent: onLoginClicked()`);
    this.notify.emit('UserDetaulsComponent: emit value');
    this.broadcastService.broadcast(EventKeys.LOGIN_BUTTON_CLICKED, 'UserDetailsComponent: LOGIN_BUTON_CLICKED');
  }
}
