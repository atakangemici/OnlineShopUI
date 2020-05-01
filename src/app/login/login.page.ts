import { Component, defineInjectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-Login',
  templateUrl: 'Login.page.html',
  styleUrls: ['Login.page.scss'],
})
export class Login {
  registerContent : boolean;

  constructor(private route: Router, public authService: AuthService) {
   
  }
  ngOnit(){
  }
}


