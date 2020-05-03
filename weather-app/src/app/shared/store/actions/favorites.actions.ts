import { createAction, props } from '@ngrx/store';
import { IFavoriteCity } from '../../interfaces/favorite-city.interface';
import {
  GET_FAVORITES_LIST,
  GET_FAVORITES_LIST_SUCCESS,
  ADD_ITEM_TO_FAVORITES,
  ADD_ITEM_TO_FAVORITES_SUCCESS,
  REMOVE_ITEM_FROM_FAVORITES,
  REMOVE_ITEM_FROM_FAVORITES_SUCCESS
} from '../actions-types/actions-types';

export const getFavoritesListAction = createAction(GET_FAVORITES_LIST);
export const getFavoritesListSuccessAction = createAction(GET_FAVORITES_LIST_SUCCESS, props<{ payload: IFavoriteCity [] }>());
export const addItemToFavoriteAction = createAction(ADD_ITEM_TO_FAVORITES, props<{ payload: IFavoriteCity [] }>());
export const addItemToFavoriteSuccessAction = createAction(ADD_ITEM_TO_FAVORITES_SUCCESS, props<{ payload: IFavoriteCity [] }>());
export const removeItemFromFavoritesAction = createAction(REMOVE_ITEM_FROM_FAVORITES, props<{ payload: IFavoriteCity [] }>());
export const removeItemFromFavoritesSuccessAction = createAction(REMOVE_ITEM_FROM_FAVORITES_SUCCESS, props<{ payload: IFavoriteCity [] }>());
