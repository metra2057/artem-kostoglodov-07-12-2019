import { ICity } from '../../interfaces/city.interface';
import { createReducer, on } from '@ngrx/store';
import * as SearchActions from '../actions/search.actions';

export const searchKey = 'search';

export interface ISearchState {
  searchResult: ICity [];
}

const initialState: ISearchState = {
  searchResult: []
}

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.getSearchData, state =>
    ({...state})),
  on(SearchActions.getSearchDataSuccess, (state, {payload}) =>
    ({...state, searchResult: payload}))
);
