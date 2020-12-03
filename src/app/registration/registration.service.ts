import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const addUserURl = 'http://localhost:3000/registerUser';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpclient:HttpClient) { }

  addUser(userDetails:any) : Observable<any>{
    return this.httpclient.post<any>(addUserURl, userDetails).pipe(
      tap((res:any) =>{
        console.log(res);
      })
    )
  }




}
