import { Component, OnInit } from '@angular/core';
import { userDet } from '../models/userDet.models';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  

  constructor(private router:Router, private route:ActivatedRoute, private userservice: user, private http: HttpClient) { }
  firstname: string;
  password: string;
  user: userDet[]=[];
  detailss = new userDet();
  det: userDet;
  Id: number;
  del : userDet;

  ngOnInit(): void {
  }
  homePage(){

    this.detailss.firstName = this.firstname;
    this.detailss.password = this.password;
    
    
    
      this.userservice.getEachUser(this.firstname).subscribe((datas: userDet) => {
        this.det= datas;

        if((this.det.firstName == this.firstname) && (this.det.password == this.password)){
          
          console.log(this.firstname);
          this.router.navigate(["/homepage"]);
        }
        else{
          alert("wrong credentials");
        }
        
      });
    }
  
  deletePage(){

    this.userservice.delete(this.Id).subscribe(data => {
      console.log(data);
      console.log("Deleted");
    });
    }

}
