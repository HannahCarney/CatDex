import { ADD_CAT } from '../types';
import { DELETE_CAT } from '../types';
import { EDIT_CAT } from '../types';



export const addCat = catIndex => (
  {
    type: ADD_CAT,
    payload: catIndex,
  }
);