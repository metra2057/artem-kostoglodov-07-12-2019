import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // no-op Safari private mode
  private storage = {};

  constructor() {
  }

  public setItem(key: string, data: any): Observable<any> {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (_) {
      this.storage[key] = JSON.stringify(data);
    }

    return of(true);
  }

  public getItem(key: string): Observable<any> {
    let data = null;

    try {
      data = JSON.parse(localStorage.getItem(key));
    } catch (_) {
      data = JSON.parse(typeof this.storage[key] === 'undefined' ? null : this.storage[key]);
    }

    return of(data);
  }

  public async removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (_) {
      delete this.storage[key];
    }

    return true;
  }
}
