import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http:HttpClient) { }

  doAddAdmin(admin:Admin){
    return this.http.post("http://localhost:9091/api/v1/admin/auth/add", admin, {responseType:"text"});
  }

  doAuth(admin:Admin){
    return this.http.post("http://localhost:9091/api/v1/admin/auth/authenticate", admin, {responseType:"text"});
  }

  doGetAllAdmin(){
    const header = new HttpHeaders({'Authorization': 'Bearer '+localStorage.getItem('Token')});
    return this.http.get("http://localhost:9091/api/v1/admin/alladmin", {responseType:"json", headers:header});
  }
}
