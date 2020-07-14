import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { user } from './user.service';

@Injectable({
    providedIn: 'root'
    })

    export class UserResolverService implements Resolve<any> {
        constructor(private ps: user, private route: ActivatedRoute) { }
        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            return this.ps.geteachpost(1).pipe(
              catchError((error) => {
              return empty();
              })
            );
          }
        }