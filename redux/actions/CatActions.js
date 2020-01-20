import { ADD_CAT } from '../types';
import { DELETE_CAT } from '../types';
import { EDIT_CAT } from '../types';

let nextCatId = 0;

export const addCat = content => (
  {
    type: ADD_CAT,
    payload: {
      id: ++nextCatId,
      content
    },
  }
);

