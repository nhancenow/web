import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthService } from '../services';
import { DigitalKitModel } from '../models';

@Injectable()
export class DigitalKitService {
    constructor(
        private http: Http,
        private authService: AuthService) {
    }

	issueDigitalKit(): Observable<DigitalKitModel> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        let options = new RequestOptions({ headers: headers });

        // get dks from api
        return this.http.get('/api/digitalKit', options)
            .map((response: Response) => response.json());
    }
    
    getDigitalKits(): Observable<DigitalKitModel[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        let options = new RequestOptions({ headers: headers });
		
        // get dks from api
        return this.http.get('/api/digitalKit', options)
            .map((response: Response) => response.json());
    }
}