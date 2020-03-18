import {GET_SEARCH_DATA, GET_SEARCH_DATA_SUCCESS, SearchActions} from '../actions/search.actions';
import {ICity} from '../../interfaces/city.interface';

export const searchKey = 'search';

export interface ISearchState {
  searchResult: ICity[];
}

const initialState: ISearchState = {
  searchResult: []
}

export const searchReducer = (state = initialState, action: SearchActions) => {
  switch (action.type) {
    case GET_SEARCH_DATA:
      return {
        ...state
      };
    case GET_SEARCH_DATA_SUCCESS:
      console.log(1);
      return {
        ...state,
        searchResult: action.payload
      }
    default:
      return state;
  }
}
