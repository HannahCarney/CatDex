

import { combineReducers } from 'redux';
import { ADD_CAT } from '../types';

const INITIAL_STATE = {
  allIds: [],
  byIds: {}
  };

const catReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CAT:
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    default:
      return state;
  }
};

export default combineReducers({
    cats: catReducer,
  });