import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {citiesKey, citiesReducer, ICitiesState} from './reducers/cities.reducer';
import {searchKey, searchReducer, ISearchState} from './reducers/search.reducer';

export interface State {
  readonly [citiesKey]: ICitiesState;
  readonly [searchKey]: ISearchState;
}

export const reducers: ActionReducerMap<State> = {
  [citiesKey]: citiesReducer,
  [searchKey]: searchReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
