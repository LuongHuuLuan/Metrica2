import {Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-print-error',
  standalone: true,
  imports: [],
  templateUrl: './print-error.component.html',
  styleUrl: './print-error.component.scss'
})
export class PrintErrorComponent {

  @Input({required: true}) control!: AbstractControl;

}
