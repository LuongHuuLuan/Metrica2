import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss'
})
export class ToggleSwitchComponent {
  @Input({required: true}) name!: string;
  @Input() checked: boolean = false;

  @Output() onChange = new EventEmitter();

  onChangeEvent(event: Event) {
    this.checked = !this.checked;
    this.onChange.emit({checked: this.checked, event: event})
  }

}
