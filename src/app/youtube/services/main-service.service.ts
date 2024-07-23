import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private apiUrl = 'https://api.github.com/repos/rolling-scopes-school/tasks/contents/tasks/angular/response.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => JSON.parse(atob(response.content)))
    );
  }
}
