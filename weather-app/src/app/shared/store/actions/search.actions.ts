import { createAction, props } from '@ngrx/store';
import { ICity } from '../../interfaces/city.interface';
import { GET_SEARCH_DATA, GET_SEARCH_DATA_SUCCESS } from '../actions-types/actions-types';

export const getSearchData = createAction(GET_SEARCH_DATA, props<{ payload: { q: string } }>());
export const getSearchDataSuccess = createAction(GET_SEARCH_DATA_SUCCESS, props<{ payload: ICity [] }>());

