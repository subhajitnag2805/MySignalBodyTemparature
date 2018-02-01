//import modules
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
    //provide the base url
    private url = 'http://mitapi.memeinfotech.com:5020';
    private headerOptions = new RequestOptions({
        headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' })
    });

    constructor(private http: Http) { }

    public login(data: any) {
        let _base = this;
        return new Promise(function (resolve, reject) {
            _base.http.post(_base.url + "/user/login", data, _base.headerOptions)
                .map(response => response.json()).
                subscribe(res => {
                    resolve(res);
                }, function (error) {
                    reject(error);
                });
        });
    }
}