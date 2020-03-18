import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {MainApiService} from '../../../services/main-api.service';
import {GET_SEARCH_DATA, GET_SEARCH_DATA_SUCCESS, GetSearchDataAction} from '../actions/search.actions';
import {ICity} from '../../interfaces/city.interface';

@Injectable()
export class SearchEffects {
  constructor(
    private mainApiService: MainApiService,
    private actions$: Actions
  ) {
  }

  @Effect() getSearchList: Observable<Action> = this.actions$.pipe(
    ofType(GET_SEARCH_DATA),
    mergeMap((action: GetSearchDataAction) => this.mainApiService.getCities(action.payload).pipe(
      map((payload: ICity[]) => ({type: GET_SEARCH_DATA_SUCCESS, payload}))
    ))
  );
}
