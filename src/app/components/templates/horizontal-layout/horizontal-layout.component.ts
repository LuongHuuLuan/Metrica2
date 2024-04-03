import { Component } from '@angular/core';
import {FooterComponent} from "../../organism/footer/footer.component";
import {HorizontalNavComponent} from "../../organism/horizontal-nav/horizontal-nav.component";
import {RightSideBarComponent} from "../../organism/right-side-bar/right-side-bar.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-horizontal-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HorizontalNavComponent,
    NgApexchartsModule,
    RightSideBarComponent,
    RouterOutlet
  ],
  templateUrl: './horizontal-layout.component.html',
  styleUrl: './horizontal-layout.component.scss'
})
export class HorizontalLayoutComponent {

}
