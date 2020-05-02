import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mergeMap} from 'rxjs/operators';
import {
  GET_FAVORITES_LIST,
  GET_FAVORITES_LIST_SUCCESS,
  ADD_FAVORITES_ITEM,
  ADD_FAVORITES_ITEM_SUCCESS,
  AddFavoritesItemAction,
  REMOVE_FAVORITES_ITEM,
  REMOVE_FAVORITES_ITEM_SUCCESS,
} from '../actions/favorites.actions';
import {LocalStorageService} from '../../../services/local-storage.service';
import { IFavoriteCity } from "../../interfaces/favorite-city.interface";

@Injectable()
export class FavoritesListEffects {
  constructor(
    private localStorageService: LocalStorageService,
    private actions$: Actions
  ) {
  }

  @Effect() getFavoritesList$: Observable<Action> = this.actions$.pipe(
    ofType(GET_FAVORITES_LIST),
    mergeMap(() => this.localStorageService.getItem('w_favorites')
    .pipe(
      map(payload => ({type: GET_FAVORITES_LIST_SUCCESS, payload}))
    ))
  );

  @Effect() addFavoritesListItem$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_FAVORITES_ITEM),
    mergeMap((action: AddFavoritesItemAction) => this.localStorageService.setItem('w_favorites', action.payload).pipe(
      map((payload: IFavoriteCity []) => ({type: ADD_FAVORITES_ITEM_SUCCESS, payload}))
    ))
  );

  @Effect() removeFavoritesListItem$: Observable<Action> = this.actions$.pipe(
    ofType(REMOVE_FAVORITES_ITEM),
    mergeMap((action: AddFavoritesItemAction) => this.localStorageService.setItem('w_favorites', action.payload).pipe(
      map(() => ({type: REMOVE_FAVORITES_ITEM_SUCCESS, payload: action.payload}))
    ))
  );
}
