import { createFeatureSelector, createSelector } from '@ngrx/store';
import { favoritesListKey, IFavoritesListState } from '../reducers/favorites.reducer';
import { IFavoriteCity } from '../../interfaces/favorite-city.interface';

export const selectFavoritesListFeature = createFeatureSelector<IFavoritesListState>(favoritesListKey);
export const selectFavoriteList = createSelector(
  selectFavoritesListFeature,
  (state: IFavoritesListState): IFavoriteCity [] => state.list
);
