import { ADD_CAT, DELETE_CAT } from '../types';

export const addCat = content => (
  {
    type: ADD_CAT,
    payload: {
      //mock unique id - would need better one for production
      id: '_' + Math.random().toString(36).substr(2, 9),
      content
    },
  }
);

export const deleteCat = id => (
  {
    type: DELETE_CAT,
    payload: {
      id
    },
  }
);

