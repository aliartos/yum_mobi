import { Component, OnInit, Inject } from '@angular/core';
import { BASE_PATH } from '../../remote/variables';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    public isLoading: boolean = false
    public username:any = {};
    public password:any = {};

    constructor(@Inject(BASE_PATH) private baseUrl: string, private authService: AuthenticationService ) { }

    ngOnInit() {
        console.log("Base url: "+this.baseUrl);
     }
    
    public login() {
        this.isLoading = true;
        console.log('login tapped!', JSON.stringify(this.username));

        this.authService.login("", this.password, this.username)
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


 