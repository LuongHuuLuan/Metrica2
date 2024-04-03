import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HorizontalLayoutComponent} from "./components/templates/horizontal-layout/horizontal-layout.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '', component: HorizontalLayoutComponent, children: [
      {path: 'home', component: HomeComponent}
    ]
  },
  {path: 'login', component: LoginComponent}

];
