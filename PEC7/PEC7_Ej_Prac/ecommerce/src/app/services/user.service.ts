import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private userStore: UserStoreService) {
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post('/api/user/login', { username: username, password: password }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  registerUser(username: string, password: string): Observable<any> {
    return this.http.post('api/user/register', { username: username, password: password });
  }
}
