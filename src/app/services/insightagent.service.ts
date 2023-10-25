import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsightagentService {
  baseUrl = "http://localhost:8000/ap/v1/agent/";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  sendEvent(user_input:string) : Observable<any> {
    return this.http.post(this.baseUrl+'tasks/', {
      "input": user_input
    },
    {headers: this.httpHeaders}
    );
  };

  startTask(task_id:string) : Observable<any> {
    return this.http.post(this.baseUrl+'tasks/'+task_id+'/steps', {
      "input": "start"
    },
    {headers: this.httpHeaders}
    );
  }

  endTask(task_id: string) : Observable<any> {
    return this.http.get(this.baseUrl+'tasks/'+task_id+'/data',
    {headers: this.httpHeaders}
    );
  }

}
