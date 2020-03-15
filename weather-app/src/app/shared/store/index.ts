import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {citiesKey, citiesReducer, ICitiesState} from './reducers/cities.reducer';

export interface State {
  readonly [citiesKey]: ICitiesState;
}

export const reducers: ActionReducerMap<State> = {
  [citiesKey]: citiesReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
