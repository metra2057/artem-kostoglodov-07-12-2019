import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ISearchState, searchKey} from '../reducers/search.reducer';

export const selectSearchFeature = createFeatureSelector<ISearchState>(searchKey);
export const selectSearch = createSelector(
  selectSearchFeature,
  (state: ISearchState): any => state.searchResult
);
