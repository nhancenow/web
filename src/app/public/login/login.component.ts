import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/index';
import {ButtonComponent} from '../../shared/components/button';
import { LinkComponent } from '../../shared/components/link';
//import { default as swal } from 'sweetalert2'

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	model: any = {};
    loading = false;
    error = '';
  	constructor(
        private router: Router,
        private authService: AuthService
    ) { }

  	ngOnInit() {
        this.authService.logout();
  	}
  	public username_error = false;
  	public password_error = false;
  	onButtonClick(evt) {
  		this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                	this.username_error = true;
                	this.password_error = true;
                    this.error = 'Username or password is incorrect';
                   /*swal({
					  title: 'Error!',
					  text: 'Username or password is incorrect',
					  type: 'error',
					  confirmButtonText: 'Ok'
					}).catch(swal.noop)*/
                    this.loading = false;
                }
            },
            error => {
            	console.log("Unexpected error - " + error);
            });
    }
    

	/*login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.error = 'Username or password is incorrect';
                    swal({
					  title: 'Error!',
					  text: 'Username or password is incorrect',
					  type: 'error',
					  confirmButtonText: 'Ok'
					}).catch(swal.noop)
                    this.loading = false;
                }
            },
            error => {
            	console.log("Unexpected error - " + error);
            });
    }
*/
}