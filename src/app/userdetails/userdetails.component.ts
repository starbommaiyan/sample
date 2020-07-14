import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../services/user.service';
import { userDet } from '../models/userDet.models';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userservice: user, private route:ActivatedRoute, private router:Router) { }
  pos: userDet;
  pass: string;
  u :userDet[] =[];
  id:any;
  det:userDet[] =[];
  details= new userDet();
  Id: number;
  fName : string;
  LName: string;
  mail : string;
  pNumber:string;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    
  this.getpo();
  this.geteachpo();

  }
  getpo() {
    this.userservice.getAllPosts().subscribe((data: userDet[]) => {
      this.u = data;
      console.log(this.u);
    });
  }
  geteachpo(){
    this.userservice.geteachpost(this.id).subscribe((datas: userDet) => {
      this.pos = datas;
      console.log(datas);
    });

  }
   createPost(){
  

    this.details.firstName = this.fName,
    this.details.lastName = this.LName,
    this.details.email = this.mail,
    this.details.phoneNumber = this.pNumber,
    this.details.password = this.pass;
    console.log(this.details)
    this.userservice.postmeth(this.details).subscribe((data)=>{

    this.det = data;
    console.log(this.det);
    this.router.navigate(["/login"]);

    
    },
    

    
    
    )

   }

}
