import {
  GET_FAVORITES_LIST,
  GET_FAVORITES_LIST_SUCCESS,
  ADD_FAVORITES_ITEM,
  ADD_FAVORITES_ITEM_SUCCESS,
  FavoritesListActions, REMOVE_FAVORITES_ITEM, REMOVE_FAVORITES_ITEM_SUCCESS
} from '../actions/favorites.actions';
import { IFavoriteCity } from '../../interfaces/favorite-city.interface';

export const favoritesListKey = 'favoritesList';

export interface IFavoritesListState {
  list: IFavoriteCity [];
}

const initialState: IFavoritesListState = {
  list: []
};

export const favoritesListReducer = (state = initialState, action: FavoritesListActions) => {
  switch (action.type) {
    case GET_FAVORITES_LIST:
      return {
        ...state,
      };
    case GET_FAVORITES_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case ADD_FAVORITES_ITEM:
      return {
        ...state,
      };
    case ADD_FAVORITES_ITEM_SUCCESS:
      return {
        ...state,
      };
    case REMOVE_FAVORITES_ITEM:
      return {
        ...state,
      };
    case REMOVE_FAVORITES_ITEM_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
