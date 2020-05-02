import { Action } from '@ngrx/store';
import { IFavoriteCity } from '../../interfaces/favorite-city.interface';

export const GET_FAVORITES_LIST = 'GET_FAVORITES_LIST';
export const GET_FAVORITES_LIST_SUCCESS = 'GET_FAVORITES_LIST_SUCCESS';
export const ADD_FAVORITES_ITEM = 'ADD_FAVORITES_ITEM';
export const ADD_FAVORITES_ITEM_SUCCESS = 'ADD_FAVORITES_ITEM_SUCCESS';
export const REMOVE_FAVORITES_ITEM = 'REMOVE_FAVORITES_ITEM';
export const REMOVE_FAVORITES_ITEM_SUCCESS = 'REMOVE_FAVORITES_ITEM_SUCCESS';

export class GetFavoritesListAction implements Action {
  readonly type = GET_FAVORITES_LIST;

  constructor() {
  }
}

export class GetFavoritesListSuccess implements Action {
  readonly type = GET_FAVORITES_LIST_SUCCESS;

  constructor(public payload: any) {
  }
}

export class AddFavoritesItemAction implements Action {
  readonly type = ADD_FAVORITES_ITEM;

  constructor(public payload: IFavoriteCity []) {
  }
}

export class AddFavoritesItemActionSuccess implements Action {
  readonly type = ADD_FAVORITES_ITEM_SUCCESS;

  constructor(public payload: IFavoriteCity []) {
  }
}

export class RemoveFavoritesItemAction implements Action {
  readonly type = REMOVE_FAVORITES_ITEM;

  constructor(public payload: IFavoriteCity []) {
  }
}

export class  RemoveFavoritesItemActionSuccess implements Action {
  readonly type = REMOVE_FAVORITES_ITEM_SUCCESS;

  constructor(public payload: IFavoriteCity) {
  }
}

export type FavoritesListActions =
  GetFavoritesListAction |
  GetFavoritesListSuccess |
  AddFavoritesItemAction |
  AddFavoritesItemActionSuccess |
  RemoveFavoritesItemAction |
  RemoveFavoritesItemActionSuccess;

