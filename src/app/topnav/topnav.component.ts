import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(private authService: AuthService, public navbarService: NavbarService) {
  }

  ngOnInit() { }

  tryLogout() {
    this.authService.logout();
  }
}
