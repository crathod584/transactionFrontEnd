import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  addTransaction(data):Observable<any>{
    return this.http.post<any>(`${environment.backend_server_url}/addTransaction`,data);
  }

  getTransaction():Observable<any>{
    return this.http.get<any>(`${environment.backend_server_url}/getTransaction`);
  }
}
