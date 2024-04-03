import {Component, EventEmitter, HostBinding, Input, Output, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

export type ButtonColor =
  "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "dark"
  | "purple"
  | "pink";
export type ButtonVariant =
  "default"
  | "fill"
  | "outline"
  | "dash"
  | "soft"
  | "fillOutline"
  | "squareIcon"
  | "circleIcon";
export type ButtonShape =
  "round"
  | "skew"
  | "skewRound"
  | "square"
  | "default";
export type ButtonTag = "button" | "input" | "link";
export type ButtonType = "submit" | "button" | "reset";
export type ButtonSize = "large" | "default" | "small" | "extraSmall";

const variants = {
  default: 'btn-de',
  fill: 'btn',
  outline: 'btn-outline',
  soft: 'btn-soft',
  dash: 'btn-de-dash',
  fillOutline: 'btn-outline-dashed btn-square btn',
  squareIcon: 'btn-icon-square-sm btn',
  circleIcon: 'btn-icon-circle btn-icon-circle-sm btn-outline'
}

const sizes = {
  large: 'btn-lg',
  default: '',
  small: 'btn-sm',
  extraSmall: 'btn-xs',
}

const shapes = {
  round: 'btn-round',
  skew: 'btn-square btn-skew',
  skewRound: 'btn-skew',
  square: 'btn-square',
  default: ''
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  @Input() color: ButtonColor = "primary";
  @Input() className!: string;
  @Input() variant: ButtonVariant = "default";
  @Input() shape: ButtonShape = "default";
  @Input() tag: ButtonTag = "button";
  @Input() type: ButtonType = "button";
  @Input() size: ButtonSize = "default";
  @Input() blockButton!: boolean;
  @Input() disable!: boolean;
  @Input() value: string = "";
  @Input() href: string = "";
  @Input() resetClass = false;

  @Output() onClick = new EventEmitter();

  @HostBinding('class.d-grid')
  get isBlockButton() {
    return this.blockButton;
  }

  onClickButton(event: Event) {
    this.onClick.emit(event)
  }

  getClass() {
    if (this.resetClass) {
      return this.className;
    } else {
      let className = `btn ${variants[this.variant]}-${this.color} ${sizes[this.size]} ${shapes[this.shape]}`;
      if (this.className) {
        className += " " + this.className;
      }
      return className;
    }
  }
}
