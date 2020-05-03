import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { MainApiService } from '../../../services/main-api.service';
import { ICity } from '../../interfaces/city.interface';
import { GET_SEARCH_DATA, GET_SEARCH_DATA_SUCCESS } from '../actions-types/actions-types';
import { setActionParams } from '../index';

@Injectable()
export class SearchEffects {
  constructor(
    private mainApiService: MainApiService,
    private actions$: Actions
  ) {
  }

  public getSearchList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(GET_SEARCH_DATA),
    mergeMap((action: { payload: { q: string } }) => this.mainApiService.getCities(action.payload).pipe(
      map((payload: ICity[]) => setActionParams(GET_SEARCH_DATA_SUCCESS, payload))
    ))));
}
