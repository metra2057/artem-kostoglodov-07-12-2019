import {Action} from '@ngrx/store';
import {ICity} from '../../interfaces/city.interface';

export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';
export const GET_SEARCH_DATA_SUCCESS = 'GET_SEARCH_DATA_SUCCESS';

export class GetSearchDataAction implements Action {
  readonly type = GET_SEARCH_DATA;

  constructor(public payload: { q: string; }) {
  }
}

export class GetSearchDataSuccessAction implements Action {
  readonly type = GET_SEARCH_DATA_SUCCESS;

  constructor(public payload: ICity[]) {
  }
}

export type SearchActions = GetSearchDataAction | GetSearchDataSuccessAction;
