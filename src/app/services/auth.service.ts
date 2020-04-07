import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
  })

export class AuthService extends BaseService {
    url
    constructor(private http: HttpClient) {
        super('auth')
    }
    register(user) {
        return this.http.post(this.url + 'register', user, this.setUpHeaders())
    }
} 