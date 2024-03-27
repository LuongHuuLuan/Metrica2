import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftSideBarTabComponent} from "./components/organism/left-side-bar-tab/left-side-bar-tab.component";
import {TopBarComponent} from "./components/organism/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftSideBarTabComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Metrica2';
}
