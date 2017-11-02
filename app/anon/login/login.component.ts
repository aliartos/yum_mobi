import { Component, OnInit, Inject } from '@angular/core';
import { BASE_PATH } from '../../remote/variables';
import { AuthenticationService } from '../../shared/authentication.service';
import * as textFieldModule from "tns-core-modules/ui/text-field";

@Component({
  moduleId: module.id,
  selector: 'login-component',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public isLoading: boolean = false
  public username: any = {};
  public password: any = {};

  constructor( @Inject(BASE_PATH) private baseUrl: string, private authService: AuthenticationService) { }

  ngOnInit() {
    this.username.text=" ";
    this.password.text=" ";
  }

  public login() {
    this.isLoading = true;

    console.log("Base url: " + this.baseUrl);

    console.log('login tapped!', JSON.stringify(this.username.text), this.password.text);

    this.authService.login("", this.password.text, this.username.text)
      .finally(() => {
        this.isLoading = false;
      })
      .subscribe(result => { // login successful 
        console.log(result);
        if (result != null) {
          console.log('Logged as:' + result[1]);
        }
      },
      error => { // login failed
        console.log(error);

      });
  }
}


