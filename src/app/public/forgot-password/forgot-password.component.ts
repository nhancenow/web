import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/index';
import {ButtonComponent} from '../../shared/components/button'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
	model: any = {};
    loading = false;
    error = '';
  	constructor(
        private router: Router,
        private authService: AuthService
    ) { }
	
	public otp_value = '{"items":[{"email":"user@mail.com"},{"otp":"124"}]}';

  ngOnInit() {
  	this.authService.logout();
  	localStorage.setItem('otp', this.otp_value);
  }
  	
  	onBackButtonClick(evt) {
  		this.loading = true;
        this.authService.forgotpassword(this.model.username)
            {
                this.router.navigate(['/login']);
            }
    }
    public mobilenumber_error = false;
    public emailid_error = false;
    
  	onNextButtonClick(evt) {
 	this.loading = true;
       this.authService.forgotpassword(this.model.username)
           .subscribe(result => {
               console.log(result);
               if (result == 'true') {
                   this.router.navigate(['/forgotPassword']);
               } else {
                this.mobilenumber_error = true;
               	this.emailid_error = true;
               	this.error = 'mobilenumber or emailid is incorrect';
                 this.loading = false;
               }
           },
           error => {
            console.log("Unexpected error - " + error);
           });
   }

}