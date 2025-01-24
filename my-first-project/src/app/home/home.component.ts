import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../login/logout/logout.component';

@Component({
  selector: 'app-home',
  imports: [LoginComponent,LogoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
