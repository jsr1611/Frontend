import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BroadcastService, EventKeys } from './services/broadcast.service';
import * as _ from "underscore";
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MatSidenavModule,
    LoginComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
  @ViewChild("sidenav") sidenav: MatSidenav | null = null;

  constructor(broadcastService: BroadcastService){
    _.bindAll(this, "onLoginClicked", "onLoginEvent");
    broadcastService.on(EventKeys.LOGIN_BUTTON_CLICKED)
      .subscribe(this.onLoginClicked);
    broadcastService.on(EventKeys.USER_LOGIN_EVENT)
      .subscribe(this.onLoginEvent);
  }
  onLoginEvent() {
    this.sidenav?.close();
  }
  onLoginClicked(event: string) {
    console.log(`AppComponent received: ${event}`);
    this.sidenav?.open();
  }
}
