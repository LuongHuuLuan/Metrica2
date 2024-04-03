import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {ButtonComponent} from "../../../atoms/button/button.component";
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToggleSwitchComponent} from "../../../atoms/toggle-switch/toggle-switch.component";
import {Event} from "@angular/router";
import {NgClass} from "@angular/common";
import {PrintErrorComponent} from "../../../atoms/print-error/print-error.component";

export type LoginRequest = {
  username: string | null;
  password: string | null;
  rememberMe: boolean | null;
}


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    ToggleSwitchComponent,
    NgClass,
    PrintErrorComponent
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements AfterViewInit {

  @Output() onSubmit = new EventEmitter<LoginRequest>();

  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngAfterViewInit(): void {
    // var forms = document.querySelectorAll('.needs-validation')
    // Array.prototype.slice.call(forms)
    //   .forEach(function (form) {
    //     form.addEventListener('submit', function (event: MouseEvent) {
    //       if (!form.checkValidity()) {
    //         event.preventDefault()
    //         event.stopPropagation()
    //       }
    //
    //       form.classList.add('was-validated')
    //     }, false)
    //   })
  }


  form = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(4),
    ]],
    password: ['',
      [
        Validators.required,
        Validators.minLength(8),
      ]],
    rememberMe: [false]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  validateUsername() {
    this.f['username'].markAsTouched();
    console.log("sss")
  }

  submitForm(event: Event) {
    this.submitted = true;
    // console.log("this.loginForm.valid", this.loginForm.valid)
    if (this.form.invalid) {
      return;
    }
    console.log("this.loginForm.valid", this.form.controls.username.errors?.['minlength']?.['requiredLength'])
    this.form.markAsTouched()
    this.onSubmit.emit(this.form.value as LoginRequest);
  }

  changeRemember(event: { checked: boolean, event: Event }) {
    this.form.patchValue({rememberMe: event.checked})
  }
}
