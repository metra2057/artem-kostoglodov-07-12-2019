import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly apiUrl = environment.apiUrl;
  private readonly apiKey = environment.apiKey;

  constructor(public http: HttpClient) { }

  get(path: string, data: any = null): Promise<any> {
    const payload = this.convertQueryParams({
      apiKey: this.apiKey, 
      ...data,
    });

    return this.http.get(`${this.apiUrl}/${path}?${payload}`, {headers: this.setHeaders()}).toPromise()
      .catch(error => console.error(error));
  }

  private setHeaders() {
    const CONFIG = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });

    return CONFIG;
  }
  /**
   * @summary Convert query params
  */
  private convertQueryParams(params: any) {
    if (params) {
      let query = new HttpParams();
      Object.keys(params).forEach((key) => {
        if (params[key] && !Array.isArray(params[key])) {
          query = query.append(key, params[key]);
        }
        if (params[key] && Array.isArray(params[key])) {
          for (const elem of params[key]) {
            query = query.append(key, elem);
          }
        }
      });
      return query;
    } else {
      return params;
    }
  }
}
