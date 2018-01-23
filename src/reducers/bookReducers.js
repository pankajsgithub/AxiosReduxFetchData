//import * as actionTypes from './actionTypes';
import { FETCH_BOOKS_SUCCESS } from '../actions/actionTypes';

export const booksReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_BOOKS_SUCCESS:
            return action.books;
      default:
            return state;
    }
  };

