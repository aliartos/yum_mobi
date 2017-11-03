import { Component, OnInit, Inject } from '@angular/core';
import { BASE_PATH } from '../../remote/variables';
import { AuthenticationService } from '../../shared/authentication.service';
import { TextField } from "ui/text-field";
import { Http, Headers, Response, RequestOptions } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'login-component',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  private isLoading: boolean = false
  public username: string;
  public password: string;
  public response: string;

  constructor( @Inject(BASE_PATH) private baseUrl: string, private authService: AuthenticationService
    , private http: Http
  ) { }

  ngOnInit() {
    // 
    this.username = "admin@yum.com";
    this.password = "123456";
  }

  public login() {
    this.isLoading = true;

    console.log("Base url: " + this.baseUrl);
    console.log('login tapped!', this.username, this.password);

     
    this.authService.login("", this.password, this.username)
      .finally(() => {
        this.isLoading = false;
      })
      .subscribe(result => { // login successful 
        console.log(result);
        this.response = JSON.stringify(result);
        if (result != null) {
          console.log('Logged as:' + result[1]);
        }
      },
      error => { // login failed
        console.log(error);
        this.response = JSON.stringify(error);
      });
      
  }
}


