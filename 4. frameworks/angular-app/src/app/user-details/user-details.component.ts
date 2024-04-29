import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BroadcastService, EventKeys } from '../services/broadcast.service';
import _ from 'underscore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  loggedInUserName: string = 'logged_in_user';
  isLoggedIn: boolean = false;

  constructor(private broadcastService: BroadcastService) {
    _.bindAll(this, 'loginSuccessful');
    this.broadcastService
      .on(EventKeys.USER_LOGIN_EVENT)
      .subscribe(this.loginSuccessful);
  }
  loginSuccessful(event: any) {
    console.log(`UserDetailsComponent.loginSuccessful: ${event}`);
    this.loggedInUserName = event;
    this.isLoggedIn = true;
  }

  ngOnInit(): void {}

  @Output() notify = new EventEmitter();

  onLoginClicked() {
    console.log(`UserDetailsComponent: onLoginClicked()`);
    this.notify.emit('UserDetaulsComponent: emit value');
    this.broadcastService.broadcast(
      EventKeys.LOGIN_BUTTON_CLICKED,
      'UserDetailsComponent: LOGIN_BUTON_CLICKED'
    );
  }
  onLogoutClicked(): void {
    this.loggedInUserName = '';
    this.isLoggedIn = false;
  }
}
