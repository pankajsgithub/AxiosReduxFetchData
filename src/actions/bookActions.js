//import * as actionTypes from './actionTypes';
import FETCH_BOOKS_SUCCESS from './actionTypes';
import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';


export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books
  };
  
};


export const fetchBooks = () => {
    return (dispatch) => {
      return Axios.get(apiUrl)
        .then(response => {
          dispatch(fetchBooksSuccess(response.data))
          //console.log(fetchBooks);
          console.log(books)
        });
    };
  };
  