import { Component, OnInit } from '@angular/core';
import { EnabledBlockingInitialNavigationFeature, OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isLoggedIn:Boolean = false;

  ngOnInit(): void {
      if(localStorage.getItem("Token") != null){
        this.isLoggedIn = true;
      }  
  }


}
