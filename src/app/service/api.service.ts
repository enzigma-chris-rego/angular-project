import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';
import { User } from '../../objects/user';
import { AppDataService } from './appData.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService { 
  public apiBaseUrl = 'http://18.206.222.132/api/';
  //public apiBaseUrl = 'http://192.168.193.143:3000/api/';
  //public httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json' }) };
  constructor(private http: HttpClient, private dataService: AppDataService) { }
  
  post(action: string, body: any) {
    var apiEndPoint = this.apiBaseUrl;
    switch(action.toLowerCase()){
      case 'login':
        apiEndPoint = apiEndPoint + 'login';
        break;
      case 'register':
        apiEndPoint = apiEndPoint + 'register';
        break;
      case 'logout':
        apiEndPoint = apiEndPoint + 'logout';
        break;
      case 'authenticate':
        apiEndPoint = apiEndPoint + 'authenticate';
        break;
    }
    return this.http.post(apiEndPoint, body);
  }

  logout(body: any){
    return this.http.post(this.apiBaseUrl +'logout', body)
  }

  getAllRecords(strObjectType: string) {
    let httpHeader = { headers: {'Content-Type': 'application/json', 'Authorization': this.dataService.session.sid}}    
    return this.http.get(this.apiBaseUrl + strObjectType, httpHeader);
  }

  getById(strObjectType: string, id: number) {
    let httpHeader = { headers: {'Content-Type': 'application/json', 'Authorization': this.dataService.session.sid}}    
    return this.http.get(this.apiBaseUrl + strObjectType + '/' + id, httpHeader);
  }

  create(strObjectType: string, data: any={}) {
    let httpHeader = { headers: {'Content-Type': 'application/json', 'Authorization': this.dataService.session.sid}}    
    return this.http.put(this.apiBaseUrl + strObjectType, data, httpHeader);
  }

  update(strObjectType: string,data: any={}) {
    let httpHeader = { headers: {'Content-Type': 'application/json', 'Authorization': this.dataService.session.sid}}    
    return this.http.post(this.apiBaseUrl+strObjectType + data.Id, data, httpHeader);
  }

  delete(strObjectType: string, id: string) {
    let httpHeader = { headers: {'Content-Type': 'application/json', 'Authorization': this.dataService.session.sid}}    
    return this.http.delete(this.apiBaseUrl + strObjectType + '/' + id, httpHeader);
  }
}
