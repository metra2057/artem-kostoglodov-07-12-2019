import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ICity } from '../interfaces/city-interface';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {

  constructor(private httpSerice: HttpService) { }

  getCities(data: any): Promise<ICity[]> {
    return this.httpSerice.get(`locations/v1/cities/autocomplete`, data);
  }
}
