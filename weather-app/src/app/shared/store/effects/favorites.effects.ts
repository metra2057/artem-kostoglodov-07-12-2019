import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import { LocalStorageService } from '../../../services/local-storage.service';
import { IFavoriteCity } from '../../interfaces/favorite-city.interface';
import {
  ADD_ITEM_TO_FAVORITES,
  ADD_ITEM_TO_FAVORITES_SUCCESS,
  GET_FAVORITES_LIST,
  GET_FAVORITES_LIST_SUCCESS, REMOVE_ITEM_FROM_FAVORITES, REMOVE_ITEM_FROM_FAVORITES_SUCCESS
} from '../actions-types/actions-types';
import { setActionParams } from '../index';

@Injectable()
export class FavoritesListEffects {
  constructor(
    private localStorageService: LocalStorageService,
    private actions$: Actions
  ) {
  }

  public getFavoritesList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_FAVORITES_LIST),
      mergeMap(() => this.localStorageService.getItem('w_favorites')
        .pipe(
          map((payload: IFavoriteCity []) => setActionParams(GET_FAVORITES_LIST_SUCCESS, payload))
        ))));

  public addFavoritesListItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_ITEM_TO_FAVORITES),
      mergeMap((action: { payload: IFavoriteCity [] }) =>
        this.localStorageService.setItem('w_favorites', action.payload)
          .pipe(
            map((payload: IFavoriteCity []) => setActionParams(ADD_ITEM_TO_FAVORITES_SUCCESS, payload)),
          ))));

  public removeFavoritesListItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(REMOVE_ITEM_FROM_FAVORITES),
      mergeMap((action: { payload: IFavoriteCity [] }) =>
        this.localStorageService.setItem('w_favorites', action.payload)
          .pipe(
            map(() => setActionParams(REMOVE_ITEM_FROM_FAVORITES_SUCCESS, action.payload))
          ))));
}
