import { Component,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  allemployees: Employee[];
  @Input()
  user:any="";

  @Input()
  greet:any="";
  
  constructor(private router:Router){}

  @Input()
  isLoggedIn:String;

  @Input()
  isAdmin:String;

  name:any;


  ngOnInit() {
    this.name=localStorage.getItem("auth-user")?.toString().split("@")[0];
  }

  onLogout(){
    localStorage.removeItem("Token");
    localStorage.removeItem("auth-user");
    localStorage.removeItem("user-type");
    this.router.navigateByUrl("/login");
    
  }
}
