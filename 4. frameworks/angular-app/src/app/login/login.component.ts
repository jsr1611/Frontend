import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { BroadcastService, EventKeys } from '../services/broadcast.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private broadcastService: BroadcastService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    let form = {
      username: new FormControl({}, Validators.required),
      password: new FormControl({}, Validators.required),
    };

    let formState = {
      username: {
        value: '',
        disabled: false,
      },
      password: {
        value: '',
        disabled: false,
      },
    };

    this.loginForm = this.formBuilder.group(form);
    this.loginForm.reset(formState);
  }

  isFormValid() {
    return this.loginForm?.valid;
  }
  onSubmit() {
    console.log(`onSubmit: username :
        ${this.loginForm?.value.username}`);
    console.log(`onSubmit: password :
        ${this.loginForm?.value.password}`);

    this.broadcastService.broadcast(
      EventKeys.USER_LOGIN_EVENT,
      this.loginForm?.value.username
    );
  }
}
