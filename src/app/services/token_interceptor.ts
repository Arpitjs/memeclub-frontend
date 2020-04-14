import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'
import { TokenService } from './token.service'
@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private tokenService: TokenService
    ) {}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headersConfig = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
    let token = this.tokenService.getToken()
    if(token) {
        headersConfig['Authorization'] = `Bearer ${token}`
    }
    let _req = req.clone({ setHeaders: headersConfig })
    return next.handle(_req)
}
}
