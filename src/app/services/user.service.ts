import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userDet } from '../models/userDet.models';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})


export class user {
    constructor(private http: HttpClient) {


    }
    getAllPosts() : Observable<any> {
        return this.http.get("http://localhost:60039/api/Auth");
    }
    geteachpost(id: number) : Observable<any> {
        return this.http.get("http://localhost:60039/api/Auth/" + id);
    }
    getEachUser(firstname: string) : Observable<any> {
        return this.http.get("http://localhost:60039/api/Auth/api/" + firstname);
    }
    getEachUserPassword(password : string): Observable<any>{
        return this.http.get("http://localhost:60039/api/Auth/ap/" + password);
    }

    postmeth(data : userDet) {


        return this.http.post<any>("http://localhost:60039/api/Auth",data,
        {
            headers: new HttpHeaders({
                'content-type' : 'application/json'
            })
        });
        //return this.http.post("http://localhost:31511/api/Auth", posting);
    }

    delete(id: number){
    
        return this.http.delete<any>("http://localhost:60039/api/Auth/"+id);
        //retu

    }
    update(id: number, datas :userDet){
        return this.http.put("http://localhost:60039/api/Auth/"+id, datas);
    }

}