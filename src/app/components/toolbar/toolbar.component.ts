import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user
  constructor(
    public tokenService: TokenService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.tokenService.GetPayload()
  }
  logout() {
    this.tokenService.deleteToken()
    this.router.navigate([''])
  }
}
