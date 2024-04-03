import { Component } from '@angular/core';
import {ButtonComponent} from "../../components/atoms/button/button.component";
import {ToggleSwitchComponent} from "../../components/atoms/toggle-switch/toggle-switch.component";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponent, LoginRequest} from "../../components/organism/forms/login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    ToggleSwitchComponent,
    ReactiveFormsModule,
    LoginFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  onSubmit(form: LoginRequest) {
    console.log(form)
  }

}
