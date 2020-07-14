import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { userDet } from '../models/userDet.models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private userservice: user, private http: HttpClient) { }


  u :userDet[] =[];
  pos: userDet;
  details: userDet;
  det:userDet;
  
  ngOnInit(): void {

    this.getpo();
    

  }

  getpo() {
    this.userservice.getAllPosts().subscribe((data: userDet[]) => {
      this.u = data;
      console.log(this.u);
    });
  }
  Data(id:number){
    this.userservice.geteachpost(id).subscribe((datas: userDet) => {
      this.pos = datas;
    });
  }
  updatingData(id:number){

    // this.userservice.update(id, this.details).subscribe((datas: userDet) => {
    //   this.det = datas;
    // });
  

  }
}
