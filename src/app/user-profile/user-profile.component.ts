import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User =  {
    name : 'Doe',
    firstName : 'John',
    age : '25',
    citation : 'Vaut mieux tenir que courrir',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  commut : boolean = false;

  constructor() {

   }

  ngOnInit(): void {
  }

  onClickCommut(){
    this.commut = !this.commut;
  }

}
