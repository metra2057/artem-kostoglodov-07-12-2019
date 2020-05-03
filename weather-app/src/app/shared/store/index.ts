import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';
import { citiesKey, citiesReducer, ICitiesState } from './reducers/cities.reducer';
import { searchKey, searchReducer, ISearchState } from './reducers/search.reducer';
import { favoritesListKey, favoritesListReducer, IFavoritesListState } from './reducers/favorites.reducer';

export interface IState {
  readonly [citiesKey]: ICitiesState;
  readonly [searchKey]: ISearchState;
  readonly [favoritesListKey]: IFavoritesListState;
}

export const reducers: ActionReducerMap<IState> = {
  [citiesKey]: citiesReducer,
  [searchKey]: searchReducer,
  [favoritesListKey]: favoritesListReducer
};

export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<IState>>('root reducers');

export const setActionParams = (type: string, payload?: any): { type, payload } => ({type, payload});
