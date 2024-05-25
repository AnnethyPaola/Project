import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title = "SGT";
  public isAuthenticated = true;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

}
