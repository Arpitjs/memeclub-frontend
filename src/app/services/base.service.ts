import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

export class BaseService {
    url
    constructor(postfixUrl) {
        this.url = environment.backendUrl + postfixUrl + '/'
    }

    setUpHeaders() {
       return {
           headers: new HttpHeaders({
               'Content-Type': 'application/json'
           })
       }
} 
}