import { IFavoriteCity } from '../../interfaces/favorite-city.interface';
import { createReducer, on } from '@ngrx/store';
import * as FavoriteListActions from '../actions/favorites.actions';

export const favoritesListKey = 'favoritesList';

export interface IFavoritesListState {
  list: IFavoriteCity [];
}

const initialState: IFavoritesListState = {
  list: []
};

export const favoritesListReducer = createReducer(
  initialState,
  on(FavoriteListActions.getFavoritesListAction, state =>
    ({...state})),
  on(FavoriteListActions.getFavoritesListSuccessAction, (state, {payload}) =>
    ({...state, list: payload})),
  on(FavoriteListActions.addItemToFavoriteAction, state =>
    ({...state})),
  on(FavoriteListActions.addItemToFavoriteSuccessAction, (state, {payload}) =>
    ({...state})),
  on(FavoriteListActions.removeItemFromFavoritesAction, state =>
    ({...state})),
  on(FavoriteListActions.removeItemFromFavoritesSuccessAction, (state, {payload}) =>
    ({...state, list: payload}))
);
